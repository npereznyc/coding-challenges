function isPrime(num) {
    if (num===2){
        console.log(true)
        return
    }
    if(num<=1 || num %2 === 0 ){
        console.log(false)
        return
    } 
    for(let i=2; i<num; i++) {
        if(num %i ==0){
            console.log(false)
            return
        }
        
    }
console.log(true)
        return
  }

  isPrime(75)