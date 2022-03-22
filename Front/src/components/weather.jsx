import React from 'react'

var meteo = ""

fetch('https://api.meteomatics.com/2022-03-22T00:00:00Z--2022-03-25T00:00:00Z:PT1H/t_2m:C/52.520551,13.461804/html')
.then(function(response) {
    meteo = response
})

console.log(meteo)

const weather = () => {
  return (
    <div>weather</div>
  )
}

export default weather