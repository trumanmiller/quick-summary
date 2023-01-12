// function websiteScraper() {
//   const p = document.querySelectorAll('p');
//   const stringArr = [];
//   p.forEach((el) => {
//     stringArr.push(el.innerText);
//   });
//   return stringArr.join(' ');
// }

// chrome.runtime.onMessage.addListener((message) => {

//     // console.log(message.scrapedText);
//     // do something with the scraped text, like updating the content of your popup
// const scrapped = document.getElementById('scrapper');
//     // scrapped.innerText = message.scrapedText;

// });
// const data = localStorage.getItem('data');
// scrapped.innerText = data;

// console.log(data);

let saver;

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   saver = request.data;
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request.data);
// });
const body = document.querySelector('body');
const test = document.createElement('div');
body.appendChild(test);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.greeting);
  test.innerText = request.greeting;
  if (request.greeting == 'hello') sendResponse({ farewell: 'goodbye' });
});
