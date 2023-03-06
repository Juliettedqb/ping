//array of URLs i want to load
const urls = ['https://www.openclassrooms.com', 'https://www.slate.fr', 'https://www.youtube.com'];

async function getLoadingTimes(urls) {
    //https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
    const promises = urls.map(url => fetch(url, { mode: 'no-cors'}).then(response => {
    //use of the performance API to measure the loading time of each URL
    const loadTime = performance.now() - response.headers.get('date');
    //returns an array of objects containing the URL and its corresponding loading time
    return { url, loadTime };
  }));
  
  //Promise.all() : creates a promise that resolves when all the URLs have been loaded
  const results = await Promise.all(promises);
  return results;
}

getLoadingTimes(urls).then(console.log);
