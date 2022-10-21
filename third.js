let returnLarger = (arr, num) => {
    return arr.reduce((acc, curr)=>{ 
      if(curr < num){
        return acc.concat(curr)  
      }else{
        return acc
      }
    }, [])   
  }
   
   
  console.log(returnLarger( [30, 15, 12, 21, 19], 18))