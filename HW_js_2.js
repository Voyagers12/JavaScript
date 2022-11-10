// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
function access(age){
  
if (age <= 17){
console.log('You don`t have access cause your age is ' +age+ ' It`s less then');
}
else if(( age >= 18) && ( age < 60)){
console.log('Welcome!');
} 
else if (age >= 60){
console.log('Keep calm and look Culture channel');
}
else  {
console.log('Technical work');
} 
}

access(18);


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
function access(age){
    if ( typeof age === "number"){
        if (age <= 17) {
    console.log('You don`t have access cause your age is ' +age+ ' It`s less then');
    }
    else if(( age >= 18) && ( age < 60)){
    console.log('Welcome!');
    } 
    else if (age >= 60){
    console.log('Keep calm and look Culture channel');
    }
    else  {
    console.log('Technical work');
    } 
    } 
    else{
       console.log('Error')
     }
}
    
    access(3);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function access(age){
    if ( typeof age === "number"){
   
            
        if (age <= 17) {
    console.log('You don`t have access cause your age is ' +age+ ' It`s less then');
    }
    else if(( age >= 18) && ( age < 60)){
    console.log('Welcome!');
    } 
    else if (age >= 60){
    console.log('Keep calm and look Culture channel');
    }
    else  {
    console.log('Technical work');
    } 
    
}
    else if (typeof age !== "number" ){
        let age_numb = +age
        if (age_numb <= 17) {
            console.log('You don`t have access cause your age is ' +age_numb+ ' It`s less then');
            }
            else if(( age_numb >= 18) && ( age_numb < 60)){
            console.log('Welcome!');
            } 
            else if (age_numb >= 60){
            console.log('Keep calm and look Culture channel');
            }
            else  {
            console.log('Technical work');
            } 
     }
}
   
    access('1');

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
function access(){
    let age = prompt('Введите ваш возраст')
    if ( typeof age === "number"){
               
        if (age <= 17) {
    console.log('You don`t have access cause your age is ' +age+ ' It`s less then');
    }
    else if(( age >= 18) && ( age < 60)){
    console.log('Welcome!');
    } 
    else if (age >= 60){
    console.log('Keep calm and look Culture channel');
    }
    else  {
    console.log('Technical work');
    } 
    
}
    else if (typeof age !== "number" ){
        let age_numb = +age
        if (age_numb <= 17) {
            console.log('You don`t have access cause your age is ' +age_numb+ ' It`s less then');
            }
            else if(( age_numb >= 18) && ( age_numb < 60)){
            console.log('Welcome!');
            } 
            else if (age_numb >= 60){
            console.log('Keep calm and look Culture channel');
            }
            else  {
            console.log('Technical work');
            } 
     }
}

    
    access();