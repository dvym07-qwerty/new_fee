
          
        score = JSON.parse(localStorage.getItem("score"))||
         {wins:0 , loses:0 , draws:0}
  
    let js_p = document.querySelector(".js_p_scores")  ;  
  
        function func(myMove){
            let result = ""  
            random = Math.random();
            let cMove;


            if ( random >=0 && random <= 0.33){
                cMove = `rock`;
                if (myMove ===`rock`){
                   
                    result="ties"; }
                if (myMove===`paper`){
                   
                    result="wins"
                    }
                if(myMove===`scissors`){
                    
                    result="loses"
                }
            }
            else if ( random >0.33 && random<=0.67){
                cMove = `paper`;
                if (myMove ===`rock`){
                   
                     result="loses"}
                if (myMove===`paper`){
                   
                    result="ties";
                    }
                if(myMove===`scissors`){
                    
                    result="wins"
                    }
                                                
            }
            else if ( random > 0.67 && random<=1){
                cMove = `scissors`;
                

                if (myMove ===`rock`){
              
                    result="wins"};
                if (myMove===`paper`){
                    result="loses"
                }
                if(myMove===`scissors`){
                    
                    result="ties";
                    }    
            }
            
            if (result==="wins"){
                score.wins+=1;
            }
            else if (result==="loses"){
                score.loses+=1;
            }
            else if (result==="ties"){
                score.draws+=1;
            }
         

          js_p.innerHTML =  

     `comp : <img src="move_emojis/${cMove}-emoji.png" class="move_img"> __  you : <img src="move_emojis/${myMove}-emoji.png" class="move_img"> <br>  <br>
      <b> YOU ${result.toUpperCase()} </b>
         <br>      <br>     
     wins: ${score.wins} __ loses: ${score.loses} __ draws: ${score.draws} `;
          

          localStorage.setItem("score",JSON.stringify(score));     


          
        }  
  

        function reset_scores(){
            score.wins=0;score.loses=0;score.draws=0; 

         js_p.innerHTML =  
     `  wins: ${score.wins} __ loses: ${score.loses} __ draws: ${score.draws} `;
     localStorage.removeItem('score') 
          }