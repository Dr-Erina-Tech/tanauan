import React from 'react';
import { Search, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ListOverview.module.css';

const ListCard = ({ name, description, imageUrl }) => (
  <div className="col-12 col-md-6 mb-4"> {/* Ensures 2 cards per row */}
    <div className={`card h-100 ${styles.cardFullWidth}`}>
      <div className={styles.cardLayout}> {/* Minimal space between image and content */}
        <div className={styles.imgCardContainer}>
          <img src={imageUrl} className="img-fluid" alt={`${name} logo`} />
        </div>
        <div className={styles.cardContent}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex align-items-center">
              <span className="text-muted me-2">Follow us:</span>
              <Facebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ListOverview = ({ title, list }) => {
  return (
    <div className="bg-white text-black font-sans">
      <div className={`container py-4 ${styles.container}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 fw-bold">{title}</h1>

          {/* Search Box aligned to the right */}
          <div className={`input-group ms-auto ${styles.inputBox}`}>
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" placeholder="Search" />
              <label className="form-label visually-hidden" htmlFor="form1">
                Search
              </label>
            </div>
            <button type="button" className="btn btn-primary">
              <Search /> {/* Lucide React icon for search */}
            </button>
          </div>

        </div>
        <div className="row g-2"> {/* Reduced gap between cards */}
          {list && list.length > 0 ? (
            list.map((item, index) => (
              <ListCard key={index} {...item} />
            ))
          ) : (
            <p>No Items Found.</p>
          )}
        </div>
        <div className={`d-flex justify-content-between align-items-center${styles.pagination}`}>
          <div className={`${styles.displayInfo}`}>Displaying Results: 1-10</div>
          <div className="d-flex align-items-center">
            <button className="btn btn-warning rounded-circle me-2">
              <ChevronLeft />
            </button>
            <button className="btn btn-warning rounded-circle">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOverview;
