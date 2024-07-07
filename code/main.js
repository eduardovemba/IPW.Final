document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Verifica se todos os campos estão preenchidos
    var nome = document.getElementById('nome').value;
    var password = document.getElementById('password').value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var idade = document.getElementById('idade').value;
    var mensagem = document.getElementById('mensagem').value;

    if (!nome || !password || !sexo || !idade || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria uma string com todos os dados do formulário
    var dadosFormulario = `
        Nome: ${nome}
        Password: ${password}
        Sexo: ${sexo.value}
        Idade: ${idade}
        Mensagem: ${mensagem}
    `;

    // Exibe os dados em um alerta
    alert('Dados do formulário:\n' + dadosFormulario);

    // Opcional: Limpa o formulário após o envio
    this.reset();
});

// Adiciona um evento para o botão Limpar
document.querySelector('input[type="reset"]').addEventListener('click', function() {
    alert('Formulário limpo!');
});