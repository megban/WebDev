var p1_text = document.getElementById('p1');
var p2_text = document.getElementById('p2');
var p1_button = document.getElementById('player1');
var p2_button = document.getElementById('player2');
var num_input = document.getElementById('numInput');
var winning_score = 5;
var p1_score = 0;
var p2_score = 0;

p1_button.addEventListener("click", function()
{
  if(p1_score!=winning_score &&  p2_score !=winning_score)
  {
    p1_score  =  parseInt(p1_score ) + 1;
    p1_text.textContent = p1_score;
    if(p1_score  == winning_score)
    {
      p1_text.classList.add("winner");
    }
  }

});

p2_button.addEventListener("click", function()
{
  if(p1_score !=winning_score && p2_score !=winning_score)
  {
    p2_score  =  parseInt(p2_score ) + 1;
    p2_text.textContent = p2_score;
    if(p2_score  == winning_score)
    {
      p2_text.classList.add("winner");
    }
  }

});

reset.addEventListener("click", function()
{
  p1_score  =  0;
  p1_text.textContent = p1_score;
  p2_score  =  0;
  p2_text.textContent = p2_score;
  p1_text.classList.remove("winner");
  p2_text.classList.remove("winner");
});

num_input.addEventListener("change", function()
{
  winning_score = Number(this.value);
  document.querySelector("#round").textContent = winning_score;
});
