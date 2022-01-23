import { ProductService } from '../service/product-service.js'

let form = document.querySelector("[data-form]")

form.addEventListener('submit',async (event) => {

    event.preventDefault()

    let productService = new ProductService();

    await productService.CreteProduct(`http://localhost:3000/products`, productService.FormToJson(form))
    window.location.href = "http://localhost:5000/admin/front-end/index.html"

})