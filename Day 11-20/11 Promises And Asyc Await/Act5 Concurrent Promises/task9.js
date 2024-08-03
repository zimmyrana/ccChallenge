//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const fetchData = (serverName, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(serverName +' : resolved ')
            } else {
                reject(new Error(`Server Failed ${serverName}`))
            }
        }, time)
    })
}

const wonPromise = async () => {
    try {
        //Promise.race will immediately settle (either resolve or reject) as soon as one of the provided promises settles.
        const result = await Promise.race([
                fetchData('server1', 5000),
                fetchData('server2', 2000),
                fetchData('server3', 3000)
            ])
        console.log(result)
    } catch (err) {
        console.log(err)
    }   
}

wonPromise()