const API_KEY = '';

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
      span.innerText = data.choices[0].text;
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

const pText = websiteScraper();
const proccessed = OpenaiFetchAPI(pText);

const body = document.querySelector('body');
const summaryDiv = document.createElement('div');
summaryDiv.style.position = 'absolute';
summaryDiv.style.top = '300px';
summaryDiv.style.right = '25px';
summaryDiv.style.width = '450px';
summaryDiv.style.right = '35px';
summaryDiv.style.fontFamily = 'Roboto';
summaryDiv.style.fontSize = '1.2em';
summaryDiv.style.border = '2px';
summaryDiv.style.borderColor = '#757575';

summaryDiv.style.boxShadow = '-3px 5px 25px 9px #000000;';
summaryDiv.style.boxShadow = '-3px 5px 25px 9px #000000;';
summaryDiv.style.backgroundColor = `linear-gradient(135deg, #FFFFFF 0%, #43914B 100%, #9EBC80 100%)`;

const header = document.createElement('h1');
header.innerText = 'Quick Summary';
const span = document.createElement('span');
span.innerText = 'We are reading it for you.... ';
summaryDiv.appendChild(header);
summaryDiv.appendChild(span);
body.appendChild(summaryDiv);
