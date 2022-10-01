// const url = 'https://restcountries.com/v2/all'

// fetch(url)
// .then(response => response.json())
// .then(data => {
//   pop_sorted = data.sort((a,b) => b.population - a.population )
// })

  const ctx = document.getElementById("myChart")

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['a', 'b', 'c'],
      datasets: [
        {
          axes: 'y', 
          label: 'label',
          data: [2,2,3,],
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


// const ctx = document.getElementById("myChart");
//   const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
//       datasets: [
//         {
//           label: '最高気温(度）',
//           data: [35, 34, 37, 35, 34, 35, 34, 25],
//           borderColor: "rgba(255,0,0,1)",
//           backgroundColor: "rgba(0,0,0,0)"
//         },
//         {
//           label: '最低気温(度）',
//           data: [25, 27, 27, 25, 26, 27, 25, 21],
//           borderColor: "rgba(0,0,255,1)",
//           backgroundColor: "rgba(0,0,0,0)"
//         }
//       ],
//     },
//     options: {
//       title: {
//         display: true,
//         text: '気温（8月1日~8月7日）'
//       },
//       scales: {
//         yAxes: [{
//           ticks: {
//             suggestedMax: 40,
//             suggestedMin: 0,
//             stepSize: 10,
//             callback: function(value, index, values){
//               return  value +  '度'
//             }
//           }
//         }]
//       },
//     }
//   });
