class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let itemList = [];

let itemTable = document.getElementById("itemTable");

const deleteBtnHTML = `<td><button class="delete-btn">X</button></td>`

let newItemForm = document.getElementById("newItemForm");
newItemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = new Item("Steak", 9.99, 2);
    itemList[0] = item;

    var row = itemTable.insertRow(2);
    var nameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);
    var qtyCell = row.insertCell(2);
    var deleteBtn = row.insertCell(3);
    nameCell.innerHTML = item.name;
    priceCell.innerHTML = "$" + item.price;
    qtyCell.innerHTML = item.quantity;
    deleteBtn.innerHTML = deleteBtnHTML;
});