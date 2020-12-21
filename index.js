const q = new Quote()

const quoteDiv = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', newQuote)
document.addEventListener('DOMContentLoaded', newQuote)


function newQuote() {
    q.getQuote().then(newQt => {
        console.log(newQt.quote);
        quoteDiv.innerText = `"${newQt.quote}"`

    });
}
