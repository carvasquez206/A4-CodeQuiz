const data = [
    {
        question: "Who is Mike Jones?",
        a:'who',
        b: 'who',
        c: 'Mike Jones',
        d: 'President of the US',
        correct: 'Mike Jones', 
    },
    {
        question: "What is 30*3?",
        a:'fish',
        b: 'potatoes',
        c: '90',
        d: '4',
        correct: "a",
    },
    {
        question: "What is 2+2?",
        a:'fish',
        b: 'potatoes',
        c: '4',
        d: '4',
        correct: '4', 
    },
    {
        question: "What is 2+2?",
        a:'fish',
        b: 'potatoes',
        c: '4',
        d: '4',
        correct: '4', 
    },
]

/* good from here on*/
const quiz = document.getElementById("Quiz")
const uestionE1s = document.querySelectorAll(".answer")
const questionE1 = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

/*so that text changes */
function loadQuiz(){
    deselectAnswers()

    const currentQuizData = data[currentQuiz]

    questionE1.innerText = currentQuizData.question
    
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d 
}

function deselectAnswers(){
    answerE1S.forEach((answerE1) => {
        answerE1.checked = false
    })
}

funtion getSelect(){
    let answer

    answerE1S.forEach((answerE1) => {
        if(answerE1.checked){
        answer = answerE1.id
        }
    })

    return answer
}0

submitBtn.addEventListener("click"), () => {
    const answer = getSelected()

    if(answer) {
        if(answer === data[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < data.length) {
            loadQuiz
        }
        else {
            quiz.innerHTML = `
            
            <h2>You Answered ${score}/${data.legth} Questions Correctly</h2>
            <button onclick="loaction.reload()">Do it Again</button>`
        }
    }       
})