// === Listings Data ===
const listings = [
  { name: "La Bonne Table", type: "Restaurant", cuisine: "French", address: "123 Avenue de la République", image: "images/la-bonne-table.jpg", stars: 5 },
  { name: "Chez Nous", type: "Restaurant", cuisine: "Local", address: "45 Rue de Congo", image: "images/chez-nous.jpg", stars: 4 },
  { name: "Le Gourmet", type: "Restaurant", cuisine: "Italian", address: "90 Avenue du Marché", image: "images/le-gourmet.jpg", stars: 3 },
  { name: "Snack Mbongo", type: "Restaurant", cuisine: "Fast Food", address: "12 Rue de Lubumbashi", image: "images/snack-mbongo.jpg", stars: 4 },
  { name: "Resto du Parc", type: "Restaurant", cuisine: "Grill & BBQ", address: "56 Boulevard Lumumba", image: "images/resto-parc.jpg", stars: 5 },
  { name: "La Terrasse", type: "Restaurant", cuisine: "French", address: "78 Avenue Kennedy", image: "images/la-terrasse.jpg", stars: 4 },
  { name: "Chez Pierre", type: "Restaurant", cuisine: "European", address: "34 Rue de l'Église", image: "images/chez-pierre.jpg", stars: 4 },
  { name: "Le Jardin", type: "Restaurant", cuisine: "Local", address: "22 Avenue du Marché", image: "images/le-jardin.jpg", stars: 5 },
  { name: "Snack Congo", type: "Restaurant", cuisine: "Fast Food", address: "18 Rue de Katuba", image: "images/snack-congo.jpg", stars: 3 },
  { name: "Le Palace", type: "Restaurant", cuisine: "Italian", address: "55 Avenue du Parc", image: "images/le-palace.jpg", stars: 4 },

  { name: "Hotel Katanga", type: "Hotel", address: "56 Boulevard Lumumba", image: "C:\Users\USER\Pictures\html and css\endprojecta\images\hotel-katanga.jpg", stars: 5 },
  { name: "Hotel Lumière", type: "Hotel", address: "78 Avenue Kennedy", image: "images/hotel-lumiere.jpg", stars: 4 },
  { name: "Grand Hôtel Lubumbashi", type: "Hotel", address: "10 Avenue du Gouverneur", image: "images/grand-hotel.jpg", stars: 5 },
  { name: "Hotel Victoria", type: "Hotel", address: "22 Rue des Chasseurs", image: "images/hotel-victoria.jpg", stars: 4 },
  { name: "Résidence du Centre", type: "Hotel", address: "33 Avenue Mbuji-Mayi", image: "images/residence-centre.jpg", stars: 3 },
  { name: "Hotel Royal", type: "Hotel", address: "66 Rue de l'Union", image: "images/hotel-royal.jpg", stars: 4 },
  { name: "Hotel du Lac", type: "Hotel", address: "44 Avenue de la Liberté", image: "images/hotel-du-lac.jpg", stars: 5 },
  { name: "Hotel Prestige", type: "Hotel", address: "99 Boulevard du Marché", image: "images/hotel-prestige.jpg", stars: 4 },
  { name: "Hotel Central", type: "Hotel", address: "12 Avenue des Mines", image: "images/hotel-central.jpg", stars: 3 },
  { name: "Hotel Eden", type: "Hotel", address: "77 Rue du Commerce", image: "images/hotel-eden.jpg", stars: 5 }
];

// === Utility function to create a card with type class ===
function createCard(item) {
  const typeClass = item.type.toLowerCase(); // "restaurant" or "hotel"
  return `
    <div class="card ${typeClass}">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="card-info">
        <h3>${item.name}</h3>
        <p>${item.type}${item.cuisine ? " - " + item.cuisine : ""}</p>
        <p>⭐ ${item.stars}</p>
        <p>${item.address}</p>
      </div>
    </div>
  `;
}

// === Render Listings ===
const cardsContainer = document.getElementById("cards-container");
if (cardsContainer) {
  function renderListings(filterName="", filterType="", filterStars="") {
    const filtered = listings.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterType === "" || item.type === filterType) &&
      (filterStars === "" || item.stars == filterStars)
    );
    cardsContainer.innerHTML = filtered.map(createCard).join("");
    localStorage.setItem("lastSearch", JSON.stringify({ filterName, filterType, filterStars }));
  }

  // Initial render
  renderListings();

  // Filters
  document.getElementById("search").addEventListener("input", e =>
    renderListings(e.target.value, document.getElementById("type-filter").value, document.getElementById("stars-filter").value)
  );
  document.getElementById("type-filter").addEventListener("change", e =>
    renderListings(document.getElementById("search").value, e.target.value, document.getElementById("stars-filter").value)
  );
  document.getElementById("stars-filter").addEventListener("change", e =>
    renderListings(document.getElementById("search").value, document.getElementById("type-filter").value, e.target.value)
  );
}
