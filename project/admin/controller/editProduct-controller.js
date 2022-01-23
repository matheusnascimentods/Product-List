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

    productService.UpdateProduct(`http://localhost:3000/products/${getURL.searchParams.get('id')}`, ToJson(form))
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