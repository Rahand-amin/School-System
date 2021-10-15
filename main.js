// Create a Set
const letters = new Set();

// Create Variables



function myfunction() {

    let a = document.getElementById("nusin");
    letters.add(a.value);
    let text = "";
    letters.forEach(function (value) {
        text += value + "<br>";
    })

    document.getElementById("demo").innerHTML = text;

};

function myFunction() {

    let a = document.getElementById("nusin");
    letters.delete(a.value);
    let text = "";
    letters.forEach(function (value) {
        text += value + "<br>";
    })

    document.getElementById("demo").innerHTML = text;

};


function myfunction1() {

    if (confirm("Are you sure, want to clear?")) {
        location.reload();
    }
};

// Add the Variables to the Set



// Display set.size
