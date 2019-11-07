const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
    const maxTemperature = 58
    return Math.floor(Math.random() * maxTemperature)
}

const toFarenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32
const temperatureInFarenheit = (temperature) => console.log(`It is currently ${toFarenheit(temperature)}ºF at Mars`)
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`)

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`)

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (allRight, allWrong) => {
    const temperature = getMarsTemperature()
    const chancesToSend = Math.floor(Math.random() * 100)
    
    chancesToSend < 60 ? allWrong("Robot is Busy.") : allRight(temperature)
}

sendMarsTemperature(temperatureInFarenheit, handleError)
sendMarsTemperature(greet, handleError)
