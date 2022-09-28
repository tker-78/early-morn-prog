document.addEventListener('DOMContentLoaded', function (){
  document.querySelector("#calculate").addEventListener('click', function() {
    let selectedPlanet = document.querySelector("#planet")
    console.log(selectedPlanet.value)
  })

})