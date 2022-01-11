const axios = require('axios')
//const { get } = require('http')

const get_price = async (ids, vs_currencies) => {
  const base_URL = 'https://api.coingecko.com/api/v3/'
  //var ping = await axios.get('https://api.coingecko.com/api/v3/ping')

  var prices = await axios.get(
    base_URL +
      'simple/price?' +
      'ids=' +
      ids +
      '&' +
      'vs_currencies=' +
      vs_currencies
  )
  //console.log(ping.data.gecko_says)
  console.log(prices.data)
}

async function getList() {
  const price = await return_list()
  async function return_list() {
    try {
      const base_URL = 'https://api.coingecko.com/api/v3/'
      var rate = await axios.get(base_URL + '/exchange_rates')
      var list = rate.data.rates
      //console.log(list)
      return list
    } catch (e) {
      console.log('there is error fetching')
    }
  }
  //get_priceconsole.log(price)
  return price
}
var price
;(async () => {
  price = await getList()
  console.log(price)
})()

export { price }
// module.exports = { price }
//get_price('ethereum', 'VND')
//get_coin_list()
