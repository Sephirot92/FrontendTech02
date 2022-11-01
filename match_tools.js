function fundametalMath(expression, numberOne, numberTwo) {
    var firstNumber = parseFloat(numberOne);
    var secondNumber = parseFloat(numberTwo);
    if(expression === "dodawanie" || expression === "Dodawanie" || expression === "+") {
        return firstNumber + secondNumber;
    } else if (expression === "odejmowanie" || expression === "Odejmowanie" || expression === "-") {
        return firstNumber - secondNumber;
    } else if (expression === "mnożenie" || expression === "Mnożenie" || expression === "*") {
        return firstNumber * secondNumber;
    } else if (expression === "dzielenie" || expression === "Dzielenie" || expression === "/") {
        return firstNumber / secondNumber;
    } else if (expression === "potęgowanie" || expression === "Potęgowanie" || expression === "^") {
        return Math.pow(firstNumber, secondNumber);
    } else {
        console.log("Wybrano niepoprawne polecenie. Lista dostępnych poleceń: \n"
        + "Dla dodawania: Dodawanie | dodawanie | +\n"
        + "Dla odejmowania: Odejmowanie | odejmowanie | -\n"
        + "Dla mnożenia: Mnożenie | mnożenie | *\n"
        + "Dla dzielenia: Dzielenie | dzielenie | /\n"
        + "Dla potęgowania: Potęgowanie | potęgowanie | ^\n"
        + "Pamiętaj, aby po spacji przekazać dwa argumenty liczbowe, na którzych chcesz przeprowadzić operację!\n" 
        + "Przykładowo : node math_tools.js Dodawanie 20 30.5");
    }
    
    
}

var args = process.argv.slice(2);
console.log(fundametalMath(args[0], args[1], args[2]));