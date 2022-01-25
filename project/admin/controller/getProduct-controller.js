import { ProductService } from '../service/product-service.js'

const productService = new ProductService();

Render()
FindByName()

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

async function  Render() {

    try {

        let service = await productService.GetJson(`http://localhost:3000/products`)
        service.forEach(function(produto) {
            
            NewCard(produto, '[data-product-section]')
            
        });
        
    } catch (error) {

        console.log(error);
        window.location.href = '../front-end/erro.html'
        
    }

}

function FindByName() {

    let input = document.querySelector("[data-search-input]")

    input.addEventListener("input", function() {

        let produtos = document.querySelectorAll(".card");
    
        if(this.value.length > 0){

            produtos.forEach( (produto) => {

                let title = produto.querySelector("[data-card-title]").textContent;
                let expressao = new RegExp(this.value, "i")
    
                if (!expressao.test(title)) {
    
                    produto.classList.add("hidden");
                    
                } else {
    
                    produto.classList.remove("hidden");
                    
                }

            })
    
        } else {

            produtos.forEach( (produto) => {
                
                produto.classList.remove("hidden")

            })
    
        }
    
    });

}

function NewCard(produto, ParentElement) {

    let card = document.createElement("div")
    card.classList.add("card")

    const content =
    `
        <h2 class="card-title" data-card-title >${produto.nome}</h2>
        
        <div class="card-content"> 
    
            <img class="card-image" src=${produto.img} alt="imagem do produto">
            
            <div class="content">
                
                <div class="content-line">
    
                    <div class="product-informations">
    
                        <p class="product-informations-text">Preço: R$</p>
                        <p class="product-informations-text">${produto.preco}</p>
    
                    </div>
    
                    <div class="product-informations">
    
                        <p class="product-informations-text">Categoria:</p>
                        <p class="product-informations-text">${produto.categoria}</p>
    
                    </div>
    
                </div>
    
                <div class="content-line">
    
                    <div class="product-informations">
    
                        <p class="product-informations-text">Loja:</p>
                        <p class="product-informations-text">${produto.loja}</p>
    
                    </div>
    
                </div>
    
                <div class="product-button">
    
                    <a class="delete-button">Excluir</a>
                    <a href="http://localhost:5002/admin/front-end/edit.html?id=${produto.id}" class="edit-button">Editar</a>
    
                </div>   
    
                <div class="product-button">
    
                    <a href= ${produto.url} target="_blank" class="view-button">Ver no site</a>
    
                </div>  
    
            </div>
    
            </div>
        
    `

    card.innerHTML = content;
    card.dataset.id = produto.id
    
    document.querySelector(ParentElement).appendChild(card)

}