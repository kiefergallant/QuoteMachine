var quotes = ["Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
              "Code is like humor. When you have to explain it, it’s bad. - Cory House",
              "That's the thing about people who think they hate computers. What they really hate is lousy programmers. - Larry Niven",
              "Get busy living or get busy dying - Stephen King",
              "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do - Mark Twain",
              "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things. - Leonardo Da Vinci",
              "Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were - David Rockefellar",
              "It is our choices, that show what we truly are, far more than our abilities - J.K Rowling"]


var buttonCounter = 0
function forwardFunction(){
    document.getElementById('quoteDisplay').innerHTML = [quotes[buttonCounter]];
    buttonCounter += 1;
    if (buttonCounter === quotes.length) {
      buttonCounter = 0

    }
}

function backwardFunction(){
  buttonCounter -= 1;
  document.getElementById('quoteDisplay').innerHTML = [quotes[buttonCounter]];

}

function clickButton(){
  document.getElementById('forward').click();
}


setInterval(clickButton,30000);

window.onload = forwardFunction;
