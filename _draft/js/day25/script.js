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
    counts: {
      lang: [],
      count: []
    }
  }

  data.forEach(country => {
    lang_data.countries.push(country.languages[0].name)
  })




  lang_data.countries.forEach(country => {
    let count = 0
    let self_country = country
      count = lang_data.countries.filter(n => n === self_country).length
      lang_data.counts.lang.push(self_country)
      lang_data.counts.count.push(count)
  })

  console.log(lang_data.counts.lang, lang_data.counts.count)

  let zipped = lang_data.counts.lang.map(function(e,i) {
    return [e, lang_data.counts.count[i]]
  })

  function uniq(array) {
    return Array.from(new Set(array))
  }

  console.log(zipped)
  console.log(uniq(zipped))

  console.log([...new Set(zipped)])







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
      labels: lang_data.counts.lang,
      datasets: [{
        label: 'label1',
        data: lang_data.counts.count,
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

