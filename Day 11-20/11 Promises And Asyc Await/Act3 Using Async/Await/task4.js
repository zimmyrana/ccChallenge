//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
let promise1 = new Promise((resolve) => {
    setTimeout(() => {
         resolve('promise1 resolved')
    }, 1000)
})
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
         resolve('promise2 resolved')
    }, 2000)
})
let promise3 = new Promise((resolve) => {
    setTimeout(() => {
         resolve('promise3 resolved')
    }, 3000)
})

const fetchData = async () => {
    try {
        const data1 = await promise1;
        console.log(data1)
        const data2 = await promise2;
        console.log(data2)
        const data3 = await promise3;
        console.log(data3)
    } catch {
        console.log('Error fetching data:', err)
    }

}

fetchData()