// //1 + 2 + ... + n - 1 + n
// const calcular = (numero) => {
//   //desafio 1
//   //se o usuário informar um número positivo, fazer como antes
//   // if (numero >= 1){
//   //   return Promise.resolve(
//   //     (numero / 2) * (numero + 1)
//   //   )
//   // }
//   // //senão, ou seja, se ele informar um número negativo, devolver uma promise no estado rejected, com a mensagem "o número deve ser positivo"
//   // return Promise.reject("O número deve ser positivo")

//   //desafio 2: refazer usando o operador ternário
//   return (
//     numero >= 1 ? 
//     Promise.resolve((numero / 2) * (numero + 1)) : 
//     Promise.reject("O número deve ser positivo")
//   )
// }
// calcular(10)
// .then(res => console.log(res))
// .catch(erro => console.log("Erro: " + erro))

// calcular(-2)
// .then(res => console.log(res))
// .catch(erro => console.log("Erro: " + erro))


// // const calculoRapidinho = (numero) => {
// //   return Promise.resolve(
// //     (numero / 2) * (numero + 1)
// //   )
// // }

// // calculoRapidinho(10).then(function(res){ console.log(res)})

// // function calculoDemorado(numero){
  
// //   const p = new Promise(function(resolve, reject){
// //     let resultado = 0
// //     for (let i = 1; i <= numero; i++)
// //       resultado = resultado + i
// //     resolve(resultado)
// //   })

// //   return p
// // }

// // let promiseResultante = calculoDemorado(10)
// // promiseResultante.then((res) => {
// //   console.log(res)
// // })
// // let resultado = calculoDemorado(10)
// // console.log(resultado)



// //promises
// //1 + 2 + ... + n - 1 + n
// // function calculoDemorado(numero){
// //   //executar em tempo linear em n. O(n)
// //   const p = new Promise(function(resolve, reject){
// //     let res = 0
// //     for (let i = 1; i <= numero; i++) res += i
// //     resolve(res)
// //   })
// //   return p
// // }

// // const promessa = calculoDemorado(10)
// // promessa.then((valor) => {console.log(`Valor calculado: ${valor}`)})
// // console.log("Outras coisas...")
// // const resultado = calculoDemorado(10)
// // console.log(resultado)
// // console.log("Outras coisas...")


// //inferno de callbacks
// //código hadouken
// // const fs = require ('fs')
// // const abrirArquivo = function(nomeArquivo){
// //   const exibirConteudo = function(erro, conteudo){
// //     if (erro){
// //       console.log(`Deu erro: ${erro}`)
// //     }
// //     else{
// //       console.log(`Conteúdo lido: ${conteudo.toString()}`)
// //       const dobro = Number(conteudo.toString()) * 2
// //       const finalizar = function(erro){
// //         console.log(`${erro ? "Deu erro ao salvar o dobro" : "Salvou o dobro com sucesso" }`)
// //       }
// //       fs.writeFile("dobro.txt", dobro.toString(), finalizar)
// //     }
// //   }
// //   fs.readFile(nomeArquivo, exibirConteudo)
// // }
// // abrirArquivo("arquivo.txt")
// //computação síncrona (bloqueante) e assíncrona(não bloqueante)
// // console.log("1")

// // setTimeout(() => {
// //   console.log("2")
// // }, 0)

// // const atualMaisTempo = new Date().getTime() + 17 * 60 * 1000
// // while (new Date().getTime() <= atualMaisTempo); //; é a operação NO-OP
// // console.log("3")

// //1
// //3
// //2




// // function demorada(tempo){
// //   console.log(`demorada: ${tempo}`)
// //   const atualMaisTempo = new Date().getTime() + tempo
// //   while(new Date().getTime() <= atualMaisTempo){

// //   }
// //   const d = 8 + 4
// //   return d
// // }
// // setTimeout(() => {
// //   demorada(2000)
// // }, 2000)
// // setTimeout(() => {
// //   demorada(1000)
// // }, 1000)

// // console.log("Fim do script principal")
// //1. Fim
// //2. 1000
// //3. 2000

// // setTimeout(() => {
// //   console.log("Dentro da setTimeout")
// // }, 0)

// // console.log("Depois da setTimeout")


// //exemplo não bloqueante
// // function demorada(){
// //   //extrair a data atual do sistema e deslocar de 2 segundos
// //   const dataAtualMais2Segundos = new Date().getTime() + 2000
// //   //ficar extraindo a data atual do sistema até que ela tenha passado da original
// //   while (new Date().getTime() <= dataAtualMais2Segundos){

// //   }
// //   const d = 8 + 4
// //   return d
// // }

// // const a = 2 + 3
// // const b = 5 + 9

// // setTimeout(() => {
// //   const d = demorada()
// //   console.log("d: " + d)
// // }, 500)

// // const e = 2 + a + b
// // console.log("e: " + e)

// //exemplo bloqueante
// // function demorada(){
// //   //extrair a data atual do sistema e deslocar de 2 segundos
// //   const dataAtualMais2Segundos = new Date().getTime() + 2000
// //   //ficar extraindo a data atual do sistema até que ela tenha passado da original
// //   while (new Date().getTime() <= dataAtualMais2Segundos){

// //   }
// //   const d = 8 + 4
// //   return d
// // }

// // const a = 2 + 3
// // const b = 5 + 9
// // const d = demorada()
// // const e = 2 + a + b


// // const a = 2 + 7
// // const b = 5
// // console.log(a + b)


// // console.log("Eu primeiro...")
// // console.log("Agora eu...")
// // console.log("Sempre vou ser a última :(")


// //uma calculadora realiza

// //soma de dois numeros (arrow function com return)
// //subtração de dois numeros (arrow function sem return)
// //raiz quadrada de um numero (function regular)
// // let calculadora = {
// //   soma: (a, b) => {return a + b},
// //   subtracao: (a, b) => a - b,
// //   raiz: function(a){return Math.sqrt(a)}
// // }
// // console.log(calculadora.soma(2, 3))
// // //mostre como somar sem usar o operador .
// // console.log(calculadora["soma"](2, 3))
// // console.log(calculadora["raiz"](2))
// // console.log(calculadora.subtracao(2, 3))


// //objetos javascript (ou "JSON" Javascript Object Notation)
// //uma concessionária tem cnpj e endereço (rua, numero e bairro). Ela possui 3 carros em estoque. Cada um deles tem marca, modelo e ano de fabricação.
// // let concessionaria = {
// //   cnpj: "xx.xxx.xxx/0001-xx",
// //   endereco: {
// //     logradouro: "Rua J",
// //     numero: 12,
// //     bairro: {
// //       nome: "Vila Mariana",
// //       distrito: "algum"
// //     }
// //   },
// //   estoque: [
// //     {marca: "Fiat", modelo: "Uno", ano: 2014},
// //     {marca: "Ford", modelo: "Focus", ano: 2015},
// //     {marca: "VW", modelo: "Fusca", ano: 2000}
// //   ]
// // }
// // console.log(concessionaria.estoque[0].modelo)
// // console.log(concessionaria["estoque"][2][ano])

// // //estrutura de repetição para mostrar todas as marcas e modelos
// // //for/of
// // for (let veiculo of concessionaria.estoque){
// //   console.log(`Modelo: ${veiculo.modelo}`)
// //   console.log(`Marca: ${veiculo.marca}`)
// // }




// //uma pessoa se chama Maria, tem 21 anos e mora na rua B, numero 121
// // let pessoa2 = {
// //   nome: "Maria",
// //   idade: 21,
// //   endereco: {
// //     logradouro: "Rua B",
// //     numero: 121
// //   }
// // }

// // console.log(pessoa2.endereco["logradouro"])
// // console.log(pessoa2.endereco.logradouro)

// // console.log(pessoa2["endereco"].numero)

// //uma pessoa se chama João e tem 17 anos
// // let pessoa = {
// //   nome: "João",
// //   idade: 17
// // }

// // //operadores de acesso a membro: . ou [""]
// // console.log("O nome da pessoa é " + pessoa.nome)
// // console.log("Ela tem " + pessoa["idade"])


// // //métodos utilitários sobre vetores(listas)
// // function mapear(lista, funcao){
// //   //produza uma lista
// //   //para cada elemento da lista recebida, use a função recebida para encontrar seu mapeamento
// //   const aux = []
// //   for (let i = 0; i < lista.length; i++){
// //     // const resultante = funcao(lista[i])
// //     // aux.push(resultante)
// //     aux.push(funcao(lista[i]))
// //   }
// //   return aux
// // }
// // const numeros = [1, 2, 3, 15]
// // //chamar a mapear, produzindo uma lista de booleanos: true para quem for multiplo de 3, false para quem não for
// // //use uma arrow function sem return e sem parênteses na lista de parâmetros
// // //adaptar para que, ao inves de mostrar booleano, mostre um texto: "Eh multiplo de tres" ou "Não eh multiplo de tres", incluir o valor, usando interpolação
// // //operador ternário: teste ? a : b
// // console.log(mapear(numeros, n => n % 3 === 0 ? `${n} é múltiplo de três` : `${n} não é múltiplo de três`))

// // //essa função mapear, já existe
// // console.log(numeros.map(n => n % 3 === 0 ? `${n} é múltiplo de três` : `${n} não é múltiplo de três`))

// //dada a lista [1, 2, 3], produzir [1, 4, 9]
// // const numeros = [1, 2, 3]
// // const resultado = []
// // for (let i = 0; i < numeros.length; i++){
// //   resultado.push(numeros[i] * numeros[i])
// // }
// // console.log(resultado)

// // const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// //quero apenas os nomes que começam com A
// //declarativo
// // const aux = nomes.filter(nome => nome.startsWith("A"))
// // console.log(aux)
// //imperativo
// // const aux = []
// // for (let i = 0; i < nomes.length; i++){
// //   if (nomes[i].startsWith("A"))
// //     aux.push(nomes[i])
// // }
// // console.log(aux)



// //arrow functions
// // const ehPar = n => n % 2 == 0
// // const eAgoraV2 = n => ehPar(n)
// // console.log(eAgoraV2(2))


// // const eAgora = () => console.log ("?")
// // console.log(eAgora())
// // console.log(ehPar(2))
// // const hello = () => {console.log("Oi")}
// // hello()
// // const hello2 = () => console.log("Oi")
// // hello2()
// // const dobro = (n) => {return n * 2}
// // const dobroV2 = (n) => n * 2
// // const dobroV3 = n => n * 2

// //parâmetros de função com valores padrão
// // let triplo = function(n = 5){
// //   return n * 3
// // }
// // console.log(triplo(10))
// // console.log(triplo())

// //funções anônimas
// //funções em js são cidadãs de primeira-classe
// // const dobro = function(n){
// //   return n * 2
// // }
// // console.log(dobro(2))


// //jeito antigo mas ainda utilizado para definir funções em js
// // function soma(a, b, c){
// //   return a + b + c
// // }
// // console.log(soma(1, 2, 3))
// // function soma(a, b){
// //   console.log(a + b)
// // }
// // const res = soma(2, 3)
// // console.log(res)
// // function hello(){
// //   console.log("Oi")
// // }
// // hello()

// // function hello(nome){
// //   console.log(`Oi, ${nome}`)
// // }

// // hello("João")

// //métodos utilitários sobre vetores

// // {"nome": "Yasmin"}
// // {nome: "Yasmin", data: new Date()}

// //coleções, vetores, listas
// //declaração de lista
// // v1 = []
// // v1[0] = 3.4
// // v1[10] = 2
// // v1[2] = "abc"
// // console.log(v1.length)
// // console.log(v1)
// // for (let i = 0; i < v1.length; i++){
// //   console.log(v1[i])
// // }
// //ArrayList

// //não use ==, use apenas ===
// //console.log([] == [])
// // console.log([] == false)
// // console.log(null == undefined)
// // const teste1 = null
// // const teste2 = undefined
// // console.log(null == null)
// // console.log(1 == [1])
// //console.log(true == 1)
// // console.log(1 == "1")
// // console.log (1 === "1")
// // console.log(1 == 1)
// // console.log(1 === 1)
// // const n1 = 2
// // const n2 = '3'
// // //coerção implícita
// // const n3 = n1 + n2
// // console.log(n3)
// // //coerção explícita
// // const n4 = n1 + Number(n2)
// // console.log(n4)

// // let teste = true
// // console.log(typeof(teste))
// // teste = "abc"
// // console.log(typeof(teste))
// // //interpolação
// // let nome = "Rodrigo"
// // console.log("Meu nome é " + nome) //concatenação
// // console.log(`Meu nome é ${nome}`)  //print(f'Meu nome é {nome}')
// // console.log("Meu nome é ${nome}") //não funciona
// // let a = 2, b = 3
// // console.log(`${a} + ${b} = ${a + b}`)
// // let resultado = `${a} + ${b} = ${a + b}`
// // console.log(typeof(resultado))



// // //razões pelas quais não queremos usar o var
// // var idade = "18"
// // console.log("Oi " + nome)
// // if (idade >= 18){
// //   let nome = "João" //hoist içamento
// //   console.log("Sim, " + nome + ", você pode dirigir.")
// // }
// // console.log("Até mais, " + nome)


// // var idade = 18; //lint (linter)
// // var nome = "Ana"

// // var linguagem = "Javascript" //String linguagem;
// // console.log("Aprendendo " + linguagem)
// // var linguagem = "Java" //String linguagem;
// // console.log("Aprendendo " + linguagem)

// //deno, bun
// //var (sabe que existe, mas nunca vai usar, bem antigo)4
// // //ECMAScript
// // var nome = "José"
// // console.log(nome)
// // nome = "José da Silva"

// //let
// // let a = 2
// // let endereco = "Rua B, 56"
// // let deMaior = true
// // console.log(a, typeof(a), endereco, typeof(endereco), deMaior, typeof(deMaior))
// // endereco = "Rua B, 57"
// // console.log(endereco, typeof(endereco))

// //java int a (sistema de tipos estático);
// // javascript sistema de tipos dinâmico
// // const nome = "José"
// // console.log(nome)
// // console.log(typeof(nome))
// // //não pode nome = "José da Silva"
// // const idade = 18
// // console.log(idade, typeof(idade))
// // const sobrenome = 'Silva'
// // //char c = 'a'; String s = "a";
// // console.log(sobrenome, typeof(sobrenome))