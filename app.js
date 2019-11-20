const geoCode = require('./geocode')
const weatherDetails = require('./weatherDetails')

const address = 'Los Angeles'
 geoCode('Los Angeles', (error, data) => {
  if(error === null) {
   const latitude = data.latitude
   const longitude = data.longitude
    weatherDetails(latitude, longitude, details => {
      console.log(`The weather in ${address} will be`, details.icon + ' with around '+ details.temperature + ' of temperature')
    })
  } else {
    console.log(error)
  }
})