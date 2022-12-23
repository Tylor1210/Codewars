function abbrevName(name){
//for loop to grab the first letters?   //value 0 first letter
 const answer = [name[0]]
 for(let i = 0; i < name.length; i++){
   if(name[i] === ""){
     answer.push(name[i + 1]);
   }
 }
 // now i need to make the letters i took out capital and join them with a period inbetween
 return answer.map(el => el.toUpperCase()).join(".")
 
}