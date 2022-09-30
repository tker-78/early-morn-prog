document.addEventListener('DOMContentLoaded', function (){
  document.querySelector("#calculate").addEventListener('click', function() {
    let selectedPlanet = document.querySelector("#planet")
    let mass = document.querySelector("#mass")

    console.log(mass.value)

    const planetImage = document.querySelector("img")

  
    const image_location = location.href.replace('index.html', '') + 'images'


    console.log(image_location)

    switch (selectedPlanet.value) {
      case 'mercury' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'venus' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'earth' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'moon' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'mars' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'jupiter' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'saturn' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'uranus' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'neptune' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
      case 'pluto' :
        planetImage.src = `${image_location}/${selectedPlanet.value}.png`
    }

    const desc = document.querySelector(".description strong")
    desc.textContent = selectedPlanet.value
   
    const weightOnPlanet = (planet, mass) => {
      const gravities = {
        'mercury': 1,
        'venus': 2,
        'earth': 1,
        'moon': 0.3,
        'mars': 0.5,
        'jupiter': 4,
        'saturn': 6,
        'uranus': 3,
        'neptune': 0.8,
        'pluto': 15
      }
      return  gravities[planet] * mass
    }

    const weight = document.querySelector(".weight")
    weight.textContent = weightOnPlanet(selectedPlanet.value, mass.value)
    weight.style.color = 'white';


  })
})

