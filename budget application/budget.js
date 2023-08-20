let set_budget = document.getElementById('submit_button')
let expns_btn = document.getElementById('exp_checkout')
set_budget.addEventListener('click', set_budget_btn)
expns_btn.addEventListener('click', expense_btn)

function setRecord() {
  let set_budget_btn = JSON.parse(localStorage.getItem('set_budget_btn'))
  let ex_budget = JSON.parse(localStorage.getItem('budget_details'))
  let total_budget = 0;
  let sum = 0
  for (let x of set_budget_btn) {
    total_budget += x.set_amount
  }
  document.getElementById('total_budget').innerHTML = total_budget
  for (x of ex_budget) {
    sum += x.ex_amount
  }
  document.getElementById("expenses").innerHTML = sum
  document.getElementById('balance').innerHTML = total_budget - sum
}

function set_budget_btn() {
  let total_amount = document.getElementById('t_amount')
  if (total_amount.value != "") {
    let amount = document.getElementById('total_budget')
    let data = JSON.parse(localStorage.getItem("set_budget_btn")) || []
    let sum = 0
    let object = {
      set_amount: parseFloat(total_amount.value)
    }
    data.push(object)
    for (x of data) {
      sum += x.set_amount
    }
    document.getElementById("total_budget").innerHTML = sum

    localStorage.setItem("set_budget_btn", JSON.stringify(data))
    amount.innerHTML = sum
    total_amount.value = ""
    total_balance()
  }
  else {
    alert("Please input valid number...")
  }
}

function expense_btn() {
  let product_title = document.getElementById('exp_name')
  let expanse_amount = document.getElementById('exp_amount')
  if ((product_title.value != "") && (expanse_amount.value != "")) {
    let expenditure_value = document.getElementById("expenses")

    let data = JSON.parse(localStorage.getItem("budget_details")) || []
    let object = {
      title: product_title.value,
      ex_amount: parseFloat(expanse_amount.value)
    }
    data.push(object)
    let sum = 0
    for (x of data) {
      sum += x.ex_amount
    }
    expenditure_value.innerHTML = sum

    localStorage.setItem("budget_details", JSON.stringify(data))
    total_balance()
    viewdata()
    expanse_amount.value = ""
    product_title.value = ""
  }
  else {
    alert("Please input valid number..")
  }
}

function total_balance() {
  let amount = document.getElementById('total_budget')
  let expenditure_value = document.getElementById('expenses')
  let balance_amount = document.getElementById('balance')
  let balance = parseFloat(amount.innerHTML) - parseFloat(expenditure_value.innerHTML)
  balance_amount.innerHTML = balance
}

function viewdata() {
  let data = JSON.parse(localStorage.getItem("budget_details"))
  let tbl = ""
  data.forEach((val) => {
    tbl += `
                   <div class="row py-1 rounded-3">
                      <div class="col-6 bg-light ps-3 rounded-start">${val.title}</div>
                      <div class="col-6 bg-light text-end pe-5 rounded-end">${val.ex_amount}</div>
                    </div>
    `
  });
  document.getElementById("list").innerHTML = tbl
}
