
// for preconditon of watch//
var isStop = true; 
// function for Start button //
function start(){
    //  cheaking the condition
    if(isStop == true){
        isStop = false;
        timer();
    }
}

// deffineing the variable conut of the function//
 var second = 0;
 var minte = 0;
 var hour = 0;


//  function for the timer function  //  
            
function timer(){



    if(isStop == false){


    second = parseInt(second);
    minte = parseInt(minte);
    hour = parseInt(hour);    
        second++;

        if(second== 60){
            second= 0;
            minte++;
        }
        if(minte == 60){
            minte = 0;
            hour++;
        }

        if(second<10){
            second = "0"+second;
        }
        if(minte<10){
            minte= "0"+minte;
        }


        if(hour<10){
            hour = "0" +hour;
        }
        
         stopwatch.innerHTML = hour+":"+minte+":"+second;
        setTimeout("timer()",1000);
    }


}
// function for the stop button //
function stop(){
    isStop= true;
}

// funciton for the resstart button//
function restart(){
    
    isStop = true;

    second = 0;
    minte = 0;
    hour= 0;
    
    stopwatch.innerHTML = "00:00:00";

    


}