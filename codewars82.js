function calculateYears(principal, interest, tax, desired) {
    let years = 0;
   while (principal < desired) {
     principal += principal * interest * (1 - tax);
     years++;
   }
   return years;
 }   
 // years starts at 0 
 // conditional for, while principal is less than the desired amount 
 // principal will be replaced '+=' principal total w/ interest and taxes for 
 // year++ [1], [2], [3] etc
 // return years 