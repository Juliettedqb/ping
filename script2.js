let urls = ["https://github.com/adatechschool", "https://www.lovelace.adatechschool.fr/","https://www.lemonde.fr/"];

async function getLoadingTime(url) {
    
    //const startTime = performance.now();
    fetch(url)
      .then(response => {
         console.log(response);
         const endTime = new Date();
         const reactTime = (endTime - response.headers.get("date")) / 1000;
         console.log("le temps de réaction du site " + url + "est de " + reactTime + "ms");
         console.log(response.headers.get("date"));

         return {url, reactTime}
      })

}

getLoadingTime(urls[2]);