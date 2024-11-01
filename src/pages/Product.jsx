import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-10 transition-opacity duration-500 ease-in border-t-2 opac-100 ">
      {/**product data */}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/**product image */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer
              "
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
          {/**Product Info */}
        </div>
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium ">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="px-8 py-4 text-sm text-white bg-black active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <button className="px-4 py-4 ml-8 text-sm border last:px-8">
            BACK
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex flex-col gap-1 mt-5 text-sm">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/**description and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="px-5 py-3 text-sm border">Description</b>
          <p className="px-5 py-3 text-sm border">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and seller. There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even
            slightly believable
          </p>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc
          </p>
        </div>
      </div>
      {/**Related Product */}
      <RelatedProducts
        category={productData.category}
        subCate={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
