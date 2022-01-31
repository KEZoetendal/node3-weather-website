const request = require('request')

const forecast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=d2fb2bd2235eb2b56bf9d2a413f65c03&query=' + latitude + ',' + longitude + '&units=m'

   request({ url: url, json: true }, (error, {body}) => {
      if (error) {
         callback('Unable to connect to weather service!', undefined)
      } else if (body.error) {
         callback('Unable to find location!')
      } else {
         callback(undefined, 
            body.current.weather_descriptions[0] + '. It is currently ' + 
            body.current.temperature + ' degrees out. It feels like ' + 
            body.current.feelslike + ' degrees out.')
      }
   }) 
}

module.exports = forecast