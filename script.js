
var interval;
var curr1=document.querySelector('.small-output .curr1');
var curr2=document.querySelector('.small-output .curr2');
var curr3=document.querySelector('.small-output .curr3');
var curr4=document.querySelector('.small-output .curr4');
var curr5=document.querySelector('.small-output .curr5');



var next1=document.querySelector('.small-output .next1');
var next2=document.querySelector('.small-output .next2');
var next3=document.querySelector('.small-output .next3');
var next4=document.querySelector('.small-output .next4');
var next5=document.querySelector('.small-output .next5');



function startcounter(){
    var number=parseInt(document.getElementById('dis').value);
    if(isNaN(number)){
        alert(" please enter no")
        clearInterval(interval);
        return;
    }
    if(number < 0 || number >99999){
        alert("please enter only five digit no")
        clearInterval(interval);
        return;
    }


    let count=0;

    // resetno1(curr1,next1);
    // resetno2(curr2,next2);
    // resetno3(curr3,next3);
    // resetno4(curr4,next4);
    // resetno5(curr5,next5);



    clearInterval(interval);

    interval=setInterval(() => {
        if(count===number){
            clearInterval(interval);
            alert("counter stopped");
            return;
        }
        inscrease5(curr5,next5);
        count++;
           if(next5.innerText>9){
            // resetno5(curr5,next5);
            inscrease4(curr4,next4);
            next5.innerText=0;
        
            
            // resetno5(curr5,next5);
        }
        if(next4.innerText>9 && next5.innerText==0){
            
           inscrease3(curr3,next3);
           next4.innerText=0;
        }

        if(next3.innerText>9 && next4.innerText==0){
            
            inscrease2(curr2,next2);
           next3.innerText=0;
        }
        if(next2.innerText>9 && next3.innerText==0){
            
            inscrease1(curr1,next1);
            next2.innerText=0;
        }
        if(next1.innerText>9 && next2.innerText==0){
            next1.innerText=0;
        }
     
    }, 400);
    

}


// function resetno1(curr1,next1){
//     curr1.innerText=0;
//     next1.innerText=1;
// }
// function resetno2(curr2,next2){
//     curr2.innerText=0;
//     next2.innerText=1;
// }
// function resetno3(curr3,next3){
//     curr3.innerText=0;
//     next3.innerText=1;
// }
// function resetno4(curr4,next4){
//     curr4.innerText=0;
//     next4.innerText=1;
// }
// function resetno5(curr5,next5){
//     curr5.innerText=0;
//     next5.innerText=1;
// }


function inscrease5(curr5,next5){
       
    next5.classList.add('animate');
    setTimeout(function(){
    curr5.innerText=next5.innerText;
    next5.classList.remove('animate');
    next5.innerText=parseInt(next5.innerText)+1;
   
  },200);
}


    function inscrease4(curr4,next4){
    
        next4.classList.add('animate');
        setTimeout(function(){
        curr4.innerText=next4.innerText;
        next4.classList.remove('animate');
        next4.innerText=parseInt(next4.innerText)+1;
       
    },200);
    }
    function inscrease3(curr3,next3){
    
        next3.classList.add('animate');
        setTimeout(function(){
        curr3.innerText=next3.innerText;
        next3.classList.remove('animate');
        next3.innerText=parseInt(next3.innerText)+1;
    },200);
    }
    function inscrease2(curr2,next2){
    
        next2.classList.add('animate');
        setTimeout(function(){
        curr2.innerText=next2.innerText;
        next2.classList.remove('animate');
        next2.innerText=parseInt(next2.innerText)+1;
    },200);
    }
    function inscrease1(curr1,next1){
    
        next1.classList.add('animate');
        setTimeout(function(){
        curr1.innerText=next1.innerText;
        next1.classList.remove('animate');
        next1.innerText=parseInt(next1.innerText)+1;
    },200);
    }



