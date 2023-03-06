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

// async function getLoadingTimes(urls) {
//   const promises = urls.map((url) => {
//     const startTime = performance.now();
//     return fetch(url, { mode: "no-cors" }).then((response) => {
//       const loadTime = performance.now() - startTime;
//       //returns an array of objects containing the URL and its corresponding loading time
//       return { url, loadTime };
//     });
//   });

async function getLoadingTimes(urls){

  const promises = urls.map(async(url) => {
    const startTime = performance.now();
    await fetch(url, {mode: "no-cors"});
    const loadTime = performance.now() - startTime;
    return { url, loadTime }
  })

  //console.table(promises)

  //Promise.all() : creates a promise that resolves when all the URLs have been loaded
  const results = await Promise.all(promises);

  console.table(results)

  const arrLoadTime = [];
  results.forEach((e) => arrLoadTime.push(`${e.loadTime} ms : ${e.url}`));
  const loadTimeSorted = arrLoadTime.sort((a,b) => );
  console.log(loadTimeSorted);
  loadTimeSorted.forEach(
    (e) => (document.getElementById("list").innerHTML += `${e} <br>`)
  );

}
getLoadingTimes(urls)