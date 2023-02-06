let ul = document.getElementById("produc__list");

let arr = [];
function addFruit() {
  let productName = document.getElementById("productName").value;
  let fixedPrice = document.getElementById("price").value;
  let unitType = document.getElementById("unity").value;

  if (!productName || !fixedPrice || !unitType) {
    alert("Please select a product name, price and unit type");
    return;
  }

  arr.push({
    name: productName,
    price: fixedPrice,
    unit: unitType,
  });

  displayFruits();
  console.log(arr);
}

function displayFruits() {
  let lis = "";
  arr.forEach((fruit) => {
    lis += `
        <li class="item__box">
          <span class="item__ditails">
            <span class="item__name">${fruit.name}</span>
            <span class="symbol">-- $</span>
            <span class="final__price">${fruit.price} per</span>
            <span>${fruit.unit} </span> 
          </span>

          <button class="delele">delete</button>
        </li>
        `;
  });

  ul.innerHTML = lis;
}
