import { ProductService } from '../service/product-service.js'

const productService = new ProductService();

(async function () {

    try {

        let service = await productService.GetJson(`http://localhost:3000/products`)
        service.forEach(function(produto) {
            
            NewCard(produto, '[data-product-section]')
            
        });
        
    } catch (error) {

        console.log(error);
        window.location.href = '../front-end/erro.html'
        
    }

})();

function NewCard(produto, ParentElement) {

    let card = document.createElement("div");
     
        card.dataset.id = produto.id;
        card.classList.add("card");

        card.innerHTML = 

            `
            <a href=${produto.url} target="_blank"><h2 class="card-title" data-card-title >${produto.nome}</h2></a>
            
            <div class="card-content"> 

                <a href=${produto.url} target="_blank"><img class="card-image" src=${produto.img} alt="imagem do produto"></a>
                
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
                            
                    </div>   

                    <div class="product-button">

                        <a href="../front-end/edit.html?id=${produto.id}" class="edit-button">Editar</a>

                    </div>  

                </div>

            </div>
            
            `

        ;
    
    document.querySelector(ParentElement).appendChild(card);

}