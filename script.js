let ul = document.getElementById("produc__list");

let arr = [];

function addFruit() {
  let productName = document.getElementById("productName");
  let fixedPrice = document.getElementById("price").value;
  let unitType = document.getElementById("unity").value;

  if (!productName.value || !fixedPrice || !unitType) {
    alert("Please select a product name, price and unit type");
    return;
  }

  arr.push({
    name: productName.value,
    price: fixedPrice,
    unit: unitType,
  });

  displayFruits();

  productName.value = "";
}

function displayFruits() {
  let lis = "";
  arr.forEach((fruit, index) => {
    lis += `
        <li class="item__box">
          <span class="item__ditails">
            <span class="item__name">${fruit.name}</span>
            <span class="symbol">-- $</span>
            <span class="final__price">${fruit.price} per</span>
            <span>${fruit.unit} </span> 
          </span>

          <button class="delele" onclick="deleteFruit(${index})">delete</button>
        </li>
        `;
  });

  ul.innerHTML = lis;

  let amount_box = document.getElementById("amoun_box");
  if (arr.length > 0) {
    amount_box.innerHTML = `<div id="amount">${arr.length}</div>`;
  } else {
    amount_box.innerHTML = "";
  }
}

function deleteFruit(index) {
  arr.splice(index, 1);
  displayFruits();
}

function filterItem(x) {
  if (x == "all") {
    let array = arr.filter((prices) => {
      return prices.price <= 15;
    });

    console.log(array);
  }
}
