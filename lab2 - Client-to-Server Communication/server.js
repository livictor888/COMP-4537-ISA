const express = require('express');

const app = express(); 
app.use(express.json()); // read JSON BODY
app.use(express.urlencoded({ extended: true })); // read URL encoded body

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/chatbot', (req, res) => {
    const message = req.body.message;
    const number = message.match(/\d+/);
    console.log("HERE")
    console.log("here is number" + number)
    if (number) {
        fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
            res.json({
                text: data
            });
        }).catch(error => {
            res.json({
                text: "Sorry, I couldn't find any information about that number."
            });
        });
    } else {
        res.json({
            text: "I'm sorry, I didn't understand your question. Please provide a number for me to give you information about."
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

