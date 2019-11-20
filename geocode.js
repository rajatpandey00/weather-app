const request = require('request')

const getWeatherDetails = (address, callback) => {
    const encodedURIAddress = encodeURIComponent(address)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedURIAddress}.json?access_token=pk.eyJ1IjoicmFqYXRwYW5kZXkwMCIsImEiOiI4OWQzNmFjYzUyMDRlNTY1ZTIzMzYyOTFlZWIzNDc5MiJ9.wazERnOVDysZOR77Tey2cw`
    request({ url , json : true }, (error, response) => {
      if (error === null) {
         if(response.body.features.length === 0) {
           callback('Unable To find Location', undefined)
         } else {
           const latitude = response.body.features[0].center[0]
           const longitude = response.body.features[0].center[1]
           const data = {
             latitude, longitude
           }
           callback(data)
         }
      }
    })
  }
  module.exports = getWeatherDetails