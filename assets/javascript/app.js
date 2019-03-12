var start;

var triviaHTML;
var answersHTML;

var counter = 30;

var questions = 
    [ "Which of these U.S. Presidents appeared on the television series Laugh-In?",

    "Colonized in the 16th century, what country took its name from the first name of the king of Spain?", 

    "Long after the same business made the family rich, in 2014, heirs of John D Rockefeller announced plans to stop investing their charity funds in what?", 

    "Despite many movie portrayals, Wikihow says doing what, is rare, not normal and suggest you seek psychological help if you're considering it?", 

    "Considered the world's largest music instrument, the Greatest Stalacpipe Organ plays music exclusively where?",

    "Despite it being in what is now Instabul, over 1,000 miles from Scandinavia, what famous landmark is believed to have once been vandalized by Vikings?", 

    "Which of these is the name of both the Oscar-nominated director of 12 years a Slave and an Oscar-nominated actor dubbed The King of Cool ?", 

    "With its lyric, And no one heard at all/Not even the chair, What Neil Diamond hit reportedly inspired Clint Eastwood's infamous chair stunt at the 2012 RNC?",

    "Hearing that Guiness World Records was going to name him the World's most litigous person, Jonathan Lee Riches responded by what?",

    "When Steve Jobs accused Bill Gates of ripping off Apple, Gates said they'd both stolen from what tech company that developed the mouse?" ];

var answers = [
    ["Lyndon Johnson", "Richard Nixon", "Jimmy Carter", "Gerald Ford"], 
    ["Eduardor","Kevinzuela","The Phillipines","Stuganda"], 
    ["Railroads", "Fossil Fuels", "Diamond Mining", "Steel"], 
    ["Planning a wedding", "Dancing at a wedding", "Stop a wedding", "Officiating a wedding"], 
    ["Under Water", "Under the night sky", "In a jungle", "In a cave"], 
    ["Hagia Sophia","Dome of the Rock","Persepolis","Taj Mahal"], 
    ["Paul Newman", "Steve McQueen", "Rober Mitchum", "Richard Burton"], 
    ["Love on the Rocks","Sweet Caroline","Song Sue Blue","I am...I Said"], 
    ["Thanking them","Suing them","Interviewing them","Funding them"],
    ["Hewlett-Packard","Xerox","Intel","IBM"]];
 
var correctAnswers = [ 
    "b. Richard Nixon",
    "c. The Phillipines", 
    "b. Fossil Fuels", 
    "c. Stop a wedding", 
    "d. In a cave", 
    "a. Hagia Sophia", 
    "b. Steve McQueen", 
    "d. I am...I Said",
    "b. Suing them",
    "b. Xerox"];

var questionCounter = 0;
var selectedAnswer;
var timer;
var wins = 0;
var losses = 0;
var noResponse = 0;

$(document).ready(function() 
{
  
    function startGame() 
    {
        startButton = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Game</a></p>";

        $("#mainArea").append(startButton);
    }
    
    startGame();
    

    $("#mainArea").on("click", ".start-button", function(event)
    {  
        $('.jumbotron').hide(); 
        loadQuestions();
        timerWrapper();
    
    }); 
    
    $("body").on("click", ".answer", function(event)
    {
  
        selectedAnswer = $(this).text();
        
        if(selectedAnswer === correctAnswers[questionCounter])
        {
            clearInterval(timer);
            loadWin();
        }
        else
        {
            clearInterval(timer);
            loadLoss();
        }

    }); 
    
    $("body").on("click", ".restart-button", function(event)
    {   
        restartGame();
    }); 
    
    
});  

    function loadQuestions() 
    {
        
        triviaHTML = 
        "<p class='text-center timer-p'>Time Remaining: <span class='timer'>00:30</span></p><p class='text-center'>" + 
        "<p class='text-center question-p'>" + questions[questionCounter] + "</p>" + 

        "</p><p class='answer'>a. " + answers [questionCounter][0] + 
        "</p><p class='answer'>b. " + answers[questionCounter][1] +
        "</p><p class='answer'>c. " + answers[questionCounter][2] +
        "</p><p class='answer'>d. " + answers[questionCounter][3] + "</p>";
        //loadAnswers();
        $("#mainArea").html(triviaHTML);
        
    }; 

    // function loadAnswers()
    // {
    //     triviaHTML = "<p class='first-answer answer'>A. " + answers[questionCounter][0] + "</p><p class='answer'>B. "+answers[questionCounter][1]+"</p><p class='answer'>C. "+answers[questionCounter][2]+"</p><p class='answer'>D. "+answers[questionCounter][3]+"</p>";
    //     // $("#mainArea").html(triviaHTML);
    // }
    
    function loadWin() 
    {
        wins++;
        
        triviaHTML = //"<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + 
        "<p class='text-center correct-p'>Correct!" +
        "<p class='text-center variable-p'>The answer is: " + correctAnswers[questionCounter] + "</p>" +
        "<img class='center-block img-wrong' src='assets/images/correctanswer.gif'>";
    
        $("#mainArea").html(triviaHTML);
        
        setTimeout(wait, 5000);  
    }
    
    function loadLoss() 
    {
        losses++;
        triviaHTML = //"<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + 
        "<p class='text-center wrong-p'>Wrong!" + 
        "<p class='text-center variable-p'>The correct answer is: " + correctAnswers[questionCounter] + "</p>" +
        "<img class='center-block img-wrong' src='assets/images/wronganswer.gif'>";

        $("#mainArea").html(triviaHTML);

        setTimeout(wait, 5000); 
    }

    function timeout() 
    {
        noResponse++;
        triviaHTML = //"<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + 
        "<p class='text-center timeout-p'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + 
        "<img class='center-block img-wrong' src='assets/images/timeout.gif'>";
        

        $("#mainArea").html(triviaHTML);

        setTimeout(wait, 5000); 
    }
    
    function wait() 
    {
        if (questionCounter < 9) 
        {
            questionCounter++
            loadQuestions();
            counter = 30;
            timerWrapper();
     
        }
        else
        {
            finalScreen();
        }
        //console.log("questionCounter = " + questionCounter);

    }; 
    
    function timerWrapper() 
    {
        timer = setInterval(countDown, 1000);

        function countDown() 
        {
            if (counter === 0) 
            {
                clearInterval(timer);
                timeout();
            }
            if (counter > 0) 
            {
                counter--;
            }

            time = "00:" + counter;
            if (counter < 10)
            {
                time = "00:0" + counter;
            }
            $(".timer").html(time);
        }
    }
    
    function finalScreen() 
    {
        triviaHTML = //"<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + 
        "<p class='text-center gameOver-p'>Game Over!</p>" +
        "<p class='text-center results-p'>Results:</p>" + 
        "<p class='results'>Correct Answers: " + wins + "</p>" + 
        "<p class='results'>Wrong Answers: " + losses + "</p>" + 
        "<p class='results'>Not Answered: " + noResponse + "</p>" + 
        "<p class='text-center restart-button-container'><a class='btn btn-warning btn-md btn-block restart-button' href='#' role='button'>Restart Game!</a></p>";

        $("#mainArea").html(triviaHTML);
    }
    
    function restartGame() 
    {
        questionCounter = 0;
        wins = 0;
        losses = 0;
        noResponse = 0;
        counter = 30;
        loadQuestions();
        timerWrapper();
        //loadAnswers();
    }
    
   
   
    