import React, { useEffect, useState } from "react";
import { getAllProductsbyCat } from "../axios-services/products";
import {
  getAllCategories
} from "../axios-services/categories";

const SearchBar = ({ products }) => {
  const [categories, setCategories] = useState([]);
  const [productCategory, setProductCategory] = useState("any");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const getProductCats = async (categoryId) => {
      const productCategories = await getAllProductsbyCat(categoryId);
      console.log(productCategories, "all categories");
      setProductCategory(productCategories);
      console.log(productCategory, "after the set");
    };

    getProductCats();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const allCategories = await getAllCategories();

      setCategories(allCategories);
    };

    getCategories();
  }, []);

  return (
    <>
      <h2> Select Category</h2>
      <select
        onChange={(e) => {
          e.preventDefault();

          setProductCategory(e.target.value);
        }}
      >
        {categories.map((category) => {
        //   console.log(category, "inside map");
          return (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SearchBar;
