import React from 'react';
import { ListOverview, Card } from '../../components/index.js';
import newsData from './newsData.js';

const NewsList = () => {
  return (
    <div>
     {/* Card component may be used in other webpages */}
     {/*<div className="news-cards">
        {newsData.listOverview.map((newsItem, index) => (
          <Card 
            key={index}
            title={newsItem.title}
            description={newsItem.description}
            image={newsItem.imageUrl}
          />
        ))}
      </div> */}
      <ListOverview 
        title="Latest News"
        list={newsData.listOverview} // Pass only the listOverview data
      />
    </div>
  );
};

export default NewsList;
