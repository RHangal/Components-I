import './article.less'
import data from './articleData'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules


/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
**/
function articleMaker({title, date, firstParagraph, secondParagraph, thirdParagraph}) {
  const div = document.createElement('div');
  div.classList.add('article')

  const h2 = document.createElement('h2');
  h2.textContent = title 

  const p = document.createElement('p')
  p.textContent = date

  const p1 = document.createElement('p')
  p1.textContent = firstParagraph

  const p2 = document.createElement('p')
  p2.textContent = secondParagraph

  const p3 = document.createElement('p')
  p3.textContent = thirdParagraph

  p.classList.add('date')

  const span = document.createElement('span')
  span.classList.add('expandButton')
  span.textContent = '+'
  span.addEventListener('click', () => {
    div.classList.toggle('article-open')
  })
 div.appendChild(h2)
 div.appendChild(p)
 div.appendChild(p1)
 div.appendChild(p2)
 div.appendChild(p3)
 div.appendChild(span)
 console.log(div)
 return div
}


data.forEach(obj => {
 const articleElement = articleMaker(obj);
 let articles = document.querySelector('.articles')
 articles.appendChild(articleElement)
})

/**
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
