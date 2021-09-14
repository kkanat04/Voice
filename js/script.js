//Распознователь

let recognizer = new webkitSpeechRecognition()
let name = ''

//вставка опции для того чтобы распознование началось до того момента 
//пока не закончил пользователь
recognizer.interimResults = true

//опция настройки языка
recognizer.lang = 'en-En'

recognizer.onresult = (event) => {
    let result = event.results[0]
    if (result.isFinal) {
        console.log('You said ' + result[0].transcript)
        name = result[0].transcript
    }
}

const speech = () => {
    recognizer.start()
}

const talk = () => {
    utter = new window.SpeechSynthesisUtterance(name);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
}