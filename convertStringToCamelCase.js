function toCamelCase(str){
    //iterate over string
    //if current index is a dash/underscore, remove it and capitalize index+1
   if(str.length>1){
    let regEx=/[^a-zA-Z0-9 ]/g
    let newStr=str.replaceAll(regEx,' ')
    let words=newStr.split(' ')

     for(let i=1; i<words.length; i++){
        words[i]=words[i][0].toUpperCase()+words[i].substr(1)
    }
    let result=words.join('')
    
    console.log(result)
   } else {
    console.log('empty string')
   }
    
    
  }

  toCamelCase('the-stealth-warrior')
  toCamelCase('The_Stealth_Warrior')
  toCamelCase('')