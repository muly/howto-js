console.log("background");
alert("background");

async function getData(url = '') {
    const response = await fetch(url);
    return response.json();
}

getData('http://localhost:8080/message')
  .then(data => {
    console.log(data); 
  });

  