function fatorial(n){
    if(n < 0)
        return Promise.reject(`Valor não pode ser negativo ${n}`)
    let res = 1
    for (let i = 2; i <= n; i++)
        res *= i
    return Promise.resolve(res)
}
const chamadaComThenECath = () => {
    fatorial(10)
    .then(res => console.log(`Deu certo: 10! = ${res}`)
    .cath(err => console.log(`Falhou: ${err}`)))
    fatorial(-1)
    .then(res => console.log(`Deu certo: -1! = ${res}`)
    .cath(err => console.log(`Falhou: ${err}`)))
}
const chamadaComAsyncAwait = async () => {
    try {
        const res = await fatorial(10)
        console.log(`Deu certo: 10! = ${res}`)
    }
    catch(err){
        console.log(`Falhou: ${err}`)
    }
    try {
        const res2 = await fatorial(-1)
        console.log(`Deu certo: -1! = ${res}`)
    }
    catch(err){
        console.log(`Falhou: ${err}`)
    }
    
    
}

// require('dotenv').config()
// const axios = require('axios')

// // const APPID = process.env.APPID
// // const Q = process.env.Q
// // const UNITS = process.env.UNITS
// // const LANGUAGE = process.env.LANGUAGE
// // const CNT = process.env.CNT
// // const PROTOCOL = process.env.PROTOCOL
// // const URL_BASE = process.env.URL_BASE

// //operador de desestruturação do JS
// const { 
//   APPID,
//   Q,
//   UNITS,
//   LANGUAGE,
//   CNT,
//   PROTOCOL,
//   URL_BASE
// } = process.env

// //https://api.openweathermap.org/data/2.5/forecast?q=Itu&units=metric&appid=chave&lang=pt_br&cnt=10

// const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${LANGUAGE}&cnt=${CNT}`

// const minhaPromise = axios.get(url)

// minhaPromise
// .then((res) => {
//   console.log ("Quem é o res.data...")
//   console.log(res.data)
//   console.log("****************************")
//   return res.data
// })
// .then((res) => {
//   console.log("Quem é o cnt....")
//   console.log(res.cnt)
//   console.log("****************************")
//   return res
// })
// .then((res) => {
//   console.log("Quem é o list...")
//   console.log(res.list)
//   console.log("****************************")
//   return res.list
// })
// .then((res) => {
//   //desafio: exibir a temperatura minima da primeira previsão de tempo
//   //dicas:
//   //acessar a coleção na posição 0
//   //depois acessar a propriedade temp_min
//   console.log("****************************")
//     console.log(`Temp min: ${previsao.main.temp_min}`)
//     console.log(`Temp max: ${previsao.main.temp_max}`)
//     console.log(`Umidade: ${previsao.main.humidity}`)
//     console.log(`Desc: ${previsao.weather[0].description}`)
//   return res
// })


