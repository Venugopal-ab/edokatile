let count=0
document.getElementById("inc").addEventListener("click",function()
{
  count++;
  document.getElementById("result").innerHTML=count;
});
document.getElementById("dec").addEventListener("click",function()
{
  count--;
  document.getElementById("result").innerHTML=count;
});
