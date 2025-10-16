// Product data
const products = [
  { id: 1, name: "Wireless Headphones" },
  { id: 2, name: "Smartwatch" },
  { id: 3, name: "Bluetooth Speaker" },
  { id: 4, name: "Portable Charger" },
  { id: 5, name: "LED Desk Lamp" }
];

// Dynamically populate product dropdown
const select = document.getElementById("productName");
if (select) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
}
