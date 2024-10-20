const quotes = [
    {
        quote: `"Science is organized knowledge. Wisdom is organized life."`,
        author: `Immanual Kant`
    },
    {
        quote: `"If you judge people, you have no time to love them."`,
        author: `Mother Teresa`
    },
    {
        quote: `"The greatest wealth is to live content with little"`,
        author: `Plato`
    },
    {
        quote: `"The successful warrior is the average man, with laser-like focus"`,
        author: `Bruce Lee`
    },
    {
        quote: `"I have no special talent. I am only passionately curious"`,
        author: `Albert Einstein`
    },
    {
        quote: `"If you want to innovate or invent a system or algorithm , then understand and master in it"`,
        author: `Wiseman`
    }
];

const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quotes');
const author = document.querySelector('.person');

btn.addEventListener('click', function(e) {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
});

