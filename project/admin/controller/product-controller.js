import { ProductService } from '../service/product-service.js'

ProductService.GetJson(`http://localhost:3000/products`)
.then((data) => {

    data.forEach(function(produto) {
        
        NewCard(produto, '[data-product-section]')
        
    });
    
})

FindByName()

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
    card.setAttribute("data", "data-card")

    const content =
    `
        <h2 class="card-title" data-card-title >${produto.nome}</h2>
        
        <div class="card-content"> 
    
            <img src=${produto.img} alt="imagem do produto">
            
            <div class="content">
                
                <div class="content-line">
    
                    <div class="line-1">
    
                        <p class="content-informations">Preço: R$</p>
                        <p class="content-informations-value">${produto.preco}</p>
    
                    </div>
    
                    <div class="line-2">
    
                        <p class="content-informations">Categoria:</p>
                        <p class="content-informations-value">${produto.categoria}</p>
    
                    </div>
    
                </div>
    
                <div class="content-line">
    
                    <div class="line-3">
    
                        <p class="content-informations">Loja:</p>
                        <p class="content-informations-value">${produto.loja}</p>
    
                    </div>
    
                </div>
    
                <div class="button">
    
                    <a id="delete">Excluir</a>
                    <a id="edit">Editar</a>
    
                </div>   
    
                <div class="button">
    
                    <a href= ${produto.url} id="view">Ver no site</a>
    
                </div>  
    
            </div>
    
        </div>
    `
    card.innerHTML = content;
    
    document.querySelector(ParentElement).appendChild(card)

}