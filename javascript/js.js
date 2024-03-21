

let unknown_status_characters =[];
let dead_characters=[];
let alive_characters =[];
let page_element_couter = 20;
let every_character = [];
let card_number_for_popup =[];

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
        let rdm_number = Math.random()*len_every_character;
        rdm_number = Math.round(rdm_number);
    
        
           
       document.querySelector(".image"+i).src=`${every_character[rdm_number].image}`;
       document.querySelector(".name"+i).innerHTML= every_character[rdm_number].name;
       document.querySelector(".status"+i).innerHTML= every_character[rdm_number].status;
        document.querySelector(".species"+i).innerHTML= every_character[rdm_number].species;
        document.querySelector(" .gender"+i).innerHTML= every_character[rdm_number].gender;
        card_number_for_popup.push(every_character[rdm_number]);
       
      
       
    }
       /* document.querySelector(" .img").src=`${every_character[rdm_number].image}`;
        document.querySelector(".name2").innerHTML= every_character[rdm_number].name;
        document.querySelector(".origin").innerHTML= every_character[rdm_number].origin.name;
        document.querySelector(".location").innerHTML=every_character[rdm_number].location.name;
        document.querySelector(".liste_episodes_seen_in").innerHTML=every_character[rdm_number].episode.length;*/  
    }
    

get_data_from_api(every_character,alive_characters,dead_characters,unknown_status_characters);

 function generate_rdm(){
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
function Card_info(){
    console.log(card_number_for_popup[0]);

}
function Card_info1(){
    console.log(card_number_for_popup[1]);
}
function Card_info2(){
    console.log(card_number_for_popup[2]);
}
function Card_info3(){
    console.log(card_number_for_popup[3]);
}
function Card_info4(){
    console.log(card_number_for_popup[4]);
}
function Card_info5(){
    console.log(card_number_for_popup[5]);
}
function Card_info6(){
    console.log(card_number_for_popup[6]);
}
function Card_info7(){
    console.log(card_number_for_popup[7]);
}
function Card_info8(){
    console.log(card_number_for_popup[8]);
}
function Card_info9(){
    console.log(card_number_for_popup[9]);
}
function Card_info10(){
    console.log(card_number_for_popup[10]);
}
function Card_info11(){
    console.log(card_number_for_popup[11]);
}
