let energy = 0;

const button = document.getElementById("dabButton");
const bar = document.getElementById("energyBar");

const cursor = document.getElementById("cursor");

const intro = document.getElementById("intro");
const terminal = document.getElementById("terminal");
const letter = document.getElementById("letter");

const envelope = document.getElementById("envelope");
const typing = document.getElementById("typing");

const music = document.getElementById("music");



/* CUSTOM CURSOR */

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});



/* SPARKLES */

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✦";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.animationDuration=
    (3+Math.random()*5)+"s";


    document.getElementById("sparkles")
    .appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },8000);

}


setInterval(createSparkle,150);



/* DAB CHARGING */


button.addEventListener("click",()=>{


    energy +=10;


    bar.style.width = energy+"%";



    if(energy >=100){

        unlock();

    }


});





function unlock(){


    cursor.innerHTML="🧸";


    intro.style.display="none";


    document.body.style.background="#063b2a";


    terminal.style.display="block";


    setTimeout(()=>{

        cursor.innerHTML="💗";


    },3000);



}




/* ENVELOPE */


envelope.addEventListener("click",()=>{


    terminal.style.display="none";

    letter.style.display="block";


    music.play().catch(()=>{});


    typeLetter();


});





/* TYPEWRITER */


const message = `

If you're reading this...

you found the secret little corner I made for you 🧸💚


I know A Levels have been a lot lately.

But remember:

You are doing better than you think.

Take a breath.

Drink some water.

Be kind to yourself.


I'm always cheering you on.


I wuv u sooo much, harida?

More than yk 🥺❤️

Mwahh!

`;



let index=0;


function typeLetter(){


    if(index < message.length){


        typing.innerHTML += message.charAt(index);


        index++;

        setTimeout(typeLetter,40);


    }


}
