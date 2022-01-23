import { ProductService } from '../service/product-service.js'

let form = document.querySelector("[data-form]")

form.addEventListener('submit', (event) => {

    event.preventDefault()

    let productService = new ProductService();

    productService.CreteProduct(`http://localhost:3000/products`, ToJson(form))
    .then(() => {

        window.location.href = "http://localhost:5000/admin/front-end/index.html"

    })

})

function ToJson(form) {

    let produto = {

        "nome": form.nome.value,
        "loja": form.loja.value,
        "preco": form.preco.value,
        "categoria": form.categoria.value,
        "url": form.url.value,
        "img": form.img.value

    }

    return produto
    
}