console.log("proj");

function get_results(){
   
    com_cal= Math.floor(Math.random()*3);
    console.log(`com : ${com_cal}`);
    str_Input= ['Rock', 'Paper', 'Scissors'];
    str_Out= (` Moritz:  (${str_Input[user]})  VS  Sangi: (${str_Input[com_cal]}) =`);
    // user=str_Input[user];
    // console.log(user)

    if(user== com_cal){
        str_Out = str_Out + "draw!"
    }else if ((user == 0 && com_cal == 1) || (user == 1 && com_cal == 2)|| (user == 2 && com_cal == 0)){
        str_Out = str_Out + "Sangi win!"
    }else{
        str_Out = str_Out + "Moritz win"
    }
     document.getElementById('result').innerHTML =str_Out; 
     document.getElementById('user').innerHTML=str_Input[user]; 
     document.getElementById('com').innerHTML=str_Input[com_cal];   
        
}
// user
let user=0;

function do_rock(){
    user=0;
    
}

function do_scissor(){
    user=1;
    
}
function do_paper(){
    user=2;
    
}



