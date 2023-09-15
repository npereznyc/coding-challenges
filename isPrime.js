function isPrime(num) {
    absNum=Math.abs(num)

    if (num===2) return true
    if(num<=1 || num %2 === 0 ) return false

    const sqtrNum=Math.sqrt(absNum)

    for(let i=3; i<=sqtrNum; i+=2) {
        if(num %i ==0){
            return false
        }
        
    }  
    return true
  }

  isPrime(75)