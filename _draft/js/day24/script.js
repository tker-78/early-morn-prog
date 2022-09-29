document.addEventListener('DOMContentLoaded', function (){
  document.querySelector("#calculate").addEventListener('click', function() {
    let selectedPlanet = document.querySelector("#planet")

    const planetImage = document.querySelector("img")
    switch (selectedPlanet.value) {
      case 'mercury' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'venus' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'earth' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'moon' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'mars' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'jupiter' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'saturn' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'uranus' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'neptune' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
      case 'pluto' :
        planetImage.src = `${location}images/${selectedPlanet.value}.png`
    }


  })
})