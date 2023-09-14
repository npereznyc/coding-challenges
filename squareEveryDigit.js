function squareDigits(num){
    if(num===0){
        return 0;
      }
    
      let arr= String(num).split('').map(Number)
      let newArr=[]
      
      for(let i=0; i<arr.length; i++){
        newArr.push(arr[i]*arr[i])
      }

      let result=parseInt(newArr.join(''))

      console.log(result)

  }

squareDigits(3212)