console.log("background");
alert("background");

// https://youtubeapi-336109.ue.r.appspot.com/check/Cdup8kgw6qU

async function getData(url = '') {
    const response = await fetch(url);

    return response.json();
}

getData('http://localhost:8080/message')
  .then(data => {
    console.log(data); 
  });

  