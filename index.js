function generate(){
    var random1=Math.floor(Math.random()*6+1);
    var random2=Math.floor(Math.random()*6+1);
    var randomimage1="dice"+random1+".png";
    var randomimage2="dice"+random2+".png";
    var randonimagesource1="images/"+randomimage1;
    var randonimagesource2="images/"+randomimage2;
    var image1=document.querySelectorAll("img")[0].setAttribute("src",randonimagesource1);
    var image2=document.querySelectorAll("img")[1].setAttribute("src",randonimagesource2);
    if(random1>random2){
        document.querySelector("h1").innerHTML="Player 1 wins";
    }
    else if(random1<random2){
        document.querySelector("h1").innerHTML="Player 2 wins";
    }else{
        document.querySelector("h1").innerHTML="draw";
    }

}