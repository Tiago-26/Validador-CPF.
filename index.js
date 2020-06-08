const express = require('express');
const app = express();

app.use(express.json())


app.get('/:cpf', (request, response) => {
    const cpf = request.params.cpf
     let Resultado

     for(cont=0;cont<=10;cont++)
	cpf[cont]-=48;//convertendo char em int (tabela a ASCII)
    
    	if(cpf[0]==cpf[1]&&cpf[1]==cpf[2]&&cpf[2]==cpf[3]&&cpf[3]==cpf[4]&&cpf[4]==cpf[5]&&cpf[5]==cpf[6]&&cpf[6]==cpf[7]&&cpf[7]==cpf[8]&&cpf[8]==cpf[9]&&cpf[9]==cpf[10])
        Resultado = 'CPF Inválido... :-('
            
        else
        {
		soma1=((cpf[0] * 10 + cpf[1] * 9 + cpf[2] * 8 + cpf[3] * 7 + cpf[4] * 6 + cpf[5] * 5 + cpf[6] * 4 + cpf[7] * 3 + cpf[8] * 2)*10)%11;
		soma2=((cpf[0] * 11 + cpf[1] * 10 + cpf[2] * 9 + cpf[3] * 8 + cpf[4] * 7 + cpf[5] * 6 + cpf[6] * 5 + cpf[7] * 4 + cpf[8] * 3 + cpf[9] * 2)*10)%11;	         
    
			 if(soma1==cpf[9]&&soma2==cpf[10])
             Resultado = 'CPF Valido... :-)'
			 else
			 Resultado = 'CPF Inválido... :-('	
		}

        response.json({
            Resultado,
        })
})


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})