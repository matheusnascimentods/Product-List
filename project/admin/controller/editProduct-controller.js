import { ProductService } from '../service/product-service.js'
const productService = new ProductService();

( async() => {
    
    let getURL = new URL(window.location);
    let form = document.querySelector("[data-form-edit]")
    let service = await productService.GetProductDetails(`http://localhost:3000/products/${getURL.searchParams.get('id')}`)

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

})()

