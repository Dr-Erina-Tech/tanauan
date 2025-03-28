import React from 'react';
import { Globe, Mail, Facebook, Twitter } from 'lucide-react'; // Import social icons from lucide-react
import styles from './officialsList.module.css'; // Assuming this is the file where the styles are defined

const OfficialsList = ({ officialsData }) => {
  return (
    <div className={styles.officialsList}>
      {officialsData.map((official, index) => (
        <div className={styles.officialCard} key={index}>
          <img src={official.image} alt={official.name} />

          <div className={styles.officialDetails}>
            <h4>{official.position}</h4>
            <h3>{official.name}</h3>
            <p>{official.description}</p>
            <p>{official.address}</p>
            <p>{`Phone: ${official.phone}`}</p>

            <div className={styles.officialSocialLinks}>
              {official.website && (
                <a href={official.website} target="_blank" rel="noopener noreferrer">
                  <Globe />
                </a>
              )}
              {official.email && (
                <a href={`mailto:${official.email}`}>
                  <Mail />
                </a>
              )}
              {official.facebook && (
                <a href={official.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
              )}
              {official.twitter && (
                <a href={official.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfficialsList;
