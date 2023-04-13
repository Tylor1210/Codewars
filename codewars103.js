function solve(s){
    let lcArray = [];
    for (let i = 0; i < s.length; i++){
            if(s.charCodeAt([i]) >= 97 && s.charCodeAt([i]) <= 122){ // lower case letters 
                    lcArray.push(s[i]);
            } 
    }
        if (lcArray.length >= s.length-lcArray.length){
                return s.toLowerCase();
        } else if (lcArray.length < s.length-lcArray.length){
                return s.toUpperCase();
        } 
}