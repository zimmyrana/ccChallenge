//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console. 

let year = 1800

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log('year is leap year');
} else {
    console.log('year is non-leap year');
}

console.log(year % 400)

/*
Certainly! The conditions for determining whether a year is a leap year are:

The year must be divisible by 4.
If the year is divisible by 100, it must also be divisible by 400 to be a leap year.

If a year is divisible by 100, it is not a leap year unless it is also divisible by 400. This means:

Years like 1700, 1800, 1900, 2100, etc., are not leap years because they are divisible by 100 but not by 400.
However, years like 1600, 2000, 2400, etc., are leap years because they are divisible by both 100 and 400.
To summarize:

A year that is divisible by 100 but not by 400 is not a leap year.
A year that is divisible by both 100 and 400 is a leap year.
*/