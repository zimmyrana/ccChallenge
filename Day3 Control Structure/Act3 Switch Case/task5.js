//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 50
let grade

//The switch statement in JavaScript evaluates a single expression and compares it with multiple cases. Each case should be a constant expression, not a condition.

switch (true) {
    case (score >= 85 && score <= 100):
        grade = 'A';
        break;
    case (score >= 65 && score <= 84):
        grade = 'B';
        break;
    case (score >= 50 && score <= 64):
        grade = 'C';
        break;
    case (score >= 33 && score <= 49):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(grade); // Output: A