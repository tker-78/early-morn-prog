url = "https://restcountries.com/v2/all"

var countries = []

fetch(url)
.then(response => response.json())
.then(data => {

  //人口グラフ用データの作成
  let pop_nums = []
  let country_name = []

  let sorted_pop = data.sort((a, b) =>  b.population - a.population)

  for(let i =0; i < 10; i++) {
    pop_nums.push(sorted_pop[i].population)
  }

  for(let i = 0; i < 10; i++) {
    country_name.push(sorted_pop[i].name)
  }

  // 言語グラフ用データの作成

  let lang_data = {
    countries: [],
    lang: []
  }

  console.log(data)
  data.forEach(country => {
    lang_data.countries.push(country.languages[0].name)
  })

  console.log(lang_data.countries)


  let count = lang_data.countries.filter(n => n === 'English').length;
  console.log(count)





  // グラフの定義
  const population_chart = {
    type: 'bar',
    data: {
      labels: country_name,
      datasets: [{
        label: 'label1',
        data: pop_nums,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            suggestedMax: 10,
            suggestedMin: 0
          }
        }]
      }
    }
  }

  const language_chart = {
    type: 'bar',
    data: {
      labels: ['d', 'e', 'f'],
      datasets: [{
        label: 'label1',
        data: [5,8,9],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            suggestedMax: 10,
            suggestedMin: 0
          }
        }]
      }
    }
  }

      const ctx = document.querySelector("#myChart")

    document.querySelector("#population").addEventListener('click', function(){
      const myChart = new Chart(ctx, population_chart)

    })

    document.querySelector("#language").addEventListener('click', function(){
      const myChart = new Chart(ctx, language_chart)
    })


})

