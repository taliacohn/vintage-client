import cartAPI from "./cart";
import wishlistAPI from "./wishlist";
import popUp from "../alerts/popup";

export async function handleAddToCart(user, pathName, productId, navigate) {
  const cartApi = new cartAPI();

  if (!user) {
    sessionStorage.setItem("redirectPath", pathName);
    navigate("/account/login");
  } else {
    const result = await cartApi.addToCart(productId, user.currUser.id);
    if (result.status === 200) {
      popUp("success", "Added to Cart");
    } else {
      popUp("error", "Could Not Add to Cart");
    }
  }
}

export async function handleAddToWishlist(
  isInWishlist,
  user,
  id,
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
        setWishlist([...wishlist, { productID: id, userID: user.currUser.id }]);
        console.log("added to WL");
      });
    }
  }
}
