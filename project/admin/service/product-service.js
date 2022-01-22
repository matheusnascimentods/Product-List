export function GetJson(url) {

    return fetch(url)
    .then(resposta => {

        return resposta.json()

    })

}

export const ProductService = { GetJson }