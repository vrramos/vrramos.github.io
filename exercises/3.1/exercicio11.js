let salarioBruto = 2000;
let salarioComInss = 0;  
let salarioComIR = 0;
let salarioLiquido = 0;

inss = {
    aliquota8: 8,
    aliquota9: 9,
    aliquota11: 11,
    aliquotaMax: 570.88
};

ir = {
    "aliquota7.5": 7.5,
    aliquota15: 15,
    "aliquota22.5": 22.5,
    "aliquota27.5": 27.5
};

//Cálculo do INSS
if (salarioBruto <= 1556.94){
    salarioComInss = (salarioBruto / 100 * inss.aliquota8);
}

    else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
        salarioComInss = (salarioBruto / 100 * inss.aliquota9);
    }

        else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
            salarioComInss = (salarioBruto / 100 * inss.aliquota11);
        }

            else if (salarioBruto >= 5189.82){
                salarioComInss = salarioBruto - inss.aliquotaMax;
            }
            
//Calculo do IR
if (salarioBruto <= 1903.98){
    console.log("Isento de Imposto de Renda.");
}

    else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
        salarioComIR = (salarioBruto / 100 * ir["aliquota7.5"]);
    }

        else if (salarioBruto >= 2836.66 && salarioBruto <= 3751.05){
            salarioComIR = (salarioBruto / 100 * ir.aliquota15);
        }

            else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
                salarioComIR = (salarioBruto / 100 * ir["aliquota22.5"]);
            }
                else if (salarioBruto >= 4664.68){
                    salarioComIR = (salarioBruto / 100 * ir["aliquota27.5"]);
                }
salarioLiquido = salarioBruto - salarioComInss - salarioComIR;

console.log("O salário descontando INSS e Imposto de Renda é de " +salarioLiquido.toFixed(2)+".");