const url = 'https://restcountries.com/v2/all'

fetch(url)
.then(response => response.json())
.then(data => {
  
  let pop_sorted = data.sort((a,b) => b.population - a.population )
  console.log(pop_sorted)

  let population_array = []
  for(let i = 0; i < 10; i++) {
    population_array.push(pop_sorted[i])
  }

  population_array.forEach(country => console.log(country.name))

  let pop_labels = []

  population_array.forEach(country => pop_labels.push(country.name))

  let pop_nums = []

  population_array.forEach(country => pop_nums.push(country.population))

  console.log(pop_labels)
  console.log(pop_nums)



  const ctx = document.getElementById("myChart")

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: pop_labels,
      datasets: [
        {
          axes: 'y', 
          label: 'label',
          data: pop_nums,
          borderColor: [
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
          ], 
          backgroundColor: [
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
          ],
        },
        {
          label: 'label2', 
          data: [2,3,6]
        }
      ]
    },
    options: {
      indexAxis: 'y',
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            // beginAtZero: true
            suggestedMin: 0,
            suggestedMax: 10,
          }
        }]
      }
    }
  })



  
})
