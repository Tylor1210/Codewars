const quarterOf = (month) => {
    // qtr 1 
   if(month < 4) return 1;
    //qtr 2
   if(month < 7) return 2;
    //qtr3
   if(month < 10) return 3;
   return 4;
}