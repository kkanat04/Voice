// function showMessage(){
//     alert('hello')
// }
// showMessage()

// function getstr(){
//     alert('hello my frined')
//     console.log('hello my friend')
// }
// getstr()

// let message = 'hello frinend'
// function showMessage(){
//     let massage = 'hello friend'
//     alert('message')
// }
// showMessage()
// alert(message)


// function getUser(user){
//     alert(user)
// }

// getUser('anna')
// getUser('leila')

// function showMessage(from, text = '...'){
//     from = '****' +from + '****'
//     alert(frim+ ':' +text)
// }
// showMessage('Aizhan', 'Hello')

// function sum (a, b){
//     return a + b
// }

// console.log(sum(1, 2))


//====================

// function checkAge(age){
//     if(age >= 18){
//         return true
//     }else {
//         return confirm('У тебя есть разрешение?')
//     }
// }
// let age = prompt(' Сколько вам лет?')
// if (checkAge(age)){
//     alert(' Проходите!')
// }else{
//     alert('Доступ закрыт')
// }

// function max(a, b, c) {
//     return Math.max(a, b, c)
//     // if ( a > b && a > c) return a
//     // else if(b > c && b > a) return b
//     // else return c
// }
// alert(max(10, 50, 60))

// function pow(x, n)

//===========power===========

//=======1 varinat
// function pow(x, n){
//     return x ** n
// }

//======2 variant
// function pow(x, n){
//     let result = x
//     for (let i = 1; i < n; i++){
//         result *= x
//     }
//     return console.log(result)
// }
// pow(4, 3)

// let x = +prompt('x')
// let n = +prompt('n')

// if (n < 1) {
//     console.log('n negtaive int')
// }else {
//     pow(x, n)
// }



let listGuest = []

let countGuest = prompt('Chislo gostey?')

function invite(){
    for(let i = 0; i < countGuest; i++){
        let nameGuest = prompt('Imya gostya?')
        listGuest.push(nameGuest)
    }
}
let count = 0
function list (){
        for(let item of listGuest){
            count++
            console.log(count + '. Dear ' + item +' invited')
        }
    }

invite()
console.log(listGuest)
console.log(list())


//============================================

    const dictionary = {}
    let amountOfWord = +prompt('Кол-во слов')

    function addWord(){
         for (let i = 0; i < amountOfWord; i++){
        let eng = prompt(' Введите английское слово')
        let rus = prompt(' Введите перевод')
        dictionary[eng] = rus
        //dictionary.eng = rus
        }
    }
   console.log(dictionary)

    let count = 0
    function checkWord(){
        for(let key in dictionary){
            let word = prompt('Как переводиться ' + key)
            if(word == dictionary[key]){
                count ++
                alert("Правильно")   
            }else {
                alert("Повторите еще раз!")
                continue
            }
        }
        console.log('Ты ответил на ' + count + ' слово правильно')
    }
    