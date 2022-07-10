// cuadrado

const funcionPrueba = () => {
  let val = document.querySelector("input").value;
  let text = document.querySelector(".prueba-1");
  text.innerHTML = parseInt(val) * 4;
  let text_2 = document.querySelector(".prueba-2");
  text_2.innerHTML = parseInt(val) * parseInt(val);
  if (text_2.innerHTML == "NaN" && text.innerHTML == "NaN") {
    alert("¡inserta un numero!");
  }
  let s1 = document.querySelector(".s-1");
  let s2 = document.querySelector(".s-2");
  let s3 = document.querySelector(".s-3");
  let s4 = document.querySelector(".s-4");
  s1.innerHTML = parseInt(val) + "cm";
  s2.innerHTML = parseInt(val) + "cm";
  s3.innerHTML = parseInt(val) + "cm";
  s4.innerHTML = parseInt(val) + "cm";
};

//triangulo
const triangleFunction = () => {
  let val1 = document.querySelector(".input-1").value;
  let val2 = document.querySelector(".input-2").value;
  let base = document.querySelector(".base").value;
  let altura = document.querySelector(".altura").value;
  let text_3 = document.querySelector(".prueba-3");
  text_3.innerHTML = parseInt(val1) + parseInt(val2) + parseInt(base);
  let text_4 = document.querySelector(".prueba-4");
  text_4.innerHTML = (parseInt(base) * parseInt(altura)) / 2;
  let s5 = document.querySelector(".s-5");
  let s6 = document.querySelector(".s-6");
  let s7 = document.querySelector(".s-7");
  let s8 = document.querySelector(".s-8");
  s5.innerHTML = parseInt(val1) + "cm";
  s6.innerHTML = parseInt(val2) + "cm";
  s7.innerHTML = parseInt(base) + "cm";
  s8.innerHTML = parseInt(altura) + "cm";
  if (text_3.innerHTML == "NaN" || text_4.innerHTML == "NaN") {
    alert("¡inserta un numero!");
  }
};

//circulo
const circleFunction = () => {
  let input = document.querySelector(".input-circle").value;
  let text6 = document.querySelector(".prueba-6");
  let text7 = document.querySelector(".prueba-7");
  let text8 = document.querySelector(".prueba-8");
  const pi = Math.PI;
  text6.innerHTML = parseInt(input) * 2;
  text7.innerHTML = (pi * Math.pow(parseInt(input), 2)).toFixed(2);
  text8.innerHTML = (parseInt(input * 2) * pi).toFixed(2);
  let s10 = document.querySelector(".s-10");
  s10.innerHTML = parseInt(input) + "cm";
  if (
    text6.innerHTML == "NaN" ||
    text7.innerHTML == "NaN" ||
    text8.innerHTML == "NaN"
  ) {
    alert("¡inserta un numero!");
  }
};
