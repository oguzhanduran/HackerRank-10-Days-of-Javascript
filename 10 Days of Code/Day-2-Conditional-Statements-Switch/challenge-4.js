function getLetter(s) {
    let letter;
  switch(true) {
      case "aeiou".includes(s[0]) : //0. string a,e,i,o,u harflerini içeriyorsa Return A de.
      return "A" ;
      break ;
      case "bcdfg".includes(s[0]) :
      return "B" ;
      break ;
      case "hjklm".includes(s[0]) :
      return "C" ;
      break ;
      case "npqrstvwxyz".includes(s[0]) :
      return "D" ;
      break ;
      
      
  }
    
    // Write your code here
    
    return letter;
}


