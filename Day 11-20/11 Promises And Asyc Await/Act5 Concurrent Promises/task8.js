//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const fetchData = (serverName, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve(serverName +' : resolved ')
            } else {
                reject(new Error(`Server Failed ${serverName}`))
            }
        }, time)
    })
}

const allPromised = async () => {
    try {
        /* Promise.all:
                Takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.

                If any of the promises reject, the combined promise also rejects with the reason of the first rejected promise.
         */
        const result = await Promise.all([
                fetchData('server1', 1000),
                fetchData('server2', 2000),
                fetchData('server3', 3000)
            ])
        console.log(result)
    } catch (err) {
        console.log(err)
    }   
}

allPromised()