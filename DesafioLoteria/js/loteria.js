var sorteio = []
var num = []
var numInfo = []

//Executando a validação de números informados pelo usuario
document.getElementById("bValidar").onclick = function () {
    numInfo.push(Number(document.getElementById("inNumInfo").value))
    console.log(numInfo.toString());
    document.getElementById("opNumInfo").value = numInfo.sort()
}

//Executando o sorteio dos números que o cliente desejou
document.getElementById("bSortear").onclick = function () {
    document.getElementById("lbOut").hidden = false

    while (sorteio.length < 6) {
        var aleatorio = Math.floor((Math.random() * 60) + 1)
        if (sorteio.indexOf(aleatorio) == -1) {
            sorteio.push(aleatorio)
        }
    }

    document.getElementById("idOut").innerHTML += sorteio.sort()

    console.log("Sorteio: " + sorteio.join("-"))
    console.log(sorteio.toString());
    console.log(sorteio.length);
}

//Executando o botao Executar para retornar a contagem de números
document.getElementById("bExecutar").onclick = function () {
    let contador = 0
    let entrou = true
    let jogadas = true
    let seis = document.getElementById("idSeisS").checked
    let sete = document.getElementById("idSeteS").checked
    let oito = document.getElementById("idOitoS").checked
    let nove = document.getElementById("idNoveS").checked
    let dez = document.getElementById("idDezS").checked
    let onze = document.getElementById("idOnzeS").checked
    let doze = document.getElementById("idDozeS").checked
    let treze = document.getElementById("idTrezeS").checked
    let quator = document.getElementById("idQuatorzeS").checked
    let quinze = document.getElementById("idQuinzeS").checked

    while (jogadas == true) {
        while (entrou == true) {
            for (let index = 0; index < sorteio.length; index++) {
                sorteio[index] = Math.floor((Math.random() * 60) + 1)                
            }
            entrou = false
        }

        if (sorteio[1] != sorteio[2] && sorteio[1] != sorteio[3] && sorteio[1] != sorteio[4] && sorteio[1] != sorteio[5] && sorteio[1] != sorteio[6]) {
            if (sorteio[2] != sorteio[3] && sorteio[2] != sorteio[4] && sorteio[2] != sorteio[5] && sorteio[2] != sorteio[6]) {
                if (sorteio[3] != sorteio[4] && sorteio[3] != sorteio[5] && sorteio[3] != sorteio[6]) {
                    if (sorteio[4] != sorteio[5] && sorteio[4] != sorteio[6]) {
                        if (sorteio[5] != sorteio[6]) {
                            contador += 1
                        }
                    }
                }
            }
        }

        console.log(sorteio.join("-"));

        if (numInfo[1] == sorteio[1] || numInfo[2] == sorteio[1] || numInfo[3] == sorteio[1] || numInfo[4] == sorteio[1] || numInfo[5] == sorteio[1] || numInfo[6] == sorteio[1] || numInfo[7] == sorteio[1] || numInfo[8] == sorteio[1] || numInfo[9] == sorteio[1] || numInfo[10] == sorteio[1]) {
            if (numInfo[1] == sorteio[2] || numInfo[2] == sorteio[2] || numInfo[3] == sorteio[2] || numInfo[4] == sorteio[2] || numInfo[5] == sorteio[2] || numInfo[6] == sorteio[2] || numInfo[7] == sorteio[2] || numInfo[8] == sorteio[2] || numInfo[9] == sorteio[2] || numInfo[10] == sorteio[2]) {
                if (numInfo[1] == sorteio[3] || numInfo[2] == sorteio[3] || numInfo[3] == sorteio[3] || numInfo[4] == sorteio[3] || numInfo[5] == sorteio[3] || numInfo[6] == sorteio[3] || numInfo[7] == sorteio[3] || numInfo[8] == sorteio[3] || numInfo[9] == sorteio[3] || numInfo[10] == sorteio[3]) {
                    if (numInfo[1] == sorteio[4] || numInfo[2] == sorteio[4] || numInfo[3] == sorteio[4] || numInfo[4] == sorteio[4] || numInfo[5] == sorteio[4] || numInfo[6] == sorteio[4] || numInfo[7] == sorteio[4] || numInfo[8] == sorteio[4] || numInfo[9] == sorteio[4] || numInfo[10] == sorteio[4]) {
                        if (numInfo[1] == sorteio[5] || numInfo[2] == sorteio[5] || numInfo[3] == sorteio[5] || numInfo[4] == sorteio[5] || numInfo[5] == sorteio[5] || numInfo[6] == sorteio[5] || numInfo[7] == sorteio[5] || numInfo[8] == sorteio[5] || numInfo[9] == sorteio[5] || numInfo[10] == sorteio[5]) {
                            if (numInfo[1] == sorteio[6] || numInfo[2] == sorteio[6] || numInfo[3] == sorteio[6] || numInfo[4] == sorteio[6] || numInfo[5] == sorteio[6] || numInfo[6] == sorteio[6] || numInfo[7] == sorteio[6] || numInfo[8] == sorteio[6] || numInfo[9] == sorteio[6] || numInfo[10] == sorteio[6]) {
                                jogadas = false
                            }
                        }
                    }
                }
            }
        }
        entrou = true
    }

    if (contador == 1) {
        console.log("Parabéns tu é brabo!");
    }
    console.log(`Foram ${contador} tentativas até acertar o sorteio...`);

}