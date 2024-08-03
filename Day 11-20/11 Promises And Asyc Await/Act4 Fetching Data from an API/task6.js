//  Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

let response = fetch('https://jsonplaceholder.org/users')

response.then((data)=>{
   if(!data.ok){
    throw new Error(data.statusText)
   } else {
    return data.json();
   }
}).then(data =>{
    console.log(data)
}).catch(err =>{
    console.error(err)
})