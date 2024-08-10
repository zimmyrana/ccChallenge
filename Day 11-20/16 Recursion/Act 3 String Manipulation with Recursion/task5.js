//Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverse(str){
    if(str.length === 1){
        return str
    } else {
        let remStr = str.slice(1) 
        console.log(`remStr:${remStr}, str[0]: ${str[0]}`)
        return reverse(remStr) + str[0]
    }
}

console.log(reverse('mohan'))