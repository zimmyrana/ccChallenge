// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error{
    constructor(data){
        super(data)
        this.name = 'CustomErrorClass'
    }
} 

function makeError(){
    throw new CustomError('custom error message')
}

function handleError(){
    try{
        makeError()
    } catch (err) {
        if(err instanceof CustomError){
            console.log(err.message)
        } else {
            console.log('caught unexpected error')
        }
        
    }
}

handleError()