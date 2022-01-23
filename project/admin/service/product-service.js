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

 }