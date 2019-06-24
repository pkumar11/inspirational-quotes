//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
      author: " A. P. J. Abdul Kalam "
    },
    {
      quote:
      "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
      author: "Vince Lombardi"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    },
    {
      quote:
      "“Never respect men merely for their riches, but rather for their philanthropy; we do not value the sun for its height, but for its use.",
      author:"Gamaliel Bailey"
    },
    {
      quote:
      "If you have some respect for people as they are, you can be more effective in helping them to become better than they are.",
      author:"John W. Gardner"
    },
    {
      quote:
      "I speak to everyone in the same way, whether he is the garbage man or the president of the university.",
      author:"Albert Einstein"
    }
  ];


  const btn=document.getElementById('generate-btn');
btn.addEventListener("click",()=>{
let random=Math.floor(Math.random()*quotes.length);
console.log(random);
document.getElementById('quote').textContent=quotes[random].quote;
document.querySelector(".author").textContent=quotes[random].author;
})


})();
