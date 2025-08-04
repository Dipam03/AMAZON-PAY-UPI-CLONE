let balance = 0.00;
let transactions = [];

function updateBalanceDisplay() {
  document.getElementById("balance").textContent = `₹${balance.toFixed(2)}`;
}

function addMoney() {
  const amount = prompt("Enter amount to add:");
  const num = parseFloat(amount);
  if (!isNaN(num) && num > 0) {
    balance += num;
    transactions.unshift(`Added ₹${num.toFixed(2)}`);
    updateBalanceDisplay();
    renderTransactions();
  }
}

function pay() {
  const amount = prompt("Enter payment amount:");
  const num = parseFloat(amount);
  if (!isNaN(num) && num > 0 && num <= balance) {
    balance -= num;
    transactions.unshift(`Paid ₹${num.toFixed(2)}`);
    updateBalanceDisplay();
    renderTransactions();
  } else {
    alert("Invalid or insufficient funds");
  }
}

function sendMoney() {
  const name = prompt("Enter recipient's name:");
  const amount = prompt("Enter amount to send:");
  const num = parseFloat(amount);
  if (!isNaN(num) && num > 0 && num <= balance) {
    balance -= num;
    transactions.unshift(`Sent ₹${num.toFixed(2)} to ${name}`);
    updateBalanceDisplay();
    renderTransactions();
  } else {
    alert("Invalid or insufficient funds");
  }
}

function viewOffers() {
  alert("No offers available right now.");
}

function renderTransactions() {
  const list = document.getElementById("transactionList");
  list.innerHTML = "";
  transactions.slice(0, 5).forEach((tx) => {
    const li = document.createElement("li");
    li.textContent = tx;
    list.appendChild(li);
  });
}

updateBalanceDisplay();
