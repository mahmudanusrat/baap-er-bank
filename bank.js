document.getElementById('btn-login').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;
    if(email === 'mim12@gmail.com' && password === 'mim12'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
})
document.getElementById("btn-deposite").addEventListener("click", function () {
  const depositeField = document.getElementById("deposite-field");
  const newDepositeAmountString = depositeField.value;
  const newDepositeAmount = parseFloat(newDepositeAmountString);

  const depositeTotalElement = document.getElementById("deposite-total");
  const previousDepositeTotalString = depositeTotalElement.innerText;
  const previousDepositeTotal = parseFloat(previousDepositeTotalString);
  const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
  depositeTotalElement.innerText = currentDepositeTotal;
  depositeField.value = "";

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  balanceField.value = "";
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  withdrawField.value = "";

  if(newWithdrawAmount > previousBalanceTotal){
    alert('baap er bank e eto tk nai!');
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  balanceField.value = "";
});
