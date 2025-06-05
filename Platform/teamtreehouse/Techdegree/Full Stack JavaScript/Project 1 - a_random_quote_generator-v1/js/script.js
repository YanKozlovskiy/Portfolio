  /******************************************
  Treehouse FSJS Techdegree:
  project 1 - A Random Quote Generator
  ******************************************/
 
 // For assistance: 
 // Check the "Project Resources" section of the project instructions
 // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
 
 /*** 
  * `quotes` array 
 ***/


 // dom selectors
// const selectors = {
//   tags: document.createElement('span'),
//   quote: document.querySelector('.quote'),
//   citation: document.querySelector('.citation'),
//   year: document.querySelector('.year'),
//   source: document.querySelector('.source')
// }

const body = document.querySelector('body');
const source = document.querySelector('.source');
const quoteBox = document.getElementById('quote-box');


  

// quoteBox.appendChild(selectors[tags]);
let seconds = 10000;
let interval = setInterval(printQuote, seconds);
// listeners
const button = document.getElementById('load-quote').addEventListener("click", printQuote, false);


  /***
   * `getRandomQuote` function
  ***/

  function getRandomQuote(quotes) {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
  }

  

  /***
   * `printQuote` function
  ***/


// The function printQuote resets the time it takes to automatically refresh the quote, gets a random quote, and conditionally adds the quote to the page
// first it removes any old content by setting the container to an empty value and then appends new values from the new random quote object 
function printQuote() {
  clearInterval(interval);
  interval = setInterval(printQuote, seconds);
  const randomQuote = getRandomQuote(quotes); // call to getRandomQuote to get a random quote and pass the meets expectations grade
  quoteBox.textContent = '';

  const elements = [
    {tag: 'p', className: 'quote', content: randomQuote.quote},
    {tag: 'p', className: 'source', content: randomQuote.source, children: []},

  ];
   
  // part to add the citation and year for the meets expectations grade
  // the code here conditionally adds values if they're present 
  if (randomQuote.citation) {
    elements[1].children.push({tag: 'span', className: 'citation', content: randomQuote.citation});
  }
  if (randomQuote.year) {
    elements[1].children.push({tag: 'span', className: 'year', content: randomQuote.year});
  }

  if (randomQuote.tags && randomQuote.tags.length > 0) {
    elements.push({tag: 'p', className: 'tags', content: `tags: ${randomQuote.tags}`});
  }


  // the code here iterates through each element and creates a parent and a child element that add items and then append them as one big item in 
  // the end to the dom
  for (const element of elements) {
    const parent = document.createElement(element.tag);
    parent.className = element.className;
    if (element.content) {
      parent.textContent = element.content;
    }

    if (element.children) {
      for (const child of element.children) {
        const span = document.createElement(child.tag);
        span.className = child.className;
        if (child.content) {
          span.textContent = child.content;
        }
        parent.appendChild(span);
      }
    }
    quoteBox.appendChild(parent);
  }
  setBackgroundColor(); // this function generates 3 random rgb values and modifies the dom's stylesheet to set change the background color
}

// here we grab 3 random values from 0 to 255 and assign them whatever getRandomValue
function setBackgroundColor() {
  const red = getRandomValue(0, 256);
  const green = getRandomValue(0, 256);
  const blue = getRandomValue(0, 256);
  console.log(red, green, blue)
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


// this function takes in two numbers and returns the minimum and maximum value between two numbers
// i made this function for rgb, but it could be used for anything else
// there are edge cases like using a different color space
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
 
 /** 
  *  
  * 
  * 
  * BELOw: 
  * Array of objects: is named quotes.
contains at least 5 quote objects.
is free of errors that prevent the code from running.
  * 
  * **/ 

// Meets expectations if all of the following are true: Array of objects that has quote source citation and year properties.
    // Exceeds expectations  are true:

        // All objects have quote and source properties.
        // At least one object has citation property.
        // At least one object has year property.
        // Exceeds expectations if meets expectations plus all of the following are true:

        // At least one object has at least one additional property, such as tags.
        // At least one additional property prints to the page with the its quote.

// i was gonna use an api but because of CORS i had to scrap the idea... i could have implemented it to work on my computer, but having
// someone else go through the hassle of installing docker containers just to get a school project up and running doesn't seem like
// a good use of everyone's time especially since it's outside the scope for these lessons

const quotes = [ 
        {
    tags: ['philosophy', 'dutch golden age'],
    quote: "I think, therefore I am.",
    source: "René Descartes", 
    citation: "Discourse on Method", 
    year: "1637"
  },
  {
    tags: ['theater', 'elizabethan era'],
    quote: "To be, or not to be, that is the question.",
    source: "William Shakespeare",
    citation: "Hamlet",
    year: "1603"
  },
  {
    tags: ['philosophy', 'american presidents'],
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "First Inaugural Address",
    year: "1933"
  },
  {
    tags: ['philosophy', 'civil rights'],
    quote: "I have a dream...",
    source: "Martin Luther King Jr.",
    citation: "I Have a Dream speech",
    year: "1963"
  },
  {
    tags: ['philosophy', 'ancient'],
    quote: "The squeaky wheel gets the grease.",
    source: "Proverb",
    citation: "Common usage",
    year: "1700"
  },
  {
    tags: ['technology', 'engineering'],
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016"
  }
];
