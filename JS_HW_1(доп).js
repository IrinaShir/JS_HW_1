let age_2 = 18
let age_3 = 60
const checkAge = function checkAge(age){
    if (age < age_2){
        console.log("You don’t have access cause your age is " + age + " It’s less then ") 
    } else if ( age >= age_2 && age < age_3){
        console.log("Welcome  !")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }}

checkAge(17)
checkAge(18)
checkAge(61)


// let age_2 = 18
// let age_3 = 60
// function checkAge(age){
//     if (typeof(age) != "number"){
//         console.log("ошибка")
//     } else if (age < age_2){
//         console.log("You don’t have access cause your age is " + age + " It’s less then ") 
//     } else if ( age >= age_2 && age < age_3){
//         console.log("Welcome  !")
//     } else if (age > age_3){
//         console.log("Keep calm and look Culture channel")
//     } else {
//         console.log("Technical work")
//     }
// }
// checkAge(17)
// checkAge("1fgh")
// checkAge(61)
// checkAge(18)
// checkAge(60)