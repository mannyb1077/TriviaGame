
var timer = false;
var intervalID;
var time = 5;
var enabled = 0;

var questionObject =
{
     question1:
      {
        q1: "Question1",
        a1: "Answer1",
        enabled: false,
        asked: 0,
        
      },
      question2:
      {
        q2: "Question2",
        a2: "Answer2",
        enabled: false,
        asked: 0,
      },
      question3:
      {
        q3: "Question3",
        a3: "Answer3",
        enabled: false,
        asked: 0,
        
      },
      question4:
      {
        q4: "Question4",
        a4: "Answer4",
        enabled: false,
        asked: 0,
        
      },
      question5:
      {
        q5: "Question5",
        a5: "Answer5",
        enabled: false,
        asked: 0,
        
      },
    //   question2: 
    //   [{
    //     type: "home",
    //     number: "212 555-1234"
    //    }, 
    //    {
    //     type: "fax",
    //     number: "646 555-4567"
    //    }]
    };
// var questions = ["Question 1", "Question 2","Question 3","Question 4","Question 5"];
// var answers = ["Answer 1","Answer 2","Correct Answer q1","Answer 4","Answer 5"];
var randomQuestion = [];
var answer = [];
var answeredCorrect = [];
var answeredIncorrect = [];
var allQuestions = [];


//TEST




function triviaQuestions(question, answer, enabled, asked) 
{
    this.question = question;
    this.answer = answer;
    this.enabled = enabled;
    this.asked = asked;
}


$("#button-clear").click(function () 
{
    var questionButton = $('<button>Test</button>').click(function () 
    {
        alert('hi');
    });

    $("#button-answer1").css('display', 'table-row'); // NB: changed

    var tr = $('<tr>').insertBefore('#addNodeTable tr:last');
    var td = $('<td>').append(questionButton).appendTo(tr);
   
});

$("#button-2").click(function () 
{
    console.log(questionObject.question1.q1);
    console.log(questionObject.question1.a1);
    console.log(questionObject.question1.enabled);
    console.log(questionObject.question1.asked);
    questionObject.question1.asked++
    questionObject.question1.enabled = true;

});

$("#button-3").click(function () 
{
    console.log(questionObject.question2.q2);
    console.log(questionObject.question2.a2);
    console.log(questionObject.question2.enabled);
    console.log(questionObject.question2.asked);
    questionObject.question2.asked++
    questionObject.question2.enabled = true;
});


// document.getElementById("#button-answer3").style.visibility=hidden;
// document.getElementById(".buttonAnswers").innerHTML="You got " + correct.toExponential; 

//End of Test



window.onload = function() 
{
    startTimer();
    loadNewQuestion();
    loadAnswers();
};




function startTimer()
{
    if (!timer) 
    {
        intervalId = setInterval(count, 1000);
        timer = true; 
    }
    
}

function resetTimer()
{
    time = 5;
    clearInterval(intervalID); 
    timer = true;
  
    $("#button-timer").text("00:" + time);
  
}

function stopTimer()
{
    clearInterval(intervalId);
    timer = false;
}

function timerExpired()
{
    time = 5;
    loadNewQuestion();
    // console.log("This is the length of the Questions" + questions.length)
    // console.log("This is All Questions " + allQuestions)

    if (allQuestions.length == questionObject.length)
    {
        stopTimer();
        timer = false;
        alert("Game Over");
        allQuestions = [];
    }
    else
    {
        alert("Timer Expired, Waiting for New Question")
    }
    

}


function loadNewQuestion()
{
    var randomNum
    for (i = 0; i > questionObject.length; i++)
    {
      randomNum = i;  
      
    }
    console.log(randomNum);


    randomQuestion = questionObject[randomNum]
    $("#button-question").text(randomQuestion);

    allQuestions.push(randomQuestion);
   
    // var randomNum
    // randomNum =Math.floor(Math.random()* questions.length);
    // randomQuestion = questions[randomNum]
    // $("#button-question").text(randomQuestion);

    // allQuestions.push(randomQuestion);
    
   
    
}

function loadAnswers()
{
    
    // var answer1 =Math.floor(Math.random()* answerObject.length);
    // var answer2 =Math.floor(Math.random()* answerObject.length);
    // var answer3 =Math.floor(Math.random()* answerObject.length);
    // var answer4 =Math.floor(Math.random()* answerObject.length);
    // var answer5 =Math.floor(Math.random()* answerObject.length);
    
    // randomAnswer1 =answerObject[answer1];
    // randomAnswer2 =answerObject[answer2];
    // randomAnswer3 =answerObject[answer3];
    // randomAnswer4 =answerObject[answer4];
    // randomAnswer5 =answerObject[answer5];
    

    // $("#button-answer1").text(randomAnswer1);
    // $("#button-answer2").text(randomAnswer2);
    // $("#button-answer3").text(randomAnswer3);
    // $("#button-answer4").text(randomAnswer4);
    // $("#button-answer5").text(randomAnswer5);
}

function questionAnsweredCorrectly()
{
    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
    var question4 = document.trivia.question4.value;
    var question5 = document.trivia.question5.value;

    var correct = 0;

    if ( question1 == "q1AnswerCorrect")
    {
        correct ++;
    }
    if ( question2 == "q2AnswerCorrect")
    {
        correct ++;
    }
    if ( question3 == "q3AnswerCorrect")
    {
        correct ++;
    }
    if ( question4 == "q4AnswerCorrect")
    {
        correct ++;
    }
    if ( question5 == "q5AnswerCorrect")
    {
        correct ++;
    }

    document.getElementById("btnanswer").style.visibility=visible;
    document.getElementById("btnCorrect").innerHTML="You got " + correct.toExponential; 

}

function questionAnsweredIncorrectly ()
{
    startTimer();

}

function submit()
{

}

function count() 
{
    time--;
  
    var converted = timeConverter(time);
    // console.log("Converted " + converted);
  
    $("#button-timer").text(converted);

    if (time < 1)
    {
        timerExpired();

    }
}
    

function timeConverter(t) 
{
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) 
    {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) 
    {
      minutes = "00";
    }
    else if (minutes < 10) 
    {
      minutes = "0" + minutes;
    }
    
    return minutes + ":" + seconds;
    

}



// if (on.click == answer[4])//correct answer
// if (on.click !== correctanswer)//You lose

function getTime()
{
    const date = new Date();
    console.log(date);

    return date.getHours() + ";" + date.getMinutes();
}
// const time = getTime();
// console.log(time);


                //Create new Buttons///////
// var tRow = $("<tr>");
// // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
//   var titleData = $("<td>").text(response.Title);
//   var yearData = $("<td>").text(response.Year);
//   var actorsData = $("<td>").text(response.Actors);
// // Append the td elements to the new table row
// tRow.append(titleData, yearData, actorsData);
// // Append the table row to the tbody element
// $("tbody").append(tRow);
// });