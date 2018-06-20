import quoteCollection from './quoteDex.js';

function randomNum() {
  let objKeys = Object.keys(quoteCollection);
  let randNum = Math.floor(Math.random() * objKeys.length);
  let randQuote = quoteCollection[randNum].quote;
  let randAuthor = quoteCollection[randNum].author;
  return {
    quote: randQuote,
    author: randAuthor
  };
}

let randGen = randomNum();

export default randGen;
