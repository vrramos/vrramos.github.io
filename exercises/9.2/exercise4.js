const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
    const maxTemperature = 58
    return Math.floor(Math.random() * maxTemperature)
}

const toFarenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32
const temperatureInFarenheit = (temperature) => console.log(`It is currently ${toFarenheit(temperature)}ºF at Mars`)
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`)

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
    const temperature = getMarsTemperature()
    return callback(temperature)
}

sendMarsTemperature(temperatureInFarenheit)
sendMarsTemperature(greet)

