function likes(names) {
    //if array.length<1 return 'no one likes this'
    // iterate over array
        //if array.length ==2 return 'array[i] and array[i+1] like this'
        //if array.length ==3 return 'array[i], array[i+1] and array[i+2] like this'
        //if array.length>3 return 'array[i], array[i+1] and (array.length-2) like this'

    let i=0
    if (names.length<1){
        return 'no one likes this'
    } else if (names.length==1){
        console.log(`${names[i]} likes this`) 
    } else if (names.length==2){
        
        console.log(`${names[i]} and ${names[i+1]} like this`)
    } else if(names.length==3){
        
        console.log(`${names[i]}, ${names[i+1]}, and ${names[i+2]} like this`)
    } else {
        console.log(`${names[i]}, ${names[i+1]} and ${names.length-2} others like this`)
    }
    

  }

  likes(["Max", "John", "Mark"])
  likes(["Jacob", "Alex"] )
  likes(["Alex", "Jacob", "Mark", "Max"])
  likes(['Peter'])