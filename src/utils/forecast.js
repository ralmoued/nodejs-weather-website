const request = require('request')


const forecast = (longitude, latitude, callback) => {
    const access_key = '59c42fd45331d29a91604c818686762c'
    const units = 'm'
    const forcastURL = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + longitude + ',' + latitude + '&units=' + units


    request({ url: forcastURL, json: true }, (error, response) => {
        try {
            const data = response.body

            if (error) {
                callback('Internet is disconnected!', undefined)
            } else if (data.error) {
                callback('Unable to connect to location services!', undefined)
            } else {
                //console.log(data.current.weather_descriptions[0] + '. It is ', data.current.temperature, ' degrees out')
                //console.log('It feels like ', data.current.feelslike, ' degrees out')

                //callback(undefined, {
                //    weather_descriptions: data.current.weather_descriptions[0],
                //    temperature: data.current.temperature,
                //    feelslike: data.current.feelslike
                //})

                callback(undefined,
                    body.current.weather_descriptions[0] + ". It is currently "
                    + body.current.temperature + " degress out. It feels like "
                    + body.current.feelslike + " degress out. The humidity is "
                    + body.current.humidity + "%.")
            }
            }
        } catch {
            console.log('Error !!')
        }
    })
}



module.exports = forecast