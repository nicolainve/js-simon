var numbers = 5;

var randomNumbers = [];

for (var i = 0; i < numbers; i++) {
    var randomNumber = getRandomNumbers();

    randomNumbers.push(randomNumber);
}

alert(randomNumbers);

var userNumbers = [];

setTimeout(function() {
    for (var i = 0; i < numbers; i++) {
        var userNumber = parseInt(prompt('Inserisci'));
        
        if (randomNumbers.includes(userNumber)) {
            userNumbers.push(userNumber);
        }

    }
    
    console.log(userNumbers);
    console.log(userNumbers.length);

}, 3000);



function getRandomNumbers() {
    return Math.floor(Math.random() * 100) + 1;
}