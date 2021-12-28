console.log("background");
alert("background");

async function getData(url = '') {
    const response = await fetch(url);
    return response.json();
}

getData('https://youtubeapi-336109.ue.r.appspot.com/check/Cdup8kgw6qU')
  .then(data => {
    console.log(data); 
  });

  