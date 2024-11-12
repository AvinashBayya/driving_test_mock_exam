// script.js
const questions = [
    { question: "What does a red traffic light mean?", options: ["Stop", "Go", "Slow down", "Yield"], answer: "Stop" },
    { question: "What is the maximum speed limit in cities?", options: ["50 km/h", "60 km/h", "40 km/h", "30 km/h"], answer: "50 km/h" },
    { question: "What does a green traffic light mean?", options: ["Stop", "Go", "Slow down", "Yield"], answer: "Go"},

    { question: "What does a yellow traffic light mean?", options: ["Stop", "Go", "Slow down", "Yield"], answer: "Slow down"},
    
    { question: "What should you do when you see a stop sign?", options: ["Stop", "Yield", "Go", "Slow down"], answer: "Stop"},
    
    { question: "What should you do if you see a pedestrian crossing sign?", options: ["Speed up", "Stop", "Be prepared to stop", "Ignore"], answer: "Be prepared to stop"},
    
    { question: "What does a one-way sign indicate?", options: ["You can go both ways", "You can go only one way", "No entry", "Yield"], answer: "You can go only one way"},
    
    { question: "What should you do at a roundabout?", options: ["Speed up", "Yield to traffic already in the roundabout", "Stop", "Go straight through"], answer: "Yield to traffic already in the roundabout"},
    
    { question: "What is the meaning of a no parking sign?", options: ["You can park here", "No stopping at all", "Parking is allowed at certain times", "You cannot park here"], answer: "You cannot park here"},
    
    { question: "What does a give way sign mean?", options: ["Stop", "Go", "Yield", "Ignore"], answer: "Yield"},
    
    { question: "What does a pedestrian crossing signal allow?", options: ["Vehicles to move", "Pedestrians to cross", "Vehicles to stop", "None of the above"], answer: "Pedestrians to cross"},
    { question: "What does a no entry sign mean?", options: ["Entry allowed", "No entry allowed", "Entry allowed at certain times", "None of the above"], answer: "No entry allowed"},

{ question: "What is indicated by a speed limit sign?", options: ["Minimum speed", "Maximum speed", "Recommended speed", "None of the above"], answer: "Maximum speed"},

{ question: "What does a school zone sign indicate?", options: ["School nearby, drive cautiously", "No entry", "Stop immediately", "Speed up"], answer: "School nearby, drive cautiously"},

{ question: "What should you do when you see a flashing red traffic light?", options: ["Speed up", "Stop and proceed when safe", "Go immediately", "Slow down"], answer: "Stop and proceed when safe"},

{ question: "What does a broken white line on the road mean?", options: ["Overtaking allowed", "No overtaking", "Pedestrian crossing", "Stop"], answer: "Overtaking allowed"},

{ question: "What does a solid white line on the road mean?", options: ["Overtaking allowed", "No overtaking", "Pedestrian crossing", "Yield"], answer: "No overtaking"},

{ question: "What should you do at a railroad crossing sign?", options: ["Speed up", "Stop and check for trains", "Go immediately", "Yield"], answer: "Stop and check for trains"},
{ question: "What does a U-turn sign with a red circle and a line through it indicate?", options: ["U-turn allowed", "No U-turn", "Speed up", "Yield"], answer: "No U-turn"},

{ question: "What does a double yellow line on the road signify?", options: ["Overtaking allowed", "No overtaking", "Pedestrian crossing", "Stop"], answer: "No overtaking"},
];

function loadQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);
        
        q.options.forEach(option => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br'));
        });
        
        questionsContainer.appendChild(questionDiv);
    });
}

function submitExam() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    
    document.getElementById('exam-form').style.display = 'none';
    document.getElementById('score').textContent = score;
    
    const resultMessage = document.getElementById('result-message');
    if (score >= 12) {
        resultMessage.textContent = "Congratulations! You have passed the test!";
        resultMessage.className = 'pass';
    } else {
        resultMessage.textContent = "Keep working hard! You have failed the test.";
        resultMessage.className = 'fail';
    }
    document.getElementById('result-container').style.display = 'block';
}

window.onload = loadQuestions;
