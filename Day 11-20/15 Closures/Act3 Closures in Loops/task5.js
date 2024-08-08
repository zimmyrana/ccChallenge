//Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. 

let arrOfFun = []

for (let index = 0; index < 5; index++) {

   arrOfFun.push(
    function arrFun(){
        console.log(index)
    } 
   )
   
}

arrOfFun.forEach((fn)=>{
    fn()
})