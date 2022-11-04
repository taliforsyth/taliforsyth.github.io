const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);
const upperCaseButton = document.querySelector('.upperCase');
upperCaseButton.addEventListener('click', upperCase);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

async function getQuote() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayQuote(data[Math.floor(Math.random() * 1600)].text);
    });
 }

function displayQuote(x) {
    document.getElementById('js-quote-text').textContent =x;
}

function upperCase() {
    let text = document.getElementById('js-quote-text').innerHTML;
    document.getElementById('js-quote-text').innerHTML =
    text.toUpperCase();
  }

getQuote();
