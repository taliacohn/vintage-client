import ProductItem from "./ProductItem";
import ShoppingNav from "./ShoppingNav";

function Accessories() {
  return (
    <>
      <ShoppingNav />
      <div className="mt-5 mb-5">
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8068_540x.jpg?v=1671753743"
            }
            name={"Vintage Silver Tone and Sable Leather Belt"}
            price={"₪200"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8161_540x.jpg?v=1671752086"
            }
            name={"Vintage Italian Tawny and Silver Tone Leather Belt"}
            price={"₪200"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7720_540x.jpg?v=1671649509"
            }
            name={"Vintage Syrah and Gold Tone Snake Skin Belt"}
            price={"₪200"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_4573_540x.jpg?v=1671141893"
            }
            name={"Vintage Timex Stretch Band Watch"}
            price={"₪150"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6262_d7e23a27-f299-4df0-b730-4988889311c4_540x.jpg?v=1671141373"
            }
            name={"Vintage Gold Tone Timex Stretch Band Watch"}
            price={"₪160"}
          ></ProductItem>
        </div>
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6892_cb0a1597-b88d-44d6-8d41-f44ac8b8da1b_540x.jpg?v=1671045729"
            }
            name={"Vintage Onyx Leather Belt Crocodile Buckle"}
            price={"₪200"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6476_540x.jpg?v=1670865289"
            }
            name={"Vintage Petite Silver Tone and Espresso Leather Belt"}
            price={"₪230"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6268_540x.jpg?v=1670865074"
            }
            name={"Vintage Gold & Silver Stretch Band Watch"}
            price={"₪100"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6288_540x.jpg?v=1670615420"
            }
            name={"Vintage Italian Carob Gold Tone Buckled Leather Belt"}
            price={"₪200"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6264_540x.jpg?v=1670615140"
            }
            name={"Vintage Silver and Gold Stretch Band Watch"}
            price={"₪100"}
          ></ProductItem>
        </div>
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6067_540x.jpg?v=1670856825"
            }
            name={"Vintage Gold Tone Rectangular Quartz Watch"}
            price={"₪150"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6074_a786a2dc-99ba-4b76-993a-f3774af1e50c_540x.jpg?v=1670444975"
            }
            name={"Vintage Gold Tone Circular Seiko Watch"}
            price={"₪150"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/image_ab43c0d2-5623-4dbb-8114-c2916d6f0ce6_540x.jpg?v=1670442527"
            }
            name={"Vintage Carbon Genuine Snake Skin Belt"}
            price={"₪250"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/image_650d1203-d160-4fd0-988b-6159c0d358df_540x.jpg?v=1670442786"
            }
            name={"Vintage Shimmering Silver Tone Petite Hand Bag"}
            price={"₪120"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/image_b7d74318-a132-4e51-a8a0-712fd854c4c0_540x.jpg?v=1670442818"
            }
            name={"Vintage Silver Tone Sequin Petite Hand Bag"}
            price={"₪130"}
          ></ProductItem>
        </div>
      </div>
    </>
  );
}

export default Accessories;
