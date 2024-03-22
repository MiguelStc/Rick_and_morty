

let unknown_status_characters =[];
let dead_characters=[];
let alive_characters =[];
let page_element_couter = 20;
let every_character = [];
let card_number_for_popup =[];
document.querySelector(".x").innerHTML="x";

function set_pop_up_null(){
    document.querySelector(".container_popup").style.display = "none";
    document.querySelector(".kill_pop_up").style.display = "none";
}
set_pop_up_null();
    async function get_data_from_api(container_dat=[],container_alive=[],container_dead=[],container_unknown=[]){
        let page_number =0; 
        for(let j =1; j<43;j++){
            page_number =j;
            if(j==42){page_number = 6} // on the last page there are 6 items unlike the others with 20 
            
            const reponse = await fetch("https:rickandmortyapi.com/api/character/?page="+page_number+"");
            const full_data = await reponse.json();
            
            for(let i =0; i<page_element_couter; i++){
                container_dat.push(full_data.results[i]);

                if(full_data.results[i].status ==="Alive"){
                    container_alive.push(full_data.results[i]);
                }
                else if(full_data.results[i].status ==="Dead"){
                    container_dead.push(full_data.results[i])
                }
                else{ container_unknown.push(full_data.results[i])}

            }

        }
        //card_id.splice(0,card_id.length)
       for(let i=1; i<13;i++){

        
        let len_every_character = every_character.length;
        let rdm_number = Math.random()*len_every_character-1;
        rdm_number = Math.round(rdm_number);
           
       document.querySelector(".image"+i).src=`${every_character[rdm_number].image}`;
       document.querySelector(".name"+i).innerHTML= every_character[rdm_number].name;
       document.querySelector(".status"+i).innerHTML= every_character[rdm_number].status;
        document.querySelector(".species"+i).innerHTML= every_character[rdm_number].species;
        document.querySelector(" .gender"+i).innerHTML= every_character[rdm_number].gender;
        card_number_for_popup.push(every_character[rdm_number]);
       
    }
       
    }
    

get_data_from_api(every_character,alive_characters,dead_characters,unknown_status_characters);

 function generate_rdm(){
    
    document.querySelector(".container_popup").style.display = "none";
    document.querySelector(".kill_pop_up").style.display = "none";
    card_number_for_popup=[];
    for(let i=1; i<13;i++){

        let len_every_character = every_character.length;
        let rdm_number = Math.random()*len_every_character;
        rdm_number = Math.round(rdm_number);
      
        

   document.querySelector(".image"+i).src=`${every_character[rdm_number].image}`;
   document.querySelector(".name"+i).innerHTML= every_character[rdm_number].name;
   document.querySelector(".status"+i).innerHTML= every_character[rdm_number].status;
    document.querySelector(".species"+i).innerHTML= every_character[rdm_number].species;
    document.querySelector(" .gender"+i).innerHTML= every_character[rdm_number].gender;
    card_number_for_popup.push(every_character[rdm_number]);
    
    
}
 }
function show_dead(){
    document.querySelector(".container_popup").style.display = "none";
    document.querySelector(".kill_pop_up").style.display = "none";
    card_number_for_popup=[];
    for(let i=1; i<13;i++){

        let len_dead_character = dead_characters.length;
        let rdm_number = Math.random()*len_dead_character;
        rdm_number = Math.round(rdm_number);
       
    card_number_for_popup.push(dead_characters[rdm_number]);
   document.querySelector(".image"+i).src=`${dead_characters[rdm_number].image}`;
   document.querySelector(".name"+i).innerHTML= dead_characters[rdm_number].name;
   document.querySelector(".status"+i).innerHTML= dead_characters[rdm_number].status;
    document.querySelector(".species"+i).innerHTML= dead_characters[rdm_number].species;
    document.querySelector(" .gender"+i).innerHTML= dead_characters[rdm_number].gender;
    
   
    
    

}
}
function show_alive(){
    document.querySelector(".container_popup").style.display = "none";
    document.querySelector(".kill_pop_up").style.display = "none";
    card_number_for_popup=[];
    for(let i=1; i<13;i++){

        let len_alive_character = alive_characters.length;
        let rdm_number = Math.random()*len_alive_character;
        rdm_number = Math.round(rdm_number);
        

   document.querySelector(".image"+i).src=`${alive_characters[rdm_number].image}`;
   document.querySelector(".name"+i).innerHTML= alive_characters[rdm_number].name;
   document.querySelector(".status"+i).innerHTML= alive_characters[rdm_number].status;
    document.querySelector(".species"+i).innerHTML= alive_characters[rdm_number].species;
    document.querySelector(".gender"+i).innerHTML= alive_characters[rdm_number].gender;
    card_number_for_popup.push(alive_characters[rdm_number]);   

}
    
}
function show_unknown(){
    document.querySelector(".container_popup").style.display = "none";
    document.querySelector(".kill_pop_up").style.display = "none";
    card_number_for_popup=[];
    for(let i=1; i<13;i++){

        let len_unknown_status_character = unknown_status_characters.length;
        let rdm_number = Math.random()*len_unknown_status_character;
        rdm_number = Math.round(rdm_number);

   document.querySelector(".image"+i).src=`${unknown_status_characters[rdm_number].image}`;
   document.querySelector(".name"+i).innerHTML= unknown_status_characters[rdm_number].name;
   document.querySelector(".status"+i).innerHTML= unknown_status_characters[rdm_number].status;
    document.querySelector(".species"+i).innerHTML= unknown_status_characters[rdm_number].species;
    document.querySelector(" .gender"+i).innerHTML= unknown_status_characters[rdm_number].gender;
    card_number_for_popup.push(unknown_status_characters[rdm_number]);  
    
}
      
}
//======================================================================================
//card content card 1 
function Card_info(){
    
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[0].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[0].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[0].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[0].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[0].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[0].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[0].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[0].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[0].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[0].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[0].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[0].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[0].episode.length-1;i++){
        let current_link = card_number_for_popup[0].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");


 

}
function Card_info1(){
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[1].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[1].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[1].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[1].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[1].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[1].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[1].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[1].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[1].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[1].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[1].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[1].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[1].episode.length-1;i++){
        let current_link = card_number_for_popup[1].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info2(){
    console.log(card_number_for_popup[2]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[2].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[2].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[2].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[2].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[2].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[2].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[2].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[2].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[2].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[2].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[2].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[2].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[1].episode.length-1;i++){
        let current_link = card_number_for_popup[1].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info3(){
    console.log(card_number_for_popup[3]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[3].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[3].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[3].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[3].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[3].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[3].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[3].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[3].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[3].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[3].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[3].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[3].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[3].episode.length-1;i++){
        let current_link = card_number_for_popup[3].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info4(){
    console.log(card_number_for_popup[4]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[4].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[4].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[4].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[4].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[4].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[4].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[4].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[4].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[4].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[4].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[4].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[4].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[4].episode.length-1;i++){
        let current_link = card_number_for_popup[4].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info5(){
    console.log(card_number_for_popup[5]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[5].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[5].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[5].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[5].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[5].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[5].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[5].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[5].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[5].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[5].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[5].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[5].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[5].episode.length-1;i++){
        let current_link = card_number_for_popup[5].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info6(){
    console.log(card_number_for_popup[6]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[6].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[6].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[6].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[6].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[6].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[6].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[6].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[6].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[6].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[6].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[6].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[6].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[6].episode.length-1;i++){
        let current_link = card_number_for_popup[6].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info7(){
    console.log(card_number_for_popup[7]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[7].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[7].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[7].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[7].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[7].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[7].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[7].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[7].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[7].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[7].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[7].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[7].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[7].episode.length-1;i++){
        let current_link = card_number_for_popup[7].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info8(){
    console.log(card_number_for_popup[8]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[8].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[8].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[8].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[8].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[8].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[8].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[8].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[8].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[8].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[8].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[8].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[8].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[8].episode.length-1;i++){
        let current_link = card_number_for_popup[8].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info9(){
    console.log(card_number_for_popup[9]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[9].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[9].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[9].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[9].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[9].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[9].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[9].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[9].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[9].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[9].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[9].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[9].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[9].episode.length-1;i++){
        let current_link = card_number_for_popup[9].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info10(){
    console.log(card_number_for_popup[10]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[10].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[10].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[10].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[10].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[10].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[10].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[10].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[10].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[10].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[10].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[10].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[10].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[10].episode.length-1;i++){
        let current_link = card_number_for_popup[10].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}
function Card_info11(){
    console.log(card_number_for_popup[11]);
    document.querySelector(".container_popup").style.display = "block";

    document.querySelector(".kill_pop_up").style.display = "block";
    let kill_pop = document.querySelector(".kill_pop_up");
    kill_pop.classList.add("apearing50");

    

    if(card_number_for_popup[11].status ==="Dead"){
        document.querySelector(".img_container_pop_up").style.filter="grayscale(100%)";
        document.querySelector(".status").style.color="red";
        document.querySelector(".status").innerHTML="R.I.P🕊️";
        document.querySelector(".status").style.backgroundColor= null;
    }
     if(card_number_for_popup[11].status==="Alive"){
        document.querySelector(".status").style.color="White";
        document.querySelector(".img_container_pop_up").style.filter="grayscale(0%)";
        document.querySelector(".status").style.backgroundColor="green";
        document.querySelector(".status").innerHTML="Alive";
    }
    if(card_number_for_popup[11].gender==="Male"){document.querySelector(".gender").style.color="blue";}
    if(card_number_for_popup[11].gender==="Female"){document.querySelector(".gender").style.color="#ff3770";}
    if(card_number_for_popup[11].gender==="unknown"){document.querySelector(".gender").style.color="purple";}
    if(card_number_for_popup[11].gender==="Genderless"){document.querySelector(".gender").style.color="green";}



    document.querySelector(".name").innerHTML=card_number_for_popup[11].name;
    document.querySelector(".gender").innerHTML=card_number_for_popup[11].gender;
    document.querySelector(".species").innerHTML=card_number_for_popup[11].species;
    document.querySelector(".origin").innerHTML="Origin: "+card_number_for_popup[11].origin.name;
    document.querySelector(".origin").innerHTML=`Last seen : ${card_number_for_popup[11].location.name}`;
    document.querySelector(".img_container_pop_up").style.backgroundImage=`url(${card_number_for_popup[11].image})`;
    
    let character_episodes=[];
   
    for(let i= 0; i<=card_number_for_popup[11].episode.length-1;i++){
        let current_link = card_number_for_popup[11].episode[i];
        let number_in_link = current_link.replace(/\D/g,'');
        character_episodes.push(number_in_link);

    }
    if(character_episodes.length===1){
        document.querySelector(".episode").innerHTML=`Episode :${character_episodes}`;
    }else {document.querySelector(".episode").innerHTML=`Episodes :${character_episodes}`;}

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.add("scale");
}

function kill_pop_up(){

    let pop_up = document.querySelector(".container_popup");
    pop_up.classList.remove("scale");
    document.querySelector(".container_popup").style.display = "none";
    document.querySelector(".kill_pop_up").style.display = "none";
  

}



