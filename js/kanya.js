const quotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQute(data));
}

const displayQute = quote => {
    const quoteElement = document.getElementById('quotes');
    quoteElement.innerText = quote.quote;
}