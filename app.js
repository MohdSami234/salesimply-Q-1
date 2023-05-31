const addtwonumbers = (a,b)=>{
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Invalid Input');
    }
    return a+b;
}
  try {
    console.log(addtwonumbers(5, 6));
   } catch (error) {
    console.error(error.message); 
  }
  