/* =========================
   TRANG CHỦ – RENDER XE
========================= */
const list = document.getElementById("product-list");

function renderProducts(data) {
  if (!list) return;

  list.innerHTML = "";

  data.forEach(p => {
    list.innerHTML += `
      <div class="product" data-brand="${p.brand}">
        <a href="product.html?id=${p.id}">
          <img src="${p.image}">
        </a>
        <h3>${p.name}</h3>
        <p class="price">${p.price.toLocaleString()}đ</p>

        <button class="add-cart" onclick="addToCartFromHome(${p.id})">
        Thêm vào giỏ
      </button>
      </div>
    `;
  });
}

// Render lần đầu
if (list) renderProducts(products);

/* =========================
   MENU LỌC THEO HÃNG
========================= */
window.filterBrand = function (brand) {
  if (brand === "all") {
    renderProducts(products);
  } else {
    const filtered = products.filter(
      p => p.brand === brand
    );
    renderProducts(filtered);
  }
};

/* =========================
   TÌM KIẾM XE
========================= */
function searchProduct() {
  const keyword = document
    .getElementById("search")
    .value
    .toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  renderProducts(filtered);
}
// TÌM KIẾM XE THEO TÊN
function searchProduct() {
  const keyword = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  renderProducts(filtered);
}


/* =========================
   TRANG CHI TIẾT XE
========================= */
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const product = products.find(p => p.id === id);

if (product && document.getElementById("detail-name")) {
  document.getElementById("detail-image").src = product.image;
  document.getElementById("detail-name").innerText = product.name;
  document.getElementById("detail-scale").innerText = "Tỉ lệ: " + product.scale;
  document.getElementById("detail-material").innerText = "Chất liệu: " + product.material;
  document.getElementById("detail-price").innerText =
    product.price.toLocaleString() + "đ";
}

/* =========================
   GIỎ HÀNG
========================= */
/* Thêm sản phẩm vào giỏ hàng */
function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const found = cart.find(i => i.id === product.id);

  if (found) found.qty++;
  else cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng 🛒!");
}
function addToCartFromHome(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  if (!product) return;

  const exist = cart.find(i => i.id === id);
  if (exist) {
    exist.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng 🛒");
}


/* Hiển thị giỏ hàng và tính tổng tiền */
function renderCart() {
  const box = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  if (!box) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  box.innerHTML = "";

  cart.forEach((i, index) => {
    total += i.price * i.qty;

    box.innerHTML += `
      <div class="cart-item">
        <img src="${i.image}" class="cart-img">
        <div class="cart-info">
          <h4>${i.name}</h4>
          <p>Giá: ${i.price.toLocaleString()}đ</p>
          <div class="qty">
            <button type="button" onclick="changeQty(${index}, -1)">-</button>
            <span>${i.qty}</span>
            <button type="button" onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  });

  totalEl.innerText = "Tổng tiền: " + total.toLocaleString() + "đ";
}



/* Tăng / giảm số lượng sản phẩm */
function changeQty(index, value) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].qty += value;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

/* Xóa toàn bộ giỏ hàng */
function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
}

/* Thanh toán (mô phỏng) */
function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) return alert("Giỏ hàng đang trống!");
  alert("Thanh toán thành công!");
  localStorage.removeItem("cart");
  renderCart();
}

/* Tự load giỏ khi vào trang giỏ */
if (document.getElementById("cart-items")) renderCart();
