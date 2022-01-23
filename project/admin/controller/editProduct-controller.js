import { ProductService } from '../service/product-service.js'
const productService = new ProductService();

let getURL = new URL(window.location);

let form = document.querySelector("[data-form-edit]")

productService.GetProductDetails(`http://localhost:3000/products/${getURL.searchParams.get('id')}`)
.then(dados => {

    form.nome.value = dados.nome,
    form.loja.value = dados.loja,
    form.categoria.value = dados.categoria,
    form.preco.value = dados.preco,
    form.url.value = dados.url,
    form.img.value = dados.img

})

form.addEventListener('submit', (event) => {

    event.preventDefault()

    productService.UpdateProduct(`http://localhost:3000/products/${getURL.searchParams.get('id')}`, productService.FormToJson(form))
    .then(() => {

        window.location.href = "http://localhost:5000/admin/front-end/index.html"

    })

})