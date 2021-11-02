// JavaScript, first version.

function checkBtn() {
  let amount = document.querySelector('#amount').value;
  let installment = document.querySelector('#installment').value;
  let porcentage = document.querySelector('#porcentage').value;

  if (porcentage === '' || amount === '' || installment === '') {
    alert("Preencha, todos os campos!");
  }
  else {

    amount = parseInt(amount);
    installment = parseInt(installment);
    porcentage = parseFloat(porcentage) / 100;

    let algorithm = (amount * porcentage) * installment;

    algorithm = (algorithm + amount) / installment;

    document.querySelector('.description').innerHTML = `FICA ${installment}X, PARCELAS DE:`;
    document.querySelector('.value').innerHTML = `R$ ${algorithm.toFixed(2)}`;
  }
}
