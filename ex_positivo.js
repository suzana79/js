name = 'duda'
idade = 16;
cnh = false; 
autorizacao = true;

if(idade >=18 && cnh == true && autorizacao == true) {
    console.log(`a ${nome} pode dirigir e pode entar em propriedade privada`)
}
else if (idade < 18 && cnh == false && autorizacao){
    console.log(`a ${nome} nao pode dirigir e pode entar em propriedade privada`)
}
else{
    console.log(`a ${soma} nao pode dirigir e nao pode entar em propriedade privada`)
}