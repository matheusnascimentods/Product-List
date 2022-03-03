import { ProductService } from '../service/product-service.js'

const productService = new ProductService();

document.querySelector('[data-product-section]').addEventListener('click', async (event) => {

    try {

        if (event.target.className == 'delete-button') {

            let id = event.target.closest('[data-id]').dataset.id
            await productService.DeleteProduct(`http://localhost:3000/products/${id}`)
            event.target.closest('[data-id]').remove()
    
            
        }
        
    } catch (error) {
        
        console.log(error);
        window.location.href = '../front-end/erro.html'

    }

})