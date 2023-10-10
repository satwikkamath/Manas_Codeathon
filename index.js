const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://satwikroopa:Roopa70263@fruitdb.8sxipgz.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
    level1: Number,
    level2: Number,
    level3: Number
})
const GameUser = mongoose.model("gameUser", userSchema);
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/motivation", function (req, res) {
    res.render("motivation")
})

app.get("/", function (req, res) {
    res.render("homePage");
})

app.post("/checkLoginInfo", function (req, res) {
    receivedName = req.body.name;
    receivedPassword = req.body.password;

    GameUser.findOne({ name: receivedName }).then(function (data) {
        if (data) {
            if (receivedPassword == data.password)
                res.json({ passwordCorrect: 1, found: 1 });
            else
                res.json({ passwordCorrect: 0, found: 1 });
        }
        else {
            res.json({ passwordCorrect: 0, found: 0 });
        }
    })
})

app.post("/loginAfterCheck", function (req, res) {
    userName = req.body.userName;
    res.render("userMainPage", { userName: userName });
})

app.post("/checkSignUpInfo", function (req, res) {
    let receivedName = req.body.name;
    let receivedPswd = req.body.password;
    let receivedAge = req.body.userAge;
    console.log(receivedAge)
    GameUser.findOne({ name: receivedName }).then(function (data) {
        if (data) {
            res.json({ msg: 1 });
        }
        else {
            const user = new GameUser({
                name: receivedName,

                password: receivedPswd,
                age: receivedAge
            })
            user.save();
            res.json({ msg: 0 });
        }
    })
})

app.post("/level", function (req, res) {
    userName = req.body.userName;
    level = req.body.level;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: 0, numbers: [3, 6, 5], formPost: "second", options: [{ option: 355, value: 0 }, { option: 368, value: 0 }, { option: 362, value: 0 }, { option: 365, value: 1 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: 0, numbers: [2, 4, 7, 3, 9, 2], formPost: "second", options: [{ option: 247492, value: 0 }, { option: 247392, value: 1 }, { option: 247385, value: 0 }, { option: 247393, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: 0, numbers: [5, 2, 3, 9, 1, 8, 7, 4, 6], formPost: "second", options: [{ option: 523918746, value: 1 }, { option: 523918745, value: 0 }, { option: 523918749, value: 0 }, { option: 523918744, value: 0 }] });
})

app.post("/second", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;

    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [4, 6, 9], formPost: "third", options: [{ option: 466, value: 0 }, { option: 468, value: 0 }, { option: 469, value: 1 }, { option: 467, value: 0 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [3, 5, 4, 1, 7, 8], formPost: "third", options: [{ option: 354178, value: 1 }, { option: 354177, value: 0 }, { option: 354157, value: 0 }, { option: 354158, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [1, 4, 2, 6, 9, 7, 3, 5, 8], formPost: "third", options: [{ option: 142697357, value: 1 }, { option: 142697358, value: 0 }, { option: 142697368, value: 0 }, { option: 142697369, value: 0 }] });
})

app.post("/third", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [4, 2, 8], formPost: "fourth", options: [{ option: 429, value: 0 }, { option: 426, value: 0 }, { option: 427, value: 0 }, { option: 428, value: 1 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [5, 1, 3, 7, 8, 6], formPost: "fourth", options: [{ option: 513784, value: 0 }, { option: 513785, value: 0 }, { option: 513786, value: 1 }, { option: 513787, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [7, 9, 5, 3, 5, 2, 6, 9, 4], formPost: "fourth", options: [{ option: 795352683, value: 0 }, { option: 795352694, value: 1 }, { option: 795352692, value: 0 }, { option: 795352684, value: 0 }] });
})

app.post("/fourth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [9, 4, 2], formPost: "fifth", options: [{ option: 942, value: 1 }, { option: 943, value: 0 }, { option: 944, value: 0 }, { option: 945, value: 0 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [2, 4, 7, 3, 9, 2], formPost: "fifth", options: [{ option: 247492, value: 0 }, { option: 247392, value: 1 }, { option: 247385, value: 0 }, { option: 247393, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [4, 8, 1, 9, 6, 4, 5, 2, 5], formPost: "fifth", options: [{ option: 481964525, value: 1 }, { option: 481964515, value: 0 }, { option: 481964526, value: 0 }, { option: 481964517, value: 0 }] });
})

app.post("/fifth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [5, 4, 1], formPost: "sixth", options: [{ option: 540, value: 0 }, { option: 541, value: 1 }, { option: 542, value: 0 }, { option: 543, value: 0 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [4, 9, 1, 7, 8, 8], formPost: "sixth", options: [{ option: 491785, value: 0 }, { option: 491786, value: 1 }, { option: 491787, value: 0 }, { option: 491788, value: 1 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [2, 1, 4, 5, 2, 6, 5, 2, 1], formPost: "sixth", options: [{ option: 214526520, value: 0 }, { option: 214526519, value: 0 }, { option: 214526518, value: 0 }, { option: 214526521, value: 1 }] });
})

app.post("/sixth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [4, 0, 1], formPost: "seventh", options: [{ option: 401, value: 1 }, { option: 404, value: 0 }, { option: 406, value: 0 }, { option: 408, value: 1 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [8, 1, 7, 3, 4, 5], formPost: "seventh", options: [{ option: 817342, value: 0 }, { option: 817345, value: 1 }, { option: 817343, value: 0 }, { option: 817344, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [6, 4, 4, 0, 6, 2, 7, 9, 9], formPost: "seventh", options: [{ option: 644062798, value: 0 }, { option: 644062799, value: 1 }, { option: 644062789, value: 0 }, { option: 644062788, value: 0 }] });
})

app.post("/seventh", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [9, 1, 1], formPost: "eigth", options: [{ option: 901, value: 0 }, { option: 912, value: 0 }, { option: 913, value: 0 }, { option: 911, value: 1 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [3, 1, 8, 8, 9, 1], formPost: "eigth", options: [{ option: 318889, value: 0 }, { option: 318893, value: 0 }, { option: 318891, value: 1 }, { option: 318890, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [4, 4, 6, 5, 8, 4, 1, 9, 6], formPost: "eigth", options: [{ option: 446584199, value: 0 }, { option: 446584198, value: 0 }, { option: 446584196, value: 1 }, { option: 446584197, value: 0 }] });
})

app.post("/eigth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [8, 7, 1], formPost: "ninth", options: [{ option: 871, value: 1 }, { option: 872, value: 0 }, { option: 873, value: 0 }, { option: 874, value: 0 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [7, 4, 1, 4, 5, 3], formPost: "ninth", options: [{ option: 741453, value: 1 }, { option: 741450, value: 0 }, { option: 741451, value: 0 }, { option: 741452, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [8, 4, 8, 5, 2, 4, 0, 8, 8], formPost: "ninth", options: [{ option: 848524088, value: 1 }, { option: 848524087, value: 0 }, { option: 848524084, value: 0 }, { option: 848524086, value: 0 }] });
})

app.post("/ninth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [6, 3, 0], formPost: "tenth", options: [{ option: 631, value: 0 }, { option: 632, value: 0 }, { option: 633, value: 0 }, { option: 630, value: 1 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [2, 8, 5, 4, 0, 4], formPost: "tenth", options: [{ option: 285404, value: 1 }, { option: 285404, value: 0 }, { option: 285404, value: 0 }, { option: 285404, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [3, 6, 3, 3, 4, 6, 8, 9, 7], formPost: "tenth", options: [{ option: 363346895, value: 0 }, { option: 363346894, value: 0 }, { option: 363346897, value: 1 }, { option: 363346896, value: 0 }] });
})

app.post("/tenth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: score, numbers: [1, 8, 4], formPost: "end", options: [{ option: 143, value: 0 }, { option: 184, value: 1 }, { option: 185, value: 0 }, { option: 186, value: 0 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: score, numbers: [2, 4, 7, 3, 9, 2], formPost: "end", options: [{ option: 247492, value: 0 }, { option: 247392, value: 1 }, { option: 247385, value: 0 }, { option: 247393, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: score, numbers: [7, 9, 5, 3, 5, 2, 6, 9, 4], formPost: "end", options: [{ option: 795352683, value: 0 }, { option: 795352694, value: 1 }, { option: 795352692, value: 0 }, { option: 795352684, value: 0 }] });
})

app.post("/end", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;
    level = req.body.level;
    let performance;

    if (ans == "1")
        score++;
    if (score == 10)
        performance = "Excellent"
    else
        if (score >= 7)
            performance = "Good"
        else
            if (score >= 4)
                performance = "Average"
            else
                performance = "Below Average"
    res.render("end", { score: score, performance: performance, userName: userName })
    if (level == "1") {
        GameUser.findOne({ name: userName }).then(function (data) {
            data.level1 = score;
            data.save();
        })
    }
    else
        if (level == "2") {
            GameUser.findOne({ name: userName }).then(function (data) {
                data.level2 = score;
                data.save();
            })
        }
        else {
            GameUser.findOne({ name: userName }).then(function (data) {
                data.level3 = score;
                data.save();
            })
        }


})

app.post("/reset", function (req, res) {
    let userName = req.body.userName;
    let level = req.body.level;

    if (level == "1")
        res.render("playground", { level: 1, userName: userName, score: 0, numbers: [3, 6, 5], formPost: "second", options: [{ option: 355, value: 0 }, { option: 368, value: 0 }, { option: 362, value: 0 }, { option: 365, value: 1 }] });
    else
        if (level == "2")
            res.render("playground", { level: 2, userName: userName, score: 0, numbers: [2, 4, 7, 3, 9, 2], formPost: "second", options: [{ option: 247492, value: 0 }, { option: 247392, value: 1 }, { option: 247385, value: 0 }, { option: 247393, value: 0 }] });
        else
            if (level == "3")
                res.render("playground", { level: 3, userName: userName, score: 0, numbers: [5, 2, 3, 9, 1, 8, 7, 4, 6], formPost: "second", options: [{ option: 523918746, value: 1 }, { option: 523918745, value: 0 }, { option: 523918749, value: 0 }, { option: 523918744, value: 0 }] });
})

app.post("/exit", function (req, res) {
    userName = req.body.userName;

    res.render("userMainPage", { userName: userName });

})

app.get("/leaderboard", function (req, res) {
    GameUser.find().then(function (data) {
        // data.sort((a, b) => {
        //     // Compare the "level1" property of each object
        //     return a.level1 - b.level1;
        //   });

        res.render("leaderboard", { users: data });
    })
})

app.post("/personal", function (req, res) {
    let userName = req.body.userName;

    GameUser.findOne({ name: userName }).then(function (data) {

        res.render("personal", { s1: data.level1, s2: data.level2, s3: data.level3 })
    })
})

app.listen(3000, function () {
    console.log("Running");
})