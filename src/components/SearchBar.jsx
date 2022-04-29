import React, {useEffect, useState} from 'react';

import { getAllCategories } from '../axios-services/categories';

const SearchBar = () => {
    const[categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);


    useEffect(() => {
        const getCategories = async () => {
          const allCategories = await getAllCategories();
          console.log(allCategories, "all categories")
          setCategories(allCategories);
          console.log(categories, "after the set")
        };
        console.log(getCategories(), "categories")
        getCategories();
      }, []);

    return (
        <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // const filtered = categories.filter((category) =>
            getAllCategories();
            // );
            // setFilteredPosts(filteredPosts);
            setSearchTerm("");
          }}
        >
            <h2> Select Category</h2>
               <select
          onChange={(e) => {
            e.preventDefault();
            setCategories(e.target.value);
          }}
        >
          {categories.map((category) => {
              console.log(category, "inside map")
            return (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            );
          })}
        </select> 
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
        </>
    );
};

export default SearchBar;