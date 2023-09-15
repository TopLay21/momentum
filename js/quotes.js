const quotes = [
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller",
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
    },
    {
        quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford",
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs",
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    }
]

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteText.innerText = todaysQuote.quote;
quoteAuthor.innerText = `- ${todaysQuote.author} - `;
