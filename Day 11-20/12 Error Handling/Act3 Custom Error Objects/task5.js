// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. 

class ValidationError extends Error{
    constructor(msg){
        super(msg)
        this.name = 'Validation Error'
    }
}

function validateInput(input){
    if(input.trim() === ''){
        throw new ValidationError('Input cannot be empty')
    } else{
        console.log('valid input')
    }
}

function checkInput(input){
    try{
        validateInput(input)
    } catch (err) {
        if(err instanceof ValidationError){
            console.log(err.message)
        } else{
            console.log('unexpected error')
        }
    }
}

checkInput('hi')
checkInput('')
