function clearAll() {
    const memeContainer = document.querySelector('.meme-content');
    const jokeContainer = document.querySelector('.joke-content');
    const quoteContainer = document.querySelector('.quote-content');
    const riddleContainer = document.querySelector('.riddle-content');
  const numberContainer = document.querySelector('.random-content');
  const alphabetContainer = document.querySelector('.randomAlphabet-content');
 
    alphabetContainer.innerHTML = '';
    numberContainer.innerHTML = '';
    memeContainer.innerHTML = '';
    jokeContainer.innerHTML = '';
    quoteContainer.innerHTML = '';
    riddleContainer.innerHTML = '';
  }

function showNumber() {
      const randomNumber = Math.floor(Math.random() * 100);
  const container = document.querySelector('.random-content');
  const newNum = document.createElement('p');
  newNum.textContent = randomNumber;
   clearAll();
  container.appendChild(newNum);
}

function showAlphabet() {
      const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
  const container = document.querySelector('.randomAlphabet-content');
  const newAlphaElm = document.createElement('p');
  newAlphaElm.textContent = randomAlphabet;
   clearAll();
  container.appendChild(newAlphaElm);
}

  
  function showMeme() {
      const getRandomMeme = getRandomData('memes');
      const container = document.querySelector('.meme-content');
      const newImg = document.createElement('img');
      newImg.setAttribute('src', getRandomMeme);
    clearAll();
      container.appendChild(newImg); 
  }
  
  function showJoke() {
      const getRandomJoke = getRandomData('jokes');
      const newJoke = document.createElement('p');
      newJoke.textContent = getRandomJoke;
    clearAll();
    document.querySelector('.joke-content').appendChild(newJoke);
  }
  
  function showQuote() {
      const getRandomQuote = getRandomData('quotes');
      const newQuote = document.createElement('p');
    newQuote.textContent = getRandomQuote.quote;
    const newAuthor = document.createElement('p');
    newAuthor.textContent = "- " + getRandomQuote.author;
    
    clearAll();
    
    const container = document.querySelector('.quote-content');
    container.appendChild(newQuote);
    container.appendChild(newAuthor);
    
  }
  
  function showRiddle() {
      const getRiddle = getRandomData('riddles');
    const { riddle, answer } = getRiddle;
    
    const questElem = document.createElement('p');
    questElem.textContent = riddle;
    
    const answerElem = document.createElement('p');
    answerElem.textContent = 'The answer is: ' + answer;
    answerElem.setAttribute('id', 'riddle-answer');
    answerElem.hidden = true;
    
    const container = document.querySelector('.riddle-content');
    
    clearAll();
    
    container.appendChild(questElem);
    container.appendChild(answerElem);
  }
  
  function revealAnswers() {
    const riddleContainer = document.querySelector('.riddle-content');
    const saveRiddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer');
    
    if(saveRiddle && answer.hidden) {
           answer.hidden = false;
    } else if(saveRiddle) {
         alert('The answer is already revealed.');
    } else {
      alert('There is no riddle. Click on \'Ready For Riddle\'');
    }
  }
  
  function getRandomData(type) {
      return data[type][rn(data[type].length)];
  }
  
  const memes = ['https://i.chzbgr.com/original/18110469/hBFC521EB/a-compilation-of-programming-and-computer-science-themed-memes', 'https://dnd2oi6izkvoi.cloudfront.net/img/iea/yrwQvLJbON/programmer-memes.jpg', 'https://miro.medium.com/v2/resize:fit:1400/0*8WOQqXZdBwC3BC43', 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png', 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be7eedf8e1f31aabcec_BwENfmI0CU5dZGYlSyo142mpfG08-rYgTS-Qm47uMUXN6JXtmdZvtzVzTooUQdXTWmTD8uzF9N6XQJA2vUIMi53tunFyVtvOBJTNfOjHit2P_JkTmFzFsK7ep6Vb9781XZnRAryH.png', 'https://miro.medium.com/v2/resize:fit:1400/0*z1mm6izqSeDiKukb'];
  
  const jokes = ['I was going to tell you a joke about boxing but I forgot the punch line.', 'I was going to tell a time traveling joke, but you guys didn\'t like it.', 'Which is faster, hot or cold? Hot, because you can catch cold.', 'I\'m so good at sleeping I can do it with my eyes closed!'];
  
  const quotes = [
      {quote: 'It always seems impossible until it\'s done.', author: 'Nelson Mandela'},
      {quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.', author: 'Thomas A. Edison'},
      {quote: 'You can\'t separate peace from freedom because no one can be at peace unless he has his freedom.', author: 'Malcom X'},
      {quote: 'If you\'re not ready to die for it, put the word \'freedom\' out of your vocabulary.', author: 'Malcom X'}
  ];
  
  const riddles = [
      {riddle: 'What kind of room has no doors or windows?', answer: 'Mushroom'},
      {riddle: 'What lies in the middle of March and April but not at the end or beginning of either?', answer: 'The letter R'},
      {riddle: ' What is the end of everything?', answer: 'The letter G'},
      {riddle: 'What has many teeth, but cannot bite?', answer: 'A Comb'},
  ];

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const alphabets = letters.split("");
  
  function rn(len) {
      return Math.floor(Math.random() * len);
  }
  
  const data = {
      memes,
      jokes,
      quotes,
      riddles
  }
  
  
