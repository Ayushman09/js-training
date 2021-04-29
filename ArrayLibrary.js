questionNo = 1
arrayOfQuestions = []
for(questionNo = 1;questionNo<=5;questionNo++){
    var question = prompt("Which is your choice for Book #"+questionNo)
    arrayOfQuestions.push(question)
}
var question6 = prompt("Which is your choice for Book #6")
arrayOfQuestions.unshift(question6)
arrayOfQuestions.pop()
console.log(arrayOfQuestions)