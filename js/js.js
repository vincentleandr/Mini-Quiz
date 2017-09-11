//Define variable to store the questions data
var allQuestions = [];

//All the questions, options, and correct answer. All in array.
allQuestions[0] = {
    question: "Which one of these continent is not part of 'The Known World' in Game of Thrones?",
    options: ["Essos", "Westeros", "Sothoryos", "Mykonos"],
    correct: 3
};
allQuestions[1] = {
    question: "Who has a pet direwolf named 'Summer'?",
    options: ["Arya Stark", "Bran Stark", "Tony Stark", "Robb Stark"],
    correct: 1,
    img: "img/housestark.jpg",
    quote: "When the snows fall and the white winds blow. The lone wolf dies but the pack survives.",
    who: "Eddard Stark"
};
allQuestions[2] = {
    question: "Who is the actor that plays Tyrion Lannister?",
    options: ["Peter Pan", "Peter Parker", "Peter Dinklage", "Peter Jackson"],
    correct: 2,
    img: "img/houselannister.jpg",
    quote: "Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.",
    who: "Tyrion Lannister"
};
allQuestions[3] = {
    question: "Which one of these characters has never been in bed together with Dany? :(",
    options: ["Jorah Mormont", "Daario Naharis", "Jon Snow", "Khal Drogo"],
    correct: 0,
    img: "img/housetargaryen.jpg",
    quote: "I command you to find the cure, wherever it is in this world. I command you to heal yourself and then return to me. When I take the Seven Kingdoms, I need you by my side.",
    who: "Daenerys Targaryen"
};
allQuestions[4] = {
    question: "One of these lines is not from Davos. Which one is that?",
    options: ["This is Jon Snow", "Fermented Crab", "Fewer", "Valar Morghulis"],
    correct: 3,
    img: "img/housebaratheon.jpg",
    quote: "The real war isn't between a few squabbling houses. It's between the living and the dead. And make no mistake, my lady, the dead are coming.",
    who: "Davos Seaworth"
};
allQuestions[5] = {
    question: "'Chaos is a ladder' is a famous phrase from?",
    options: ["Ringfinger", "Indexfinger", "Littlefinger", "Thumb"],
    correct: 2,
    img: "img/council.jpg",
    quote: "Everybody dies sooner or later. Don't worry about your death. Worry about your life. Take charge of your life for as long as it lasts.",
    who: "Petyr Baelish"
};
allQuestions[6] = {
    question: "Who is the Lord Commander of the Night's Watch before Jon Snow?",
    options: ["Jeor Mormont", "Alliser Thorne", "Olly", "Eddison Tollett"],
    correct: 1,
    img: "img/nightswatch.jpg",
    quote: "Night gathers and now my watch begins.",
    who: "The Night's Watch"
};
allQuestions[7] = {
    question: "What is the real name of the Hound?",
    options: ["Gregor Clegane", "Jaqen H'ghar", "Podrick Payne", "Sandor Clegane"],
    correct: 3,
    img: "img/warriors.jpg",
    quote: "Of course you are. You're almost there and you're afraid you won't make it. The closer you get, the worse the fear gets. No point in trying to hide behind that face. I know fear when I see it. Seen it a lot.",
    who: "The Hound"
};
allQuestions[8] = {
    question: "Who is Meera and Jojen's father?",
    options: ["Rhaegar", "Darth Vader", "Hodor", "Howland"],
    correct: 3,
    img: "img/northpeople.jpg",
    quote: "Some people will always need help. That doesn't mean they're not worth helping",
    who: "Meera Reed"
};
allQuestions[9] = {
    question: "Which one of these free folk really want to have giant babies?",
    options: ["Tormund", "Mance Rayder", "Wun-Wun", "Ygritte"],
    correct: 0,
    img: "img/thefreefolk.jpg",
    quote: "You're mine. Mine, as I'm yours. And if we die, we die. All men must die, Jon Snow. But first we'll live.",
    who: "Ygritte"
};



//First question
document.getElementById("question").textContent = allQuestions[0].question;

document.getElementById("option0").textContent = allQuestions[0].options[0];

document.getElementById("option1").textContent = allQuestions[0].options[1];

document.getElementById("option2").textContent = allQuestions[0].options[2];

document.getElementById("option3").textContent = allQuestions[0].options[3];

//Variable to store the score
var score = 0;

//Index of the questions
var questionNo = 0;

//When next button is clicked.
$("#next").click(function() {
    
    //Validation
    if(!$("form input[name=answer]:checked").val()) {
        alert("Choose one of the answer!");
        return false;
    }
    
    //Check the answer. If correct, add value to score.
    if($("form input[name=answer]:checked").val() == allQuestions[questionNo].correct) {
        score++;
    }
    
    //Check if it's the last question, if so, then display the score.
    if(questionNo == (allQuestions.length - 1)) {
        document.getElementById("options").style.display = "none";
        document.getElementById("quotecontainer").style.display = "none";
        
        document.getElementById("headerimg").src = "img/logo_got.png";
        
        document.getElementById("question").textContent = "Score : " + score + "/10";
        
        if(score == 10) {
            document.getElementById("sentence").textContent = "You're an amazing die hard fan of Game of Thrones!";
            document.getElementById("gif").src = "img/tyrion.gif";
        } else if(score <= 9 && score >= 6) {
            document.getElementById("sentence").textContent = "You got most of the questions correct! Cheers!";
            document.getElementById("gif").src = "img/littlefinger.gif";
        } else if(score <= 5 && score >= 1) {
            document.getElementById("sentence").textContent = "Disappointing! You definitely can do better than that!";
            document.getElementById("gif").src = "img/margaery.gif";
        } else {
            document.getElementById("sentence").textContent = "Not a single correct one?! Look, you made Sam sad!";
            document.getElementById("gif").src = "img/sadsam.gif";
        }
        
        //Play again button
        document.getElementById("button").innerHTML = "<a href='javascript:window.location.reload(true)' class='btn' name='next' id='next'>Play Again</a>";
    }
    
    //Add value to the question's index
    questionNo++;
    
    //Generate the next question.
    document.getElementById("headerimg").src = allQuestions[questionNo].img;
    
    document.getElementById("quote").textContent = allQuestions[questionNo].quote;
    
    document.getElementById("whosaidit").textContent = allQuestions[questionNo].who;
    
    document.getElementById("question").textContent = allQuestions[questionNo].question;
    
    document.getElementById("option0").textContent = allQuestions[questionNo].options[0];

    document.getElementById("option1").textContent = allQuestions[questionNo].options[1];

    document.getElementById("option2").textContent = allQuestions[questionNo].options[2];

    document.getElementById("option3").textContent = allQuestions[questionNo].options[3];
    
    //Reset selection of radio button when going to the next question.
    $("form input[name=answer]").prop("checked", false);
    
});
