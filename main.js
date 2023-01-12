const API_KEY = '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';

function OpenaiFetchAPI(toSummarize) {
  console.log('Calling GPT3');
  var url = 'https://api.openai.com/v1/completions';
  var bearer = 'Bearer ' + API_KEY;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `give me a super short summary of the following text, highlighting the main points:\n\n ${toSummarize}`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // chrome.runtime.sendMessage({ data: data }, function (response) {
      //   console.log(response);
      // });
    })
    .catch((error) => {
      console.log('Something bad happened ' + error);
    });
}

// OpenaiFetchAPI();

//*****************************************/
// **********Event Listener****************/

function websiteScraper() {
  const p = document.querySelectorAll('p');
  const stringArr = [];
  p.forEach((el) => {
    stringArr.push(el.innerText);
  });
  return stringArr.join(' ');
}

// const pText = websiteScraper();
// OpenaiFetchAPI(pText);

// chrome.runtime.sendMessage({scrapedText: pText});

// const test = document.getElementById('scrapped');
// console.log(test.

const testObj = {
  id: 'cmpl-6XjFTTiR79FJLRQJpjEuCo4sqzHal',
  object: 'text_completion',
  created: 1673496779,
  model: 'text-davinci-003',
  choices: [
    {
      text: '\nOlivia Hussey and Leonard Whiting, who were 15 and 16 when they starred in 1968 movie "Romeo and Juliet," have filed a lawsuit against Paramount alleging sexual exploitation and distributing nude images of adolescent children without their consent. They are seeking $500 million in damages, and the suit is being enabled by the California Child Victims Act. An actor and HBO\'s in-house intimacy coordinator have spoken out about the need for clear communication and respect for performers\' well-being on set. The incident highlights the vulnerability of minors in the film industry and the need for more protections for young actors.',
      index: 0,
      logprobs: null,
      finish_reason: 'stop',
    },
  ],
  usage: {
    prompt_tokens: 1465,
    completion_tokens: 122,
    total_tokens: 1587,
  },
};

// chrome.runtime.sendMessage({ greeting: 'hello' }, function (response) {
//   console.log(response.farewell);
// });

// chrome.runtime.sendMessage({ data: 'hello world' }, function (response) {
//   console.log(response);
// });

chrome.runtime.sendMessage({ greeting: 'hello' }, function (response) {
  console.log(response.farewell);
});
