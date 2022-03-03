document.querySelector("[data-search-input]").addEventListener("input", function() {

    let produtos = document.querySelectorAll(".card");

    if(this.value.length > 0){

        produtos.forEach( (produto) => {

            let expressao = new RegExp(this.value, "i");

            if (!expressao.test(produto.querySelector("[data-card-title]").textContent)) {

                produto.classList.add("hidden");
                
            } else {

                produto.classList.remove("hidden");
                
            }

        })

    } else {

        produtos.forEach( (produto) => {
            
            produto.classList.remove("hidden");

        })

    }

});