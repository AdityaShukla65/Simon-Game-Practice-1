let [green,red,yellow,blue]=[$("#green"),$("#red"),$("#yellow"),$("#blue")];
let array=[green,red,yellow,blue];
let gAudio=new Audio('green.mp3');
let rAudio=new Audio('red.mp3');
let yAudio=new Audio('yellow.mp3');
let bAudio=new Audio('blue.mp3');
let badAudio=new Audio('wrong.mp3');
var random;
let randomStorer=[];
let i=0
do{
    $(document).keypress(function k(){
        random=Math.floor(Math.random()*4);
        array[random].addClass("opacity");
        setTimeout(() => {
            array[random].removeClass("opacity");
        }, 120);
        randomStorer+=random;
        console.log(random);
        console.log(randomStorer);
    })
    function gclicked(){
        if(random==0){
            green.addClass("pressed");
            gAudio.play();
            setTimeout(() => {
                green.removeClass("pressed");
            }, 120);
        }
        else{
            badAudio.play();
            $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 120);
            $("#level-title").text("Game Over, Press Any Key To Restart");
        }
    }
    function rclicked(){
        if(random==1){
            red.addClass("pressed");
            rAudio.play();
            setTimeout(() => {
                red.removeClass("pressed");
            }, 120);
        }
        else{
            badAudio.play();
            $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 120);
            $("#level-title").text("Game Over, Press Any Key To Restart");
        }
    }
    function yclicked(){
        if(random==2){
            yellow.addClass("pressed");
            yAudio.play();
            setTimeout(() => {
                yellow.removeClass("pressed");
            }, 120);
        }
        else{
            badAudio.play();
            $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 120);
            $("#level-title").text("Game Over, Press Any Key To Restart");
        }
    }
    function bclicked(){
        if(random==3){
            blue.addClass("pressed");
            bAudio.play();
            setTimeout(() => {
                blue.removeClass("pressed");
            }, 120);
        }
        else{
            badAudio.play();
            $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 120);
            $("#level-title").text("Game Over, Press Any Key To Restart");
        }
    }
    i++
}while(i<randomStorer.length)
