import { ProductService } from '../service/product-service.js'

let form = document.querySelector("[data-form]")

form.addEventListener('submit', (event) => {

    event.preventDefault()

    let productService = new ProductService();

    productService.CreteProduct(`http://localhost:3000/products`, productService.FormToJson(form))
    .then(() => {

        window.location.href = "http://localhost:5000/admin/front-end/index.html"

    })

})