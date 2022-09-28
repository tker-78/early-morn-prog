document.addEventListener('DOMContentLoaded', function (){
  document.querySelector("#calculate").addEventListener('click', function() {
    let selectedPlanet = document.querySelector("#planet")
    console.log(selectedPlanet.value)

    const planetImage = document.querySelector("img")
    console.log(planetImage.src)
    switch (selectedPlanet) {
      case 'mercury' :
       console.log(planetImage.src) 
    }


  })
})