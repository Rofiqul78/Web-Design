
//greetings by greetByTime

function greetByTime() {

    let currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      alert("Good morning!");

    } else if (currentHour >= 12 && currentHour < 18) {
      alert("Good afternoon!");

    } else {
      alert("Good evening!");
    }
}

greetByTime();



//forloop

let outputElement = document.getElementById('output');

for (let i = 0; i < 5; i++) {
  outputElement.innerHTML += i + "<br><br><br>";
}

