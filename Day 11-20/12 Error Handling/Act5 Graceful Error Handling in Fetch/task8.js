//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

const fetchData = fetch('https://jsonplaceholder.org/posts').then((response)=>{
    if(!response.ok){
        throw new Error(`Http Error : ${response.status}`)
    }
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch(err=>{
    console.log(`fetch error:${err.message}`)
})

