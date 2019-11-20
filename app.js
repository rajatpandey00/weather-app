const geoCode = require('./geocode')
const weatherDetails = require('./weatherDetails')


// const address = 'Los Angeles'

const address = process.argv[2]

if (!address) {
  console.log('Please provide an address!!')
} else {
  geoCode(address, (error, { latitude, longitude }) => {
    if (error === null) {
      weatherDetails(latitude, longitude, ({ icon, temperature }) => {
        console.log(`The weather in ${address} will be`, icon + ' with around ' + temperature + ' of temperature')
      })
    } else {
      console.log(error)
    }
  })
}