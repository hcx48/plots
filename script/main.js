// JavaScript, second version.

function checkBtn() {
  let amount = document.querySelector('#amount').value;
  let installment = document.querySelector('#installment').value;
  let porcentage = document.querySelector('#porcentage').value;

  if (porcentage === '' || amount === '' || installment === '') {
    alert("VOCÊ NÃO PREENCHEU TODOS OS CAMPOS!");
  }
  else {

    amount = parseFloat(amount);
    installment = parseInt(installment);
    porcentage = parseFloat(porcentage) / 100;

    let algorithm = (amount * porcentage) * installment;

    algorithm = (algorithm + amount) / installment;

    let decimalPlaces = algorithm.toFixed(2);
    let replacement = decimalPlaces.replace('.', ',')

    let finalValue = algorithm * installment;

    finalValue = finalValue.toFixed(2);

    let replacementFinalValue = finalValue.replace('.', ',');

    document.querySelector('.description').innerHTML = `FICA ${installment}X, COM PARCELAS DE:`;
    document.querySelector('.value').innerHTML = `R$ ${replacement}`;
    document.querySelector('.finalValue').innerHTML = `VALOR FINAL TOTAL: R$ ${replacementFinalValue}`;
  }
}

function clearApp() {
  location.reload();
}
