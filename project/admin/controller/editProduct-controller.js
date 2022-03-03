import { ProductService } from '../service/product-service.js'

( async() => {
    
    const productService = new ProductService();
    let getURL = new URL(window.location);
    let form = document.querySelector("[data-form-edit]")
    
    try {
        
        let service = await productService.GetProductDetails(`http://localhost:3000/products/${getURL.searchParams.get('id')}`);
    
        form.nome.value = service.nome,
        form.loja.value = service.loja,
        form.categoria.value = service.categoria,
        form.preco.value = service.preco,
        form.url.value = service.url,
        form.img.value = service.img
    
        form.addEventListener('submit', async (event) => {
    
            event.preventDefault()
        
            await productService.UpdateProduct(`http://localhost:3000/products/${getURL.searchParams.get('id')}`, productService.FormToJson(form))
            window.location.href = "http://localhost:5000/admin/front-end/index.html"
        
        })

    } catch (error) {
        
        console.log(error);
        window.location.href = '../front-end/erro.html'
        
    }

})()

