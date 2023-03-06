//array of URLs i want to load
const urls = [
  "https://www.openclassrooms.com",
  "https://www.slate.fr",
  "https://www.youtube.com",
  "https://www.lemonde.fr",
  "https://www.madmoizelle.com",
  "https://www.mediapart.fr",
  "https://www.lovelace.adatechschool.fr",
  "https://www.github.com",
  "https://www.joshwcomeau.com",
  "https://www.dev.to",
  "https://www.pointmedian.cool",
  "https://www.adrien.cool",
  "https://www.allocine.fr",
];

async function getLoadingTimes(urls) {
  //https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
  const promises = urls.map((url) =>
    fetch(url, { mode: "no-cors" }).then((response) => {
      //use of the performance API to measure the loading time of each URL
      const loadTime = performance.now() - response.headers.get("date");
      //returns an array of objects containing the URL and its corresponding loading time
      return { url, loadTime };
    })
  );

  //Promise.all() : creates a promise that resolves when all the URLs have been loaded
  const results = await Promise.all(promises);

  const arrLoadTime = [];
  results.forEach(e => arrLoadTime.push(`${e.loadTime} : ${e.url}`))
  const loadTimeSorted = arrLoadTime.sort()
  console.log(loadTimeSorted)
  loadTimeSorted.forEach(e => document.getElementById("list").innerHTML += `${e} <br>`)
  
  return results;
}

getLoadingTimes(urls).then(console.log);