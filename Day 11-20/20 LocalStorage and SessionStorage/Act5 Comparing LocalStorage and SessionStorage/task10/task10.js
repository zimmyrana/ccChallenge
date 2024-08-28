//Task 10: Write a function that clears all data from both localstorage and sessionstorage. Verify that both storages are empty.

(function () {
    localStorage.clear()
    sessionStorage.clear()

    if (localStorage.length === 0) {
        console.log('local storage cleared')
    } else {
        console.log('Local storage not cleared');
    }

    if (sessionStorage.length === 0) {
        console.log('session storage cleared')
    } else {
        console.log('Session storage not cleared');
    }
})()