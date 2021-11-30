/*********************************************************************
HELPFUL STUFF
use the trivial api (https://opentdb.com/api_config.php)
see excalidraw for the layout.  https://excalidraw.com/#room=1fffb6c3a9a32e4c7250,TTaMcety1kzuBeq0MLdyKQ
How to do a dropdown: https://www.w3schools.com/howto/howto_js_dropdown.asp
***************************************************************************/

/*********************************************************************
PLAN - WHAT WE WILL DELIVER (the final delivery)
we're producing a trivia quiz game that will let the user 
choose a category and difficult level and then will start the game 
- we will then display X questions in true/false format
- when the user has answered, they will click the 'finished' buttom
- we will compute their score and tell them their result
 they can play as many times as they want.
  - when they press 'submit score', we will scroll them back up to the top,
  display their scores, and allow them to play again 
  (so the 'start' button will rename to 'play again')
 
 if we have time, we will do a score table, where they can track 
 how they are scoring over multple games
-----------------------------------------------------------------------------
HOW WE WILL DELIVER - What goes into each Sprint
-----------------------------------------------------------------------------
    DONE - (very early - add in the html elements, with ids - but most/all will be display only)
-----------------------------------------------------------------------------
   SCREEN - TOP PART
    (earlier) don't accept any user input - hardcode to:
                questions=1, category=animals, difficulty=easy, type=true/false, default encoding)
    https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean)
    (earlier) - leave 'start button' as-is - don't bother switching to 'replay'
    DONE (earlier) - set category/difficulty defaults onscreen - user can change, but can't "unset"
    Keep NumQuestions=2; Type = true/false; encoding = default encoding)
    SCREEN - BOTTON PART
    (earlier) - start with ONE question: 
-----------------------------------------------------------------------------
    (middle) - set default category to animals, and default difficulty to 'easy',
     but allow user to select - IMPLEMENT dropdowns now
    (middle) [- compute score when user clicks' submit' and display result onscreen 
-----------------------------------------------------------------------------
    (later - remove defaults for category and difficulty and instead set them 
                initially to 'choose a category/diffculty)
    (later - allow user to choose how many questions they want to answer)
    (later - allow user to choose multiple choice vs true/false options)
    (later - keep track of the score accross games, and display a 'last score' and running total)
**************************************************************/


//  ****************************************************
//  ************   GLOBALS  and CONSTANTS **************
//  ****************************************************
DEBUG = true;
MAX_QUESTIONS = 10;

//create the blank array of Q&A objects here for q&A
let qAndAObj = {};
let allQuestionsArray = [];
/*let qAndAObj = {
          category : "",
          correct_answer : "",
          difficulty : "",
          incorrect_answers : [""]
       };
let allQuestionsArray = [qAndAObj, qAndAObj, qAndAObj];
myData.results[0].category = "Animals";
myData.results[0].correct_answer = "True";   // note: capital T
myData.results[0].difficulty = "easy";
myData.results[0].incorrect_answers[0] = "False"; 
myData.results[0].question = "The internet browser Firefox is named after the Red Panda."
myData.results[0].type = "boolean";
     */


//  ***************************************************** 
//  ************   FUNCTION DECLARATIONS  ***************
//  *****************************************************

//short print function so we can easily switch where output goes, or silence it
function prt(itemToPrint){
    if (DEBUG) console.log(itemToPrint);
}


//async function getTriviaQandAfromAPI (qNum, qCategory, qDifficulty, qType) { 
async function getTriviaQandAfromAPI () { 
    // (earlier - just retrieve one question, based on hardcoded values
    //            number of questions=1, category=animals, difficulty=easy, type=true/false, ALWAYS default encoding)
    
    //apiText = `https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=boolean&encode=base64`;

    apiText = `https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=boolean`;

    const myResponse = await fetch(apiText);

    //prt(myResponse);

    const myData = await myResponse.json();
    prt(myData);
    
    /* structure for the first question and answer (of type true/false) is: 
     myData.results[0].category = "Animals";
     myData.results[0].correct_answer = "True";   // note: capital T
     myData.results[0].difficulty = "easy";
     myData.results[0].incorrect_answers[0] = "False"; 
     myData.results[0].question = "The internet browser Firefox is named after the Red Panda."
     myData.results[0].type = "boolean";
    */
    prt(" Line 117 inside getTriviaQandAfromAPI: " + myData.results[0].question);
    
    //(next steps - update this function to parses the api data into 
    // maybe an array or an array of objects, with each object being one question
    return myData;
}

function parseQandAResponseFromAPI(myAPIResponse){

    ///fill an array of objects, one object per q & a
    return true; //temporarily return true - need to return array of objects
}




async function startTriviaGame() {
    prt("DEBUG line 134: Start Game Button was clicked.");

    
    //call the api to get the questions and answers 
    //let questionNum = 1; // ie start with only retrieving one question and answer pair
    //let questionCategory = 27; //27 is Animals
    //let questionDifficulty = "Easy";
    //let qType =  "boolean"; //boolean means true/false q&a rather than multiple choice
    let myAPIDataObj = await getTriviaQandAfromAPI();

    prt(`LINE 144 in startTrivia Game 1: about to print the returned api response object`);
    prt(myAPIDataObj);

    prt("in startTrivia Game 2, is results[0] still there?: " + myAPIDataObj.results[0].question);

    // TEMP - can access question via:
    // myAPIResponseObj.results[0].question = "The internet browser Firefox is named after the Red Panda."

    //(next steps - update this function to parses the api data into 
    // maybe an array or an array of objects, with each object being one question
    //let myParsedQandAObject = parseQandAResponseFromAPI(myAPIResponseObj);
    
    updateTriviaQuestionOne(myAPIDataObj.results[0].question);
}

function submitAnswersButtonFunc() {
    prt("DEBUG: Submit Answers Button was clicked.");
}

function updateTriviaQuestionOne(questionText) {
    prt("2: "+ triviaQuestionOne.innerText);
    prt("2b: "+ questionText);

    triviaQuestionOne.innerText = `${questionText}`; //e: may need to update this with our question data array/properties for this to work

    prt("3: "+ triviaQuestionOne.innerText);
}
/*
function updateTriviaQuestionOne() {
    prt("2: "+ triviaQuestionOne.innerText);
    prt("2b: "+ myAPIResponseObj.results[0].question);
    triviaQuestionOne.innerText = `${myAPIResponseObj.results[0].question}`; //e: may need to update this with our question data array/properties for this to work
    prt("3: "+ triviaQuestionOne.innerText);
}*/


//  ************************************************** 
//  ************ MAIN CODE FLOW ***************/
//  **************************************************


let triviaQuestionOne = document.getElementById("q1-heading");
prt("1: "+ triviaQuestionOne.innerText);

let startGameButton = document.getElementById("run-game-button");

startGameButton.addEventListener("click", startTriviaGame);

let submitAnswersButton = document.getElementById("submit-answers-button");

submitAnswersButton.addEventListener("click", submitAnswersButtonFunc);
prt("4: "+ triviaQuestionOne.innerText);
