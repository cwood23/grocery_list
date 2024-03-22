class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total = price * quantity;
    }
}

const itemTable = document.getElementById("itemTable");

const totalQuantityCell = document.getElementById('totalQuantity');
const totalPriceCell = document.getElementById('totalPrice');

const deleteBtnHTML = `<td><button class="delete-btn">X</button></td>`

let newItemForm = document.getElementById("newItemForm");
newItemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let itemName = document.getElementById('name').value
    let itemPrice = document.getElementById('price').value
    let itemQty = document.getElementById('quantity').value

    const item = new Item(itemName, itemPrice, itemQty);

    var row = itemTable.insertRow(1);
    var nameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);
    var qtyCell = row.insertCell(2);
    var totalCell = row.insertCell(3);
    var deleteBtn = row.insertCell(4);
    nameCell.innerHTML = item.name;
    priceCell.innerHTML = "$" + item.price;
    qtyCell.innerHTML = item.quantity;
    totalCell.innerHTML = "$" + item.total.toFixed(2);
    deleteBtn.innerHTML = deleteBtnHTML;

    getTotals();
});

function deleteRow(event) {
    const row = event.target.closest('tr');
    row.remove();

    getTotals();
}

itemTable.addEventListener('click', function(event) {
    if(event.target.matches('.delete-btn')) {
        deleteRow(event);
    }
});

function getTotals() {
    let totalPrice = 0;
    let totalQuantity = 0;

    const rows = Array.from(itemTable.querySelectorAll('tr')).slice(1, -1);
    rows.forEach(row => {
        const quantity = parseInt(row.cells[2].textContent);
        const price = parseFloat(row.cells[1].textContent.replace('$', ''));

        totalQuantity += quantity;
        totalPrice += price * quantity;
    });

    totalQuantityCell.textContent = totalQuantity;
    totalPriceCell.textContent = "$" + totalPrice.toFixed(2);
}