let salarioBruto = 10000.10;
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
    salarioComInss = salarioBruto - (salarioBruto / 100 * inss.aliquota8);
}

    else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
        salarioComInss = salarioBruto - (salarioBruto / 100 * inss.aliquota9);
    }

        else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
            salarioComInss = salarioBruto - (salarioBruto / 100 * inss.aliquota11);
        }

            else if (salarioBruto >= 5189.82){
                salarioComInss = salarioBruto - inss.aliquotaMax;
            }
            
//Calculo do IR
if (salarioBruto >= )



