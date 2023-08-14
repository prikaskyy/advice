const text = document.getElementById('advice');
const number = document.getElementById('numberOfAdvice');
const dice = document.getElementById('dice');

fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then((data )=> {
    number.innerHTML = `advice #${data.slip.id}`
    text.innerHTML = `"${data.slip.advice}"`;
  })

dice.addEventListener("click",()=>{
  window.location.reload();
})
