export class ProductService { 

    async GetJson(url) {

        const resposta = await fetch(url)
        return await resposta.json()
    
    }

    async CreteProduct(url, produto) {

        const resposta = await fetch(url, {

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
        return resposta.body

    }

    DeleteProduct(url) {

        return fetch(url, {

            method: 'DELETE',


        })

    }

    async GetProductDetails(url) {

        const resposta = await fetch(url)
        return await resposta.json()

    }

    async UpdateProduct(url, produto) {

        const resposta = await fetch(url, { 

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
        return resposta.json()

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