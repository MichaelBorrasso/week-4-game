// This code is for reference only, to demonstrate how how this game runs, this code has been modified, but the program is not original to me.
// I found this code on GitHub, I will not do this again, I am not submitting this as my own Worker.
$(document).ready(function () {
var cpuScore = Math.floor(Math.random() * 101 + 19);
    $("#cpuScore").text(cpuScore);
    // console.log(cpuScore);
    // Random number to start game
    var blueGem = Math.floor(Math.random() * 11 + 1)
    var redGem = Math.floor(Math.random() * 11 + 1)
    var blackGem = Math.floor(Math.random() * 11 + 1)
    var greenGem = Math.floor(Math.random() * 11 + 1)
    // Random Numbers assigned for each Gem
    // console.log(blackGem);

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    // Reset
    function reset() {
        cpuScore = Math.floor(Math.random() * 101 + 19);
        $("#cpuScore").html(cpuScore);
        var blueGem = Math.floor(Math.random() * 11 + 1);
        var redGem = Math.floor(Math.random() * 11 + 1);
        var blackGem = Math.floor(Math.random() * 11 + 1);
        var greenGem = Math.floor(Math.random() * 11 + 1);
        userScore=0
        $("#userScore").text(userScore);
    }
    function Winner() {
    alert("You Win!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You Lost!");
        losses++;
        $("#numberLosses").text(losses);
        reset()
    }


    $("#blueGem").on("click", function () {
        console.log("i got clicked");
        userScore = userScore + blueGem;

        $("#userScore").text(userScore);
       
        // win/lose conditions

        if (userScore == cpuScore) {
            Winner();
        }
        else if (userScore > cpuScore) {
            loser();
        }
    })
    $("#redGem").on("click", function () {
        userScore = userScore + redGem;
        $("#userScore").text(userScore);
        if (userScore == cpuScore) {
            Winner();
        }
        else if (userScore > cpuScore) {
            loser();
        }
    })
    $("#blackGem").on("click", function () {
        userScore = userScore + blackGem;
        // console.log("userScore" + blackGem);
        $("#userScore").text(userScore)
        if (userScore == cpuScore) {
            winner();
        }
        else if (userScore > cpuScore) {
            loser();
        }
    })
    $("#greenGem").on("click", function () {
        // console.log("I got clicked!");
        userScore = userScore + greenGem;
        $("#userScore").text(userScore)
        if (userScore == cpuScore) {
            Winner();
        }
        else if (userScore > cpuScore) {
            loser();
        }
    });
});