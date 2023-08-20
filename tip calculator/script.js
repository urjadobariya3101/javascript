

let slider = document.querySelectorAll("input[type = 'range']");
slider.forEach(function (slider) {
    slider.addEventListener("input", calculateTip);
});

let billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);

function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById('tip').value;
    let nop = document.getElementById('no-of-people').value;
    
    let totaltip = parseFloat(bill * (tipPercent/100));
    let total = parseFloat(bill + totaltip);

    let tipPerPerson = (totaltip / nop);
    let totalperson = (total / nop);

    document.getElementById('tip-amount').textContent = `\$ ${totaltip}`;
    document.getElementById('total-amount').textContent = `\$${total}`;
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = nop;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalperson}`;
}
calculateTip();

