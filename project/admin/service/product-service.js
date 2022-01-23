export class ProductService { 

    GetJson(url) {

        return fetch(url)
        .then(resposta => {
    
            return resposta.json()
    
        })
    
    }

    CreteProduct(url, produto) {

        return fetch(url, {

            method: 'POST',
            headers: { 

                'Content-Type' : 'application/json'

            },
            body : JSON.stringify({

                "nome": produto.nome,
                "loja": produto.loja,
                "preco": produto.preco,
                "categoria": produto.categoria,
                "url": produto.url,
                "img": produto.img

            })

        })
        .then (resposta => {

            return resposta.body

        })

    }

    DeleteProduct(url) {

        return fetch(url, {

            method: 'DELETE',


        })

    }

    GetProductDetails(url) {

        return fetch(url)
        .then(resposta =>  {

            return resposta.json()

        })

    }

    UpdateProduct(url, produto) {

        return fetch(url, { 

            method: "PUT", 
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ 

                "nome": produto.nome,
                "loja": produto.loja,
                "preco": produto.preco,
                "categoria": produto.categoria,
                "url": produto.url,
                "img": produto.img

            })


        })

    }

    FormToJson(form) {

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

 }