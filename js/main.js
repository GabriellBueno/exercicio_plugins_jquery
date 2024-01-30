$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: "Insira o Nome completo.",
            email: "Insira um Email Valido.",
            telefone:"Insira um telefone Valido.",
            cpf:"Insira um CPF Valido.",
            endereco:"Insira um Endereço Valido.",
            cep:"Insira um CEP Valido.",
        },
        submitHandler : function(form){
            alert('Seu Cadastro foi enviado com sucesso.')

            nome.value = ''
            email.value = ''
            telefone.value = ''
            cep.value = ''
            endereco.value = ''
            cep.value = ''
        },
        invalidHandler: function(evento, validador){
            let campos_invalidos = validador.numberOfInvalids()
            if(campos_invalidos){
                alert(`Existem ${campos_invalidos} Campos a serem preenchidos, ou com dados incorretos no seu cadastro.`)
            }
        }
    })
})