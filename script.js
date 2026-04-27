/* =====================================================
   TechMart — Internet Shop
   script.js
   ===================================================== */

// ─── PRODUCT DATA ────────────────────────────────────
const PRODUCTS = [
  /* ---- Холодильники ---- */
  {
    id: 1,
    name: "Холодильник Samsung RB38T7762B1",
    category: "Холодильники",
    price: 289990,
    oldPrice: 340000,
    rating: 4.8,
    reviews: 312,
    badge: "Хит",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 2,
    name: "Холодильник LG GC-B459SQCL",
    category: "Холодильники",
    price: 199990,
    oldPrice: 240000,
    rating: 4.6,
    reviews: 186,
    badge: null,
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png "
  },
  {
    id: 3,
    name: "Холодильник Bosch KGN39VL17R",
    category: "Холодильники",
    price: 249990,
    oldPrice: null,
    rating: 4.7,
    reviews: 94,
    badge: null,
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },

  /* ---- Телевизоры ---- */
  {
    id: 4,
    name: "Телевизор Samsung QE55Q80B 55\"",
    category: "Телевизоры",
    price: 399990,
    oldPrice: 460000,
    rating: 4.9,
    reviews: 521,
    badge: "Топ",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 5,
    name: "Телевизор LG OLED55C2 55\"",
    category: "Телевизоры",
    price: 549990,
    oldPrice: 620000,
    rating: 5.0,
    reviews: 203,
    badge: "Premium",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 6,
    name: "Телевизор Xiaomi Mi TV A2 43\"",
    category: "Телевизоры",
    price: 129990,
    oldPrice: 159000,
    rating: 4.5,
    reviews: 478,
    badge: "Скидка",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },

  /* ---- Стиральные машины ---- */
  {
    id: 7,
    name: "Стиральная машина Bosch WAX32EH0OE",
    category: "Стиральные машины",
    price: 319990,
    oldPrice: 370000,
    rating: 4.8,
    reviews: 267,
    badge: "Хит",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 8,
    name: "Стиральная машина LG F4WV510S0E",
    category: "Стиральные машины",
    price: 259990,
    oldPrice: null,
    rating: 4.7,
    reviews: 132,
    badge: null,
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },

  /* ---- Ноутбуки ---- */
  {
    id: 9,
    name: "Ноутбук Apple MacBook Pro 14\" M3",
    category: "Ноутбуки",
    price: 899990,
    oldPrice: null,
    rating: 5.0,
    reviews: 871,
    badge: "Premium",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 10,
    name: "Ноутбук ASUS ROG Strix G16",
    category: "Ноутбуки",
    price: 649990,
    oldPrice: 720000,
    rating: 4.8,
    reviews: 344,
    badge: "Gaming",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 11,
    name: "Ноутбук Lenovo ThinkPad X1 Carbon",
    category: "Ноутбуки",
    price: 749990,
    oldPrice: null,
    rating: 4.7,
    reviews: 189,
    badge: null,
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },

  /* ---- Смартфоны ---- */
  {
    id: 12,
    name: "iPhone 15 Pro Max 256GB",
    category: "Смартфоны",
    price: 699990,
    oldPrice: 760000,
    rating: 4.9,
    reviews: 1203,
    badge: "Хит",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 13,
    name: "Samsung Galaxy S24 Ultra 256GB",
    category: "Смартфоны",
    price: 649990,
    oldPrice: 700000,
    rating: 4.8,
    reviews: 834,
    badge: null,
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 14,
    name: "Xiaomi 14 Ultra 512GB",
    category: "Смартфоны",
    price: 449990,
    oldPrice: 499000,
    rating: 4.7,
    reviews: 456,
    badge: "Скидка",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },

  /* ---- Пылесосы ---- */
  {
    id: 15,
    name: "Пылесос Dyson V15 Detect",
    category: "Пылесосы",
    price: 289990,
    oldPrice: 340000,
    rating: 4.9,
    reviews: 593,
    badge: "Топ",
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  },
  {
    id: 16,
    name: "Робот-пылесос iRobot Roomba j9+",
    category: "Пылесосы",
    price: 349990,
    oldPrice: null,
    rating: 4.8,
    reviews: 278,
    badge: null,
    img: "https://dummyimage.com/800x600/ffffff/ffffff.png"
  }
];

// ─── STATE ────────────────────────────────────────────
let cart = loadCart();
let activeCategory = "all";
let searchQuery = "";

// ─── DOM REFERENCES ───────────────────────────────────
const productsGrid    = document.getElementById("productsGrid");
const emptyState      = document.getElementById("emptyState");
const sectionTitle    = document.getElementById("sectionTitle");
const productsCount   = document.getElementById("productsCount");
const searchInput     = document.getElementById("searchInput");
const categoryFilter  = document.getElementById("categoryFilter");
const cartSidebar     = document.getElementById("cartSidebar");
const cartOverlay     = document.getElementById("cartOverlay");
const cartToggle      = document.getElementById("cartToggle");
const cartClose       = document.getElementById("cartClose");
const cartBody        = document.getElementById("cartBody");
const cartEmpty       = document.getElementById("cartEmpty");
const cartList        = document.getElementById("cartList");
const cartFooter      = document.getElementById("cartFooter");
const cartBadge       = document.getElementById("cartBadge");
const totalPrice      = document.getElementById("totalPrice");
const totalQty        = document.getElementById("totalQty");
const checkoutBtn     = document.getElementById("checkoutBtn");
const toast           = document.getElementById("toast");

// ─── UTILS ────────────────────────────────────────────
function formatPrice(n) {
  return n.toLocaleString("ru-RU") + " ₸";
}

function starsHtml(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ─── LOCALSTORAGE ─────────────────────────────────────
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("techmart_cart")) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("techmart_cart", JSON.stringify(cart));
}

// ─── RENDER PRODUCTS ─────────────────────────────────
function getFiltered() {
  return PRODUCTS.filter(p => {
    const catOk  = activeCategory === "all" || p.category === activeCategory;
    const srchOk = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return catOk && srchOk;
  });
}

function renderProducts() {
  const list = getFiltered();

  // Update title
  sectionTitle.textContent = activeCategory === "all" ? "Все товары" : activeCategory;
  productsCount.textContent = list.length
    ? `${list.length} ${pluralProduct(list.length)}`
    : "";

  if (!list.length) {
    productsGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  productsGrid.innerHTML = list.map((p, i) => {
    const inCart      = cart.find(c => c.id === p.id);
    const oldPriceHtml = p.oldPrice
      ? `<span class="card-price-old">${formatPrice(p.oldPrice)}</span>`
      : "";
    const badgeHtml   = p.badge
      ? `<span class="card-badge">${p.badge}</span>`
      : "";

    return `
      <article class="card" style="animation-delay:${i * 0.04}s" data-id="${p.id}">
        ${badgeHtml}
        <div class="card-img-wrap">
          <img
            class="card-img"
            src="${p.img}"
            alt="${p.name}"
            loading="lazy"
            onerror="this.src='https://picsum.photos/seed/${p.id}/400/300'"
          />
        </div>
        <div class="card-body">
          <p class="card-category">${p.category}</p>
          <h3 class="card-title">${p.name}</h3>
          <div class="card-rating">
            <span class="stars" title="${p.rating}">${starsHtml(p.rating)}</span>
            <span class="rating-val">${p.rating} (${p.reviews})</span>
          </div>
          <div class="card-price-row">
            <span class="card-price">${formatPrice(p.price)}</span>
            ${oldPriceHtml}
          </div>
          <button
            class="add-btn ${inCart ? "added" : ""}"
            data-id="${p.id}"
            onclick="addToCart(${p.id}, this)"
          >
            ${inCart
              ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> В корзине`
              : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> В корзину`
            }
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function pluralProduct(n) {
  if (n % 10 === 1 && n % 100 !== 11) return "товар";
  if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return "товара";
  return "товаров";
}

// ─── CART LOGIC ───────────────────────────────────────
window.addToCart = function(id, btn) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveCart();
  updateCartUI();
  renderProducts();

  // Fly animation
  flyAnimation(btn);

  showToast(`✅ ${product.name.split(" ").slice(0, 3).join(" ")} добавлен в корзину`);
};

function flyAnimation(btn) {
  const el   = document.createElement("span");
  el.className = "fly-icon";
  el.textContent = "🛒";

  const rect  = btn.getBoundingClientRect();
  const cartR = cartToggle.getBoundingClientRect();

  el.style.left = rect.left + rect.width / 2 + "px";
  el.style.top  = rect.top + "px";

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 700);

  cartBadge.classList.remove("bump");
  void cartBadge.offsetWidth;
  cartBadge.classList.add("bump");
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderProducts();
  showToast("🗑️ Товар удалён из корзины");
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

// Make accessible globally
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;

// ─── RENDER CART ──────────────────────────────────────
function updateCartUI() {
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalCost  = cart.reduce((s, c) => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return s + (p ? p.price * c.qty : 0);
  }, 0);

  // Badge
  cartBadge.textContent = totalItems;

  // Empty state
  if (!cart.length) {
    cartEmpty.style.display = "flex";
    cartList.innerHTML = "";
    cartFooter.style.display = "none";
    return;
  }

  cartEmpty.style.display = "none";
  cartFooter.style.display = "block";

  totalQty.textContent  = `${totalItems} ${pluralProduct(totalItems)}`;
  totalPrice.textContent = formatPrice(totalCost);

  cartList.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return "";
    return `
      <li class="cart-item" data-id="${p.id}">
        <img
          class="cart-item-img"
          src="${p.img}"
          alt="${p.name}"
          onerror="this.src='https://picsum.photos/seed/${p.id}/80/80'"
        />
        <div class="cart-item-info">
          <p class="cart-item-name">${p.name}</p>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)" aria-label="Уменьшить">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, +1)" aria-label="Увеличить">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
          <span class="cart-item-price">${formatPrice(p.price * item.qty)}</span>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})" aria-label="Удалить">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4h6v2"/>
            </svg>
          </button>
        </div>
      </li>
    `;
  }).join("");
}

// ─── CART SIDEBAR OPEN/CLOSE ──────────────────────────
function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeCart();
});

// ─── CHECKOUT ─────────────────────────────────────────
checkoutBtn.addEventListener("click", () => {
  if (!cart.length) return;
  closeCart();
  cart = [];
  saveCart();
  updateCartUI();
  renderProducts();
  showToast("🎉 Заказ оформлен! Спасибо за покупку!");
});

// ─── CATEGORY FILTER ─────────────────────────────────
categoryFilter.addEventListener("click", e => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  searchQuery = "";
  searchInput.value = "";
  renderProducts();
});

// ─── SEARCH ───────────────────────────────────────────
let searchTimer;
searchInput.addEventListener("input", e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value.trim();
    activeCategory = "all";
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('.cat-btn[data-cat="all"]').classList.add("active");
    renderProducts();
  }, 250);
});

// ─── INIT ─────────────────────────────────────────────
renderProducts();
updateCartUI();
