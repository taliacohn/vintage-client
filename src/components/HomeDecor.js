import ProductItem from "./ProductItem";
import ShoppingNav from "./ShoppingNav";

function HomeDecor() {
  return (
    <>
      <ShoppingNav />
      <div className="mt-5 mb-5">
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_1380_720x.jpg?v=1668641852"
            }
            name={"Vintage Fruit Mug Set - Set of 6"}
            price={"₪80"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_9376_720x.jpg?v=1663818694"
            }
            name={"Vintage Cobalt Bud Vase / Candlestick"}
            price={"₪40"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_1108_720x.jpg?v=1639085877"
            }
            name={"Vintage XL Smoked Ash Tray"}
            price={"₪50"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_2733_720x.jpg?v=1620765036"
            }
            name={"Vintage XL Clear Glass Ashtray"}
            price={"₪50"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_9352_720x.jpg?v=1659039337"
            }
            name={"Paradise Pink Candlesticks"}
            price={"₪30"}
          ></ProductItem>
        </div>
        <div className="d-flex justify-content-center">
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_9371_4682cfc4-68fc-481f-b378-0082cc0263d0_720x.jpg?v=1659036090"
            }
            name={"The Wonderful World of Horses"}
            price={"₪60"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_9357_720x.jpg?v=1664772631"
            }
            name={"Tulips Guide Book Hard Cover "}
            price={"₪50"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_1329_720x.jpg?v=1668640886"
            }
            name={"Henri Matisse 'Les Musiciennes"}
            price={"₪200"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_1883_b53d5ea7-29ce-4739-b354-204cd754ed54_720x.jpg?v=1657825521"
            }
            name={"Michael Jordan USA Basketball, 1992"}
            price={"₪250"}
          ></ProductItem>
          <ProductItem
            src={
              "https://cdn.shopify.com/s/files/1/0434/0141/2768/products/IMG_9435_720x.jpg?v=1659038401"
            }
            name={"Henri Matisse 'Anemomes and Chinese Vase"}
            price={"₪300"}
          ></ProductItem>
        </div>
      </div>
    </>
  );
}

export default HomeDecor;
