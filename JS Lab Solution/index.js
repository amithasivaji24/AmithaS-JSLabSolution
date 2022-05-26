function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(answer){
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
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionByIndex().text;
        let choices = quiz.getQuestionByIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var elementId = "choice"+i;
            let choiceElement = document.getElementById(elementId);
            choiceElement.innerHTML = choices[i];
            handleOption(i,choices[i]);
        }
        showProgress();
    }
}

function handleOption(i,choice){
        var clickElementId = "btn"+i;
        let clickElement = document.getElementById(clickElementId);
        clickElement.onclick = function(){
            quiz.checkOptionWithAnswer(choice);
            loadQuestions();
        };
}

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
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
    new Question("Javascript is an _______ language?",["Object-oriented","Object-based","Procedural","None of the above"],"Object-oriented"),
    new Question("Which of the following keywords is used to define a variable in Javascript?",["var","let","Both A and B","None of the above"],"Both A and B"),
    new Question("Which of the following methods can be used to display data in some form using Javascript?",["document.write()","console.log()","window.alert()","All of the above"],"All of the above"),
    new Question("How can a datatype be declared to be a constant type?",["constant","const","var","let"],"const"),
    new Question("What keyword is used to check whether a given property is valid or not?",["in","is in","exists","lies"],"in")
];

let quiz = new Quiz(questions);

loadQuestions();