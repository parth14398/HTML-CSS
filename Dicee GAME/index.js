var randomnumber1=Math.floor((Math.random() * 6) + 1);
var randomnumber2=Math.floor((Math.random() * 6) + 1);
var winnerstatus;
if( randomnumber1 > randomnumber2){
  winnerstatus = " 🚩Player1"
}
else if(randomnumber1 < randomnumber2){
  winnerstatus =" Player 2🚩";
}
else{
  winnerstatus="Tie..Refresh again"
}
document.querySelectorAll("img")[0].setAttribute("src" ,"images\\dice" +randomnumber1 +".png")
document.querySelectorAll("img")[1].setAttribute("src" ,"images\\dice" +randomnumber2 +".png")
document.querySelector("h1").innerHTML=winnerstatus;
