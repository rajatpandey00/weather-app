const geoCode = require('./geocode')
const weatherDetails = require('./weatherDetails')

 geoCode('Los Angeles', (error, data) => {
   console.log(error)
  if(error === null) {
  const latitude = data.latitude
  const longitude = data.longitude
  console.log('D', data)
  weatherDetails(latitude, longitude, details => {
   console.log('Received Currently>>>', details)
  })
  } else {
    console.log(error)
  }
})