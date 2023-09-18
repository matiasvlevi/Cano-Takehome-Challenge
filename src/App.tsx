import "./App.css";
import { useEffect, useState } from "react";

import { Product, SortMode } from "./types";
import { sortIcons } from "./sortIcons";
import { sortProductsByStringMatch, sortProductsByValue } from "./sorting";

import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";

import DummyData from "./DummyData";

function App() {
  // Product list state
  const [products, setProducts] = useState<Product[]>(DummyData);

  // Search State
  const [search, setSearch] = useState<string>("");

  // Sort State
  const [sortMode, setSortMode] = useState<SortMode>("none");

  /**
   * Toggle Ascending or Descending sorting
   */
  const toggleSortMode = () => {
    // Toggle the sort mode
    setSortMode((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  /**
   * Sort by name once the search value was updated
   *
   * (Sorting the products in the onChange event would be 1 character behind,
   *  so we need to use useEffect and sort after search was updated)
   */
  useEffect(() => {
    // Sort products by name
    setProducts(sortProductsByStringMatch(products, "name", search));

    // Cancel score sort
    setSortMode("none");
  }, [search]);

  /**
   * Sort by score once the sort mode was updated
   */
  useEffect(() => {
    setProducts(
      sortProductsByValue(
        products,
        "environmentalImpactScore",
        sortMode === "asc"
      )
    );
  }, [sortMode]);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div className="TopTray">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={toggleSortMode}>Sort {sortIcons[sortMode]}</button>
      </div>
      <div className="scrollBox">
        <ProductList items={products} />
      </div>
    </main>
  );
}

export default App;
