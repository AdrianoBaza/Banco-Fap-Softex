// função construtora do objeto Banco
function Banco (conta, tipo, agencia, saldo) {
    this.conta = conta,
    this.tipo = tipo,
    this.agencia = agencia,
    this.saldo = saldo,
    // método buscar saldo
    this.buscarSaldo = function() {
        console.log(`Saldo: ${this.saldo.toFixed(2)}`);
    },
    // método depósito
    this.deposito = function(valor) {
        console.log(`Deposito realizado com sucesso. Valor R$ ${valor.toFixed(2)}`);
        this.saldo += valor;
    },
    // método saque
    this.saque = function(valor) {
        console.log(`Saque realizado com sucesso. Valor R$ ${valor.toFixed(2)}`);
        this.saldo -= valor;
    },
    // método para imprimir o número da conta
    this.numeroDaConta = function() {
        console.log(`Número da Conta: ${this.conta}`);
    }
};

const meuBanco = new Banco(1, 'PF', 100, 5000); // cria a instancia do objeto Banco

meuBanco.buscarSaldo();
meuBanco.deposito(100);
meuBanco.buscarSaldo();
meuBanco.saque(600);
meuBanco.buscarSaldo();
meuBanco.numeroDaConta();