function getMiddle(s)
{
   var middle = Math.floor(s.length/2);
    if (s.length % 2 == 0)
        return s[middle-1] + s[middle];
    else
        return s[middle];
}

// string return string with value 
// string from the middle of the string 
// examples test should return "es"; testing should return "t"
// input test ; testing ; middle 
//pseudo to find the middle we need to divide the length of the string by 2; if its 0 we need the string before the middle and after it as asked; 