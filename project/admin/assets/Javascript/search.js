var input = document.querySelector("[data-search-input]");

input.addEventListener("input", function() {

    let produtos = document.querySelectorAll(".card");

    if(this.value.length > 0){

        for (let i = 0; i < produtos.length; i++) {
            
            let produto = produtos[i];
            let title = produto.querySelector(".card-title").textContent;
            let expressao = new RegExp(this.value, "i")

            if (!expressao.test(title)) {

                produto.classList.add("hidden");
                
            } else {

                produto.classList.remove("hidden");
                
            }
            
        }

    } else {

        for (let i = 0; i < produtos.length; i++) {
            
            produtos[i].classList.remove("hidden");

        }

    }

});