const computeHeight = (lado1, lado2, base)=>{
    let altura;
    if (lado1 === lado2 && lado1 === base){
        altura = (Math.sqrt(lado1*3))/2;
        return altura
    }
    if (lado1 === lado2){
        altura = Math.sqrt(Math.pow(lado2,2) - ((Math.pow(base,2))/4))
        console.log(altura);
    }else if(lado2 === base){
        altura = Math.sqrt(Math.pow(lado2,2) - ((Math.pow(lado1,2))/4))
        console.log(altura)
    }else if(lado1 === base){
        altura = Math.sqrt(Math.pow(lado1,2) - ((Math.pow(lado2,2))/4))
        console.log(altura)
    }else{console.log('no es un triangulo isoceles')};
}