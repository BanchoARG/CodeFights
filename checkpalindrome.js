const inputString = "estudiantes",
separador = "",
SubString = inputString.split(separador);
//reversedString = SubString.reverse();


function getPalindromo(SubString){
    reversedString = SubString.reverse();
    if(SubString === reversedString){
        return true;
    } else { 
        return false;
    }
}



console.log(SubString);
console.log(getPalindromo(SubString));
console.log(reversedString);