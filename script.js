let messagem;
function identificaTriangulo(ladoA, ladoB, ladoC) {
  // Identifica o tipo
  if (ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
    message = "Este triângulo é Equilatero ";
  } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
    message = "Este triângulo é Isósceles ";
  } else {
    message = "Este triângulo é Escaleno";
  }
  // Exibe o texto
  document.querySelector("#triangulo").innerHTML = message;
}

let raiz = [2];

function calcularBhask(numA, numB, numC) {
  // converter para Float
  numA = parseFloat(numA);
  numB = parseFloat(numB);
  numC = parseFloat(numC);

  let delta = Math.pow(numB, 2) - 4 * numA * numC;
  //Calcula X'(X linha) e X''(X 2 linhas).
  if (delta < 0) {
    document.getElementById("resultadoRaiz").innerHTML = "Delta é Negativo";
  } else {
    console.log(numB);
    let x1 = (-numB + Math.sqrt(delta)) / (numA * 2);
    let x2 = (-numB - Math.sqrt(delta)) / (numA * 2);
    raiz[0] = x1;
    raiz[1] = x2;

    let messagem = "X'= " + raiz[0] + " X''= " + raiz[1];
    document.getElementById("resultadoRaiz").innerHTML = messagem;
  }
}

function arredondar(notaAluno) {
  let status = "";
  notaAluno = parseInt(notaAluno);
  if (notaAluno >= 38) {
    if (notaAluno % 5 >= 3) {
      notaAluno += 5 - (notaAluno % 5);
    }
    if (notaAluno >= 40) {
      status = "Aprovado";
    }
  } else {
    status = "Reprovado";
  }
  let messagem = `O aluno apresenta nota ${notaAluno}, logo o aluno está ${status}`;
  document.getElementById("mostra").innerHTML = messagem;
}

let num = [];
function luidyMoura(numRepete) {
  numRepete = parseInt(numRepete);
  while (num.length > 0) {
    num.shift();
  }
  let exibe;
  for (let i = 1; i <= numRepete; i++, num.push(exibe)) {
    exibe = "";
    if (i % 5 === 0) exibe += "Luidy";
    if (i % 9 == 0) exibe += "Moura";
    if (i % 5 != 0 && i % 9 != 0) exibe = i;
  }
  document.getElementById("listaNum").innerHTML = num;
}
