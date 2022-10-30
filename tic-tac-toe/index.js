
document.querySelector(".x-btn").addEventListener("click",function(){
   var turn="X";
   localStorage.setItem("turn",turn);
   location.href="gamePage.html";
   })


document.querySelector(".o-btn").addEventListener("click",function(){
    var turn="O";
    localStorage.setItem("turn",turn);
   location.href="gamePage.html";
  
})
function gameFun(){
    var userChoice=localStorage.getItem("turn");
    var resetValue =0;
    localStorage.setItem("turn", resetValue);
    document.querySelector(".player-heading").innerText="Player "+userChoice+"'s Turn";
    let isgameOver=false;
    let iswin=false;
    var click=new Audio('audio/click.wav');
    var gameOver=new Audio('audio/gameOver.wav');
    var sweep=new Audio('audio/sweep.wav');
    
    //change function
    function changeTurn()
    {
        userChoice=(userChoice==="X")?"O":"X";
        return userChoice;
    }
    //check win
    function checkWin(){
        let win=[
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [3,4,5],
            [6,7,8],
            [2,4,6],
        ];
        win.forEach(Element=>{
            if(s[Element[0]]==s[Element[1]]&&s[Element[1]]==s[Element[2]]&&s[Element[0]]!="")
            {
    
                iswin=true;
                document.querySelector(".player-heading").innerText="Player "+s[Element[0]]+" Won 🏆🎉🎉";
                var champ=s[Element[0]].innerText;
                isgameOver=true;
                gameOver.play();
            }
            
        })
    }
    
    // function to enter
    let len=document.querySelectorAll(".box").length;
     let box=document.querySelectorAll(".box");
     let sym=document.querySelectorAll("div img");
    let s=["","","","","","","","",""];
     let count=0;
    for(let i=0;i<len;i++){
        box[i].addEventListener("click",function(){
            if(iswin==false)
            {
                if(s[i]=="")
                {
                  click.play();
                  s[i]=userChoice;
                  if(userChoice=="X")
                  {
                    sym[i].style.visibility="visible";
                    sym[i].src="images/Group-2-removebg.png";
                  }
                  else
                  {
                    sym[i].style.visibility="visible";
                    sym[i].src="images/Group-1-removebg.png";
                  }
                    changeTurn();
                    checkWin();
                    if(!isgameOver){
                        document.querySelector(".player-heading").innerText="Player "+userChoice+"'s Turn";
                        count++;
                    }
                    
                    if(count==9)
                    drawFunction();
                }
            }
           
            
        })
    }
     //Draw funtion
     function drawFunction()
     {
       document.querySelector(".player-heading").innerText="It's a Draw Match!!";
     }
        //reset
       let reset= document.querySelector(".btn1")
       reset.addEventListener("click",function(){
        sweep.play();
           for(let i=0;i<len;i++){
               s[i]="";
               sym[i].src="";
               sym[i].style.visibility="hidden";
           }
           iswin=false;
           count=0;
           isgameOver=false;
           document.querySelector(".player-heading").innerText="Player "+userChoice+"'s Turn";
       })
      
    
}

