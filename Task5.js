// Example product data (you can replace this with dynamic data or a backend API call)
const products = [
  { id: 1, name: "Chocolate Bar", price: 2.99, image: "https://sp.yimg.com/ib/th?id=OIP.2MvSfcxU-M9ly5G_AxiAzgHaLH&pid=Api&w=148&h=148&c=7&dpr=2&rs=1.jpg" },
  { id: 2, name: "Chocolate Truffles", price: 4.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8IlbPHLhRXMoOV5c0WMKAJAzsK8zSdtGeg&s.jpg" },
  { id: 3, name: "Dark Chocolate", price: 3.99, image: "https://t3.ftcdn.net/jpg/01/93/16/52/360_F_193165289_vcxpqK3rmVbxi00aXk2CX8pJxzgjpPZa.jpg" },
  { id: 4, name: "Milk Chocolate", price: 3.49, image: "https://revisfoodography.com/wp-content/uploads/2016/02/IMG_6841-480x270.jpg" },
  

];

// Load the products dynamically into the Products page
function loadProducts() {
  const productList = document.getElementById("productList");
  products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
  });
}

// Add product to cart (cart is stored in localStorage)
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
      existingItem.quantity++;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} has been added to your cart!`);
}

// On page load, load products dynamically
document.addEventListener("DOMContentLoaded", loadProducts);


