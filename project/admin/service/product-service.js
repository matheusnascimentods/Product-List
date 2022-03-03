export class ProductService { 

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

        if (resposta.ok) {
            
            return resposta.body
        
        }

        throw new Error('Não foi possível cadastrar este produto no banco de dados. Veja se não a nenhum erro na url ou no body.')  

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

        if (resposta.ok) {

            return resposta.json()

        }

        throw new Error('Não foi possível atulizar este produto. Veja se não a nenhum erro na url ou no body.')

    }

    async GetJson(url) {

        const resposta = await fetch(url)
        if (resposta.ok) {
            
            return await resposta.json()

        }

        throw new Error('Não foi possivel buscar os produtos do banco de dados. Veja se não a nenhum erro na url.')
    
    }

    async GetProductDetails(url) {

        const resposta = await fetch(url)

        if (resposta.ok) {

            return await resposta.json()

        }

        throw new Error('Não foi possível buscar este produto. Veja se não a nenhum erro na url.')

    }

    async DeleteProduct(url) {

        const resposta = await fetch(url, {

            method: 'DELETE',


        })

        if (resposta.ok) {

            return await resposta.json()

        }

        throw new Error('Não foi possível excluir este produto. Veja se não a nenhum erro na url.')

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