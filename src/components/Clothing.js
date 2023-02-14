import ProductItem from "./ProductItem";
// import ShoppingNav from "./ShoppingNav";

function Clothing() {
  return (
    <>
      {/* <ShoppingNav /> */}

      <div className="mt-3 mb-5">
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8272_720x.jpg?v=1671754065"
            }
            name={"Vintage Salt and Pepper Houndstooth Trousers"}
            price={"₪150"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8209_540x.jpg?v=1671754538"
            }
            name={"Vintage Brunette Sueded Leather Hooded Coat"}
            price={"₪300"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8171_772bf807-eb9b-4d9f-8f9a-7d01568f0787_540x.jpg?v=1671754359"
            }
            name={"Vintage Cherry Button Up Cardigan"}
            price={"₪160"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7976_540x.jpg?v=1671752643"
            }
            name={"Vintage Chalkboard Raglan Pullover"}
            price={"₪100"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7932_cef52735-7540-4a6a-81d3-b4c2f4f2b7f9_540x.jpg?v=1671752291"
            }
            name={"Vintage Navy & Evergreen Wool Pleated Skirt"}
            price={"₪150"}
          ></ProductItem>
        </div>
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7425_540x.jpg?v=1671480242"
            }
            name={"Vintage Iron Wool Herringbone Trousers"}
            price={"₪170"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7308_74bcd6f6-c00c-4e0e-bf4a-16d2fd3c5b8f_540x.jpg?v=1671478990"
            }
            name={"Vintage Burnt Orange Cashmere Quarter Zip"}
            price={"₪150"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7293_540x.jpg?v=1671478825"
            }
            name={"Vintage Umber Leather Jacket"}
            price={"₪300"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7038_540x.jpg?v=1671140331"
            }
            name={"Vintage Chocolate Leather Pencil Skirt"}
            price={"₪190"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6529_540x.jpg?v=1670865650"
            }
            name={"Vintage Strawberry Wool Cable Knit Cardigan"}
            price={"₪100"}
          ></ProductItem>
        </div>
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_6208_540x.jpg?v=1670615459"
            }
            name={"Vintage Vanilla Pure Silk Blouse"}
            price={"₪120"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7822_540x.jpg?v=1671751597"
            }
            name={"Vintage Night Sky Silk Sleeveless Blouse"}
            price={"₪130"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7759_47e98b1d-a358-4239-b197-3049e05e65f6_540x.jpg?v=1671649780"
            }
            name={"Vintage Caramel Suede Leather Button Up Skirt"}
            price={"₪250"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8081_53be3d2e-1eaa-4eb4-976a-6e5f92da3ddb_540x.jpg?v=1671751317"
            }
            name={"Vintage Irish Ivory Wool Cable Knit Cardigan"}
            price={"₪200"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7660_37afd1c1-b989-49bd-bd0b-6721815b7d08_540x.jpg?v=1671649236"
            }
            name={"Vintage Sable Wool Velvet Collar Blazer"}
            price={"₪120"}
          ></ProductItem>
        </div>
      </div>
    </>
  );
}

export default Clothing;
