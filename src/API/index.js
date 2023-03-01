import cartAPI from "./cart";
import wishlistAPI from "./wishlist";
import popUp from "../alerts/popup";

export async function handleAddToCart(
  user,
  pathName,
  productId,
  navigate,
  imgURL,
  price,
  name,
  cart,
  setCart
) {
  const cartApi = new cartAPI();

  if (!user) {
    sessionStorage.setItem("redirectPath", pathName);
    navigate("/account/login");
  } else {
    const isInCart = cart.some((item) => item.id === productId);
    if (isInCart) {
      popUp("error", "Already in cart");
    } else {
      const result = await cartApi.addToCart(productId, user.currUser.id);
      if (result.status === 200) {
        popUp("success", "Added to Cart");
        setCart([
          ...cart,
          { id: productId, name: name, price: price, imgURL: imgURL },
        ]);
      } else {
        popUp("error", "Could Not Add to Cart");
      }
    }
  }
}

export async function handleAddToWishlist(
  isInWishlist,
  user,
  id,
  imgURL,
  price,
  name,
  setWishlist,
  wishlist,
  pathName,
  navigate
) {
  const wishlistApi = new wishlistAPI();
  console.log(user);
  if (!user) {
    sessionStorage.setItem("redirectPath", pathName);
    navigate("/account/login");
  } else {
    if (isInWishlist) {
      wishlistApi.deleteFromWishlist(id, user.currUser.id).then(() => {
        setWishlist(wishlist.filter((item) => item.productID !== id));
      });
    } else {
      wishlistApi.addToWishlist(id, user.currUser.id).then(() => {
        setWishlist([
          ...wishlist,
          { id: id, name: name, price: price, imgURL: imgURL },
        ]);
        console.log("added to WL");
      });
    }
  }
}
