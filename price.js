//const express = require('express')
//const http = require('http')
const ethers = require('ethers');
const contractjson = require('./Oracle.json')
//const CoinGecko = require('coingecko-api');
//const CoinMarketCap = require('coinmarketcap-api')
//const apiKey = '5433ab2e-8dd3-4405-97ef-dad490f3c591'
//const axios = require('axios');
global.fetch = require('node-fetch')
//const cc = require('cryptocompare')
//cc.setApiKey('')
//const Coinmarketcap = require('node-coinmarketcap-api')
//const coinmarketcap = new Coinmarketcap()

const { duration } = require('@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time');

let abi = contractjson.abi;

//let CoinGeckoClient = new CoinGecko();

//const PORT = 9000
//const app = express()
//const server = http.createServer(app).listen(PORT, () => console.log('listening'))

let contractaddress = "0x031f7119a910186B77f4237915e7F694ADF60B51";

let NODE_URL = "https://ethw-mainnet.nodereal.io/v1/c54b2a76ab9f49eea468ac8d217754d8";

let provider = new ethers.providers.JsonRpcProvider(NODE_URL);

let contract = new ethers.Contract(contractaddress, abi, provider);

let signer = new ethers.Wallet("Enterprivatekey", provider);

let contractwithsigner = contract.connect(signer);

//coinmarketcap-main


/*let response = null;
new Promise(async (resolve, reject) => {
  try {
    //response = await axios.get('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?symbol=ETHW&amount=1&convert=USD', {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETHW&convert=USD', {
    headers: {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': '5433ab2e-8dd3-4405-97ef-dad490f3c591',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    //const json = response.data.quote;
    const json = response.toString();
    //const json = JSON.stringify(response);
    //json.data.quote[USD].price;
    console.log(json[2]);
    resolve(json);
  }
});*/
/*let A2 = 'BTC';
const we = IFERROR(INDEX(IMPORTXML(CONCATENATE("https://coinmarketcap.com/currencies/",CELL("contents",A2),"?update="),"//div[contains(@class, 'priceTitle')]"), 1, 1), INDEX(IMPORTXML(CONCATENATE("https://www.coingecko.com/en/coins/",CELL("contents",A2),"?update="),"//span[@data-coin-symbol]//text()"), 1, 1));
console.log(we)*/

//////////////////////////



/*try{
    contract.on("OracleRequest", (specId, requester, requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, dataVersion, data) => {
        console.log(specId);
    });
}catch(err){
    console.log(err);
}*/

/*async function listen() {
    provider.on("block", (blocknumber) => {
        console.log(blocknumber);
    })
}*/

//listen();

/*async function respond() {
    contract.on("OracleRequest", (specId, requester, requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, dataVersion, data) => {
        console.log(specId);
    });
}

respond();

async function fullrespond() {
    contract.on("OracleRequest", (specId, requester, requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, dataVersion, data) => {
        console.log(specId, requester, requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, dataVersion, data);
        getprice(specId, requester, requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, dataVersion, data);
    });
}

fullrespond();*/

//const CoinGeckoClient = new CoinGecko();
//async function getprice(specId, requester, requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, dataVersion, data){
//const response = await CoinGeckoClient.coins.fetch('ethereum', {});
//console.log("dhkfhk", response);
//let currentPrice = parseFloat(response.data.market_data.current_price.usd);
//currentPrice = parseInt(currentPrice);
//console.log(`new price for ETH/USD ${currentPrice} updated on-chain`);
//const oracleResponse = ethers.utils.hexZeroPad(ethers.utils.hexlify($currentPrice), 32);
//data2 = oracleResponse;

//tx = await contractwithsigner.fulfillOracleRequest(requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, data2);
//await tx.wait();
//}

//getprice(specId, requester, requestId, payment, callbackAddr, callbackFunctionId, cancelExpiration, dataVersion, data);
/*var sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
var poll = (promiseFn, duration) => promiseFn().then(
  sleep(duration).then(() => poll(promiseFn, duration)))
  poll = (() => new Promise(() => console.log(happy))), 3000)*/

/*const CoinGeckoClient = new CoinGecko();
async function price(){
const response = await CoinGeckoClient.coins.fetch('ethereum-pow-iou', {});
console.log("dhkfhk", response);
let currentPrice = parseFloat(response.data.market_data.current_price.usd);
currentPrice = parseInt(currentPrice * 1000000);
console.log(`new price for ETH/USD ${currentPrice} updated on-chain`);
tx = await contractwithsigner.updateData("0xfe189873dc68fa446c034dcb44e22b6da34aaadc48bccb2551badb856acc3c83", currentPrice, {gasLimit: 3000000});
tx.wait();
console.log(tx)
}

//price();

var sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
var poll = (promiseFn, duration) => promiseFn().then(
             sleep(duration).then(() => poll(promiseFn, duration)))

// Greet the World every second
poll(() => new Promise(() => price()), 200000)*/


//for Coinmarketcap
/*const client = new CoinMarketCap(apiKey)
async function price(){
//client.getTickers().then(console.log).catch(console.error)
const price1 = await client.getQuotes({symbol: 'ETHW', convert: 'USD'}).then(console.log).catch(console.error);
const json1= JSON.stringify(price1);
console.log(json1)
const json = json1.data.ETHW.quote.price;
console.log(json)
}
price();*/

//For new coinmarketcap

/*async function me() {
    let price = await coinmarketcap.ticker('bitcoin', 'USD');
    console.log(price);
}
me();*/

//for cryptocompare
/*cc.price('ETHW','USD').then(prices => {
    console.log(prices.ethw)
    //let price = JSON.parse(prices)
    //console.log(price)
    //console.log(price[0])
    let me = prices.toString();
    console.log(me)
}).catch(console.error)*/


//For coingecko
//const response = CoinGeckoClient.coins.fetch('bitcoin', {});
//console.log("dhkfhk", response);
//let currentPrice = parseFloat(response.data.market_data.current_price.usd);
//currentPrice = parseInt(currentPrice * 100);
//console.log(`new price for BTC/USD ${currentPrice} updated on-chain`);


//This for crytocompare
async function me(){
  
 fetch('https://min-api.cryptocompare.com/data/price?fsym=ETHW&tsyms=USD&api_key=cb18780f8e758fabf8d1ac7c8c6c8150e79a6c837df6fa9cf8ec7aaee77096a3')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => contractwithsigner.updateData("0xfe189873dc68fa446c034dcb44e22b6da34aaadc48bccb2551badb856acc3c83", Math.floor(data.USD * 1000000), {gasLimit: 3000000}))
}
//me()

var sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
var poll = (promiseFn, duration) => promiseFn().then(
             sleep(duration).then(() => poll(promiseFn, duration)))

// Greet the World every second
poll(() => new Promise(() => me()), 60000)

//async function tale(){
  //let price = me();
  //console.log(price.USD)
  //tx = await contractwithsigner.updateData("0xfe189873dc68fa446c034dcb44e22b6da34aaadc48bccb2551badb856acc3c83", price, {gasLimit: 3000000});
//tx.wait();
//console.log(tx)
//}
//tale()

/*async function me1(){
  /*response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETHW&tsyms=USD');
  console.log(response)
  let price = JSON.parse(response);
  console.log(price)*/
  /*fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETHW&convert=USD', {
    headers: {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': '5433ab2e-8dd3-4405-97ef-dad490f3c591',
      },
    })
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data.data.ETHW.quote.USD.price));
}
me1()*/
