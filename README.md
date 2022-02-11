# Product-list

<h2>Descrição:</h2>

>O projeto deste repositório é uma Lista de produtos feita em `Html/Css` e `Javascript`, com os cursos DOM e CRUD assíncrono da Alura e também com um video sobre responsividade da  Rocketseat

<h2>Pré-requisitos</h2>
Antes de começar, verifique se sua maquina atende aos seguintes requisitos:

* Para executar a aplicação é necessário ter o `Nodejs` instalado na sua máquina, deixarei o link de download abaixo.
  * link do Node no site oficial: https://nodejs.org/en/download/

<h2>Como Usar</h2>

##### NOTA: PARA UTILIZAR A APLICAÇÃO É NECESSÁRIO VER SE SUA MAQUINA ATENDE AOS REQUISITOS MÍNIMOS DESCRITOS ACIMA

Primeiramente para utilizar a aplicação é necessário navegar até pasta "Product-List" pelo terminal e colar o seguinte comando:

```Ruby                          
npm install -g browser-sync

```
este comando irá instalar o Browsersync que lhe permitira rodar um servidor para acessar o front-end da aplicação depois de executado uma vez ele não precisará mais ser executado.

Depois será necessário abrir outro terminal e navegar até a pasta "admin " e colar o seguinte comando:

```Ruby                          
npx json-server --watch db.json

```
assim a aplicação notará que o arquivo "db.json" é o banco de dados e poderemos consulta-lo.

E por fim será necessário abrir mais um terminal e navegar até a paste "project" executar o seguinte comando:

```Ruby                          
browser-sync start --server --file . --host --port 5000 --startPath admin/front-end/index.html

```
<h2>Imagens da aplicação</h2>

### Pagina de início.
![scrennshot](https://github.com/matheusnascimentods/Product-list/blob/master/imgGit/home.png)

### Formulario para cadastrar produto
![scrennshot](https://github.com/matheusnascimentods/Product-list/blob/master/imgGit/form.png)
