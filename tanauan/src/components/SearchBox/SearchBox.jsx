import React, { useState, useRef } from "react";
import { X, Search } from "lucide-react";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleClose = () => {
    setQuery("");
    setIsExpanded(false);
  };

  return (
    <div className={`${styles.searchBox} ${isExpanded ? styles.expanded : ""}`}>
      {isExpanded ? (
        <button className={styles.closeIcon} onClick={handleClose}>
          <X size={20} />
        </button>
      ) : (
        <button className={styles.searchIcon} onClick={handleExpand}>
          <Search size={20} />
        </button>
      )}
      <input
        ref={inputRef}
        type="text"
        className={styles.searchInput}
        placeholder="Type something here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={() => !query && setIsExpanded(false)}
      />
    </div>
  );
};

export default SearchBox;
