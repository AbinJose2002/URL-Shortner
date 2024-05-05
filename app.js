
let x
const shortBtn = document.querySelector(".btn-shorten");
shortBtn.addEventListener("click", async() => {
    // for creating the link block when tiny url is been generted

//   const existingDiv = document.querySelector('.link-block');
//   existingDiv.style.opacity = "1";
//   const newDiv = document.createElement('div');
//   newDiv.textContent = "This is a new div element";
//   const classListToAdd = ['link-list', 'col-lg-8', 'col-sm-10', 'mx-auto', 'py-3'];
//   for (const className of classListToAdd) {
//     newDiv.classList.add(className);
//   }
//   existingDiv.appendChild(newDiv);
const linkField = document.querySelector(".link-field")


const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'd88b849a4cmsh04efd9b18ada8aep1d098djsnc2838aa47965',
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
  },
  body: new URLSearchParams({
    url: 'https://www.youtube.com/watch?v=Atq7VjVbaA8'
  })
};

try {
    const response = await fetch(url, options);
    const data = await response.json(); 
    x = data.result_url
} catch (error) {
    console.error(error);
}

  const existingDiv = document.querySelector('.link-block');
  existingDiv.style.opacity = "1";
  existingDiv.innerHTML = "<p>"+x+"</p>"

});

