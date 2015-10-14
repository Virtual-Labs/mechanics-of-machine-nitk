// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation",
        "main":    "<p></p>",
        "results": "<p style='font-size:20px'><a href='index.html'><u>Click here</u></a> to go to simulation</p>",
        "level1":  "Good! You can move on to the simulator right away",
        "level2":  "Make sure to get that one right the next time",
        "level3":  "You did well, but there is still scope of improvement. We suggest another reading of basics before going to simulator",
        "level4":  "May be it is better you improve your understanding a little more before moving on to the simulator",
        "level5":  "We think you should go through the theory once more before using the simulator" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "For l/r ratio for an IC engine with 10cm crankshaft and 30cm connecting rod is?",
            "a": [
                {"option": "3",      "correct": true},
                {"option": "1/3",     "correct": false},
                {"option": "4",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 3</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For a given input crank angle how many positions of the slider are possible for fixed link lengths?",
            "a": [
                {"option": "Only 1",               "correct": true},
                {"option": "At least 2",   "correct": false},
                {"option": "More than 2",      "correct": false},
                {"option": "Depends on link lengths",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Only 1</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How many revolute joints does a slider crank mechanism have?",
            "a": [
                {"option": "3 ",           "correct": true},
                {"option": "4",                  "correct": false},
                {"option": "1",  "correct": false},
                {"option": "0",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 3 </p>" // no comma here
        },
        { // Question 4
            "q": "How many prismatic joints does a slider crank mechanism have",
            "a": [
                {"option": "1",    "correct": true},
                {"option": "0",     "correct": false},
                {"option": "3",      "correct": false},
              {"option": "4",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 1 </p>"  // no comma here
        },
        { // Question 5 
            "q": "At which of the following crank angle positions is the slider at its extreme position",
            "a": [
                {"option": "180<sup>o</sup>",    "correct": true},
                {"option": "30<sup>o</sup>",     "correct": false},
		 {"option": "90<sup>o</sup>",  "correct": false},
                {"option": "120<sup>o</sup>",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 180<sup>o</sup> </p>"  // no comma here
        }   // no comma here
    ]
};
