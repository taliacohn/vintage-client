import ProductItem from "./ProductItem";
// import ShoppingNav from "./ShoppingNav";

function Shoes() {
  return (
    <>
      {/* <ShoppingNav /> */}
      <div className="mt-5 mb-5">
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8621_540x.jpg?v=1667487332"
            }
            name={"Vintage Auburn Leather French Heel Shoes"}
            price={"₪100"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/image_7c4f9559-665b-4f5e-a85b-e9c50ebf3ef6_540x.jpg?v=1668456012"
            }
            name={"Vintage Jet Black Leather Mary Jane Pumps"}
            price={"₪100"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8803_397ebc14-52f3-42fc-bb3c-448f326d7321_540x.jpg?v=1668740265"
            }
            name={"Vintage Italian Ferragamo Licorice Silk Pumps"}
            price={"₪120"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_3031_0fee1049-c90a-4ad6-808b-bef6879c279c_540x.jpg?v=1669234529"
            }
            name={"Vintage Onyx Leather Block Heel Pumps"}
            price={"₪85"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_3071_f2580eea-a8df-4011-8979-a9fe84ee49bd_540x.jpg?v=1669245541"
            }
            name={"Vintage Gingerbread Perfect Leather Loafers"}
            price={"₪110"}
          ></ProductItem>
        </div>
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_3144_89ed8cf5-733f-4eb5-8b08-de025d65f52a_540x.jpg?v=1669507694"
            }
            name={"Vintage Leather Block Heel Loafers"}
            price={"₪140"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_7488_540x.jpg?v=1671479251"
            }
            name={"Vintage Dulce de Leche Leather Loafer Pumps"}
            price={"₪100"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/0F7EC89A-6176-45E3-A56F-776968DE184E_540x.jpg?v=1671480271"
            }
            name={"Vintage Italian Leather Square Toe Pumps"}
            price={"₪100"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8130_75c641c3-c6d7-4400-8b14-3e2669dfc7ac_540x.jpg?v=1671752787"
            }
            name={"Vintage Hickory Leather Hiking Shoes"}
            price={"₪120"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0507/5235/6513/products/IMG_8104_a5f23d49-8ad3-4ff2-91b6-8a21e77679b6_540x.jpg?v=1671825736"
            }
            name={"Vintage Midnight Black Leather Loafer Pumps"}
            price={"₪100"}
          ></ProductItem>
        </div>
      </div>
    </>
  );
}

export default Shoes;
