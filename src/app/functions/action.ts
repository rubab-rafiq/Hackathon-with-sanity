
 import  IProduct  from "@/types/page";

export const addToCart = (product: IProduct) => {
  let cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // Check if the product already exists in the cart
  const existingProduct = cart.find(
    (item) => item.title.trim().toLowerCase() === product.title.trim().toLowerCase()
  );

  if (existingProduct) {
    // If exists, update the quantity
    existingProduct.quantity += 1;
  } else {
    // If not, add the product with quantity 1
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (title: string) => {
  let cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

  cart = cart.map((item) => {
    if (item.title.trim().toLowerCase() === title.trim().toLowerCase()) {
      if (item.quantity > 1) {
        item.quantity -= 1; // Decrease quantity
        return item; // Keep item in cart
      } else {
        return null; // Remove item from cart
      }
    }
    return item;
  }).filter((item): item is IProduct => item !== null); // Remove null entries

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (slug: string, quantity: number) => {
  const cart: IProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Jo product select kiya gaya hai uski quantity update karen
  const productIndex = cart.findIndex(item => item.slug === slug);

  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart)); // Cart ko update karen
  }
}


export const getCartItems = (): IProduct[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]'); // Cart se items fetch karen
}

export const addToWishlist = (product: IProduct) => {
  let wishlist: IProduct[] = JSON.parse(localStorage.getItem("wishlist") || "[]");

  // Check if the product already exists in the wishlist
  const existingProduct = wishlist.find(
    (item) => item.title.trim().toLowerCase() === product.title.trim().toLowerCase()
  );

  if (existingProduct) {
    console.log("Product is already in the wishlist!");
    return; // Do nothing if it's already in the wishlist
  }

  // Add the product to the wishlist
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  console.log("Product added to wishlist successfully!");
};
