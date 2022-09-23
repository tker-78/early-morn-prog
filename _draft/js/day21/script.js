    const year = document.querySelector('strong')
    const changeColor = (object) => {
      let i = 0;
      setInterval(() => {
        object.style.fontSize = '40px';

        const colors = ['red', 'green', 'blue', 'skyblue', 'purple']
        object.style.color = colors[i]
        i++;
        if (i > colors.length - 1) {
          i = 0;
        }
      }, 1000)
    }

    changeColor(year);

    // h1
    const h1 = document.querySelector('h1')
    h1.style.fontSize = '15px';
    h1.style.fontFamily = "courier"
    h1.style.textAlign = 'center';

    //h2
    const h2 = document.querySelector('h2')
    h2.style.fontSize = '10px';
    h2.style.fontFamily = 'courier';
    h2.style.textAlign = 'center';
    h2.style.margin = '20px auto';
    h2.style.textDecoration = 'underline';


    // date
    let today_date = new Date();

    const date = document.querySelector('p')
    date.textContent = today_date;
    date.style.fontFamily = 'courier';
    date.style.width = '40%';
    date.style.textAlign = 'center';
    date.style.margin = 'auto';
    date.style.fontSize = '12px';
    date.style.borderRadius = '3px';


    const changeColor2 = (object) => {
      let alphanum = "89abcdef"
      let colorArray = [];
      for(let i =0; i<6; i++){
        let index = Math.floor(Math.random() * 7)
        colorArray.push(alphanum[index])
      }
      object.style.background = '#' + colorArray.join('')
    }

    setInterval(changeColor2, 1000, date);


    // li content
    const liArray = document.querySelectorAll('li')
    console.log(liArray)
    
    liArray.forEach(text => {
      text.style.listStyle = 'none';
      text.style.width = '60%';
      text.style.margin = '3px auto';
      text.style.fontFamily = 'courier';
      text.style.padding = '20px 5px';
    })

    liArray.forEach( (text) => {
      if(text.textContent.includes('Done')) {
        text.style.background = 'lightgreen'
      }else if(text.textContent.includes('Ongoing')) {
        text.style.background = 'pink'
      }else{
        text.style.background = 'skyblue'
      }
    })
