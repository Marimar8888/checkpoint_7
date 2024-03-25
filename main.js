function operation_math(num1, num2, num3, num4){
    result = (num1 + num2) * (num3 + num4);
    
    if(result > 50){
        return console.log("¡El número es mayor que 50!");
    } else {
        return console.log("¡El número es menor que 50!");
    }
}

operation_math(5, 20, 3, 1);