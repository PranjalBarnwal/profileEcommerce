import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ShimmerCard from "./ShimmerCard";
import { products as allProducts } from "../assets/products";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart, setWishlist } from "../slices/cartSlice";
import { getDocs } from "firebase/firestore";
import { cartCollectionRef, wishlistCollectionRef } from "../slices/cartSlice";
import InfiniteScroll from "react-infinite-scroll-component"; // Import InfiniteScroll

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => !!state.cart.token);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    if (!token) navigate("/login");

    const fetchCartFromFirestore = async () => {
      const cartSnapshot = await getDocs(cartCollectionRef);
      const cartData = cartSnapshot.docs.map((doc) => doc.data());
      dispatch(setCart(cartData[0]?.items || []));
    };

    const fetchWishlistFromFirestore = async () => {
      const wishlistSnapshot = await getDocs(wishlistCollectionRef);
      const wishlistData = wishlistSnapshot.docs.map((doc) => doc.data());
      dispatch(setWishlist(wishlistData[0]?.wishlist || []));
    };

    fetchWishlistFromFirestore();
    fetchCartFromFirestore();

    setTimeout(() => {
      setProducts(allProducts.slice(0, productsPerPage));
      setLoading(false);
    }, 1000);
  }, [token, dispatch, navigate]);

  const fetchMoreData = () => {
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const newProducts = allProducts.slice(
        currentPage * productsPerPage,
        nextPage * productsPerPage
      );

      if (newProducts.length === 0) {
        setHasMore(false);
      }

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setCurrentPage(nextPage);
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        }
        endMessage={
          <p className="text-center font-bold">You have reached the end!</p>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ShimmerCard key={index} />
              ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
