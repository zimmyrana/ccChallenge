//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.


const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.or/posts')
        if (!response.ok) {
            throw new Error(`Http Error : ${response.status}`)
        }
        const jsonData = await response.json()
        console.log(jsonData)
    } catch (err) {
        console.log('Fetch error:', err.message)
    }
}

fetchData()
