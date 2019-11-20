const request = require('request')
const getWeatherDetails = require('./geocode')

const url = 'https://api.darksky.net/forecast/1334332e103e81828a9327f40077d9b9' //To get weather details

//  request({ url }, ( error, response, body ) => {
//   console.log('Response Body', body)
// })

const coordinatesURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFqYXRwYW5kZXkwMCIsImEiOiI4OWQzNmFjYzUyMDRlNTY1ZTIzMzYyOTFlZWIzNDc5MiJ9.wazERnOVDysZOR77Tey2cw' // To get Latitude and Longitude
// request({ url: coordinatesURL, json: true }, ( error, response, body ) => {
//   if (error === null) {
//    const latitude = body.features[0].center[0]
//    const longitude = body.features[0].center[1]
//    const url = `https://api.darksky.net/forecast/1334332e103e81828a9327f40077d9b9/${longitude},${latitude}`
//    request({ url, json: true }, ( error, response, body ) => {
//      console.log('Response Body', body.currently)
//    })
//   } else {
//    console.log('Something went Wrong!!')
//   }
// })
getWeatherDetails('Los Angeles', (error, data) => {
  if(error === null) {
  console.log(data)
  } else {
    console.log(error)
  }
})