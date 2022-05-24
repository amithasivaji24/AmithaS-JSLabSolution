function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this. questionIndex = 0;
}

function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex == this.questions.length;
}

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer == choice;
}

function loadQuestions(){
    if(quiz.isEnded()){
        showScore();
    }else{
        showProgress();
    }
}

function handleOption(){

}

function showProgress(){
    let currecntQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question "+currentQuestionNumber+" of "+quiz.questions.length;
}

function showScore(){
    let quizOverHTML = "<h1>Result</h1>";
    quizOverHTML+="<h2>Your score: "+quiz.score+" with percentage: "+calcPercentage(quiz.score,questions.length)+"% </h2>";
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizOverHTML; 
}

function calcPercentage(score, questionLength){
    return(score/questionLength)*100;
}
let questions = [
    new Question("Question1",["op1","op2","op3","op4"],"op1"),
    new Question("Question2",["op1","op2","op3","op4"],"op2"),
    new Question("Question3",["op1","op2","op3","op4"],"op3"),
    new Question("Question4",["op1","op2","op3","op4"],"op4"),
    new Question("Question5",["op1","op2","op3","op4"],"op2"),
]

let quiz = new Quiz(questions);

loadQuestions();