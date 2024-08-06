//Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

const axios = require('axios')

axios.get('https://jsonplaceholder.com/posts')
    .then(response =>{
        console.log(response.data)
    })
    .catch(err =>{
        console.error(err.message)
    })
