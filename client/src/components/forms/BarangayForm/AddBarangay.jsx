import React, { useState } from 'react';
import styles from './AddBarangay.module.css'; // Import the CSS module

const BarangayForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    facebookLink: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Barangay name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.facebookLink || !formData.facebookLink.startsWith('https://')) {
      newErrors.facebookLink = 'Valid Facebook link is required (https://...)';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className={styles.barangayForm} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Barangay Details</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Barangay Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.error : ''}`}
          placeholder="Enter barangay name"
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.description ? styles.error : ''}`}
          placeholder="Enter barangay description"
          rows="3"
        />
        {errors.description && <p className={styles.errorMessage}>{errors.description}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="facebookLink" className={styles.label}>Facebook Link</label>
        <input
          type="url"
          name="facebookLink"
          id="facebookLink"
          value={formData.facebookLink}
          onChange={handleChange}
          className={`${styles.input} ${errors.facebookLink ? styles.error : ''}`}
          placeholder="https://www.facebook.com/barangay"
        />
        {errors.facebookLink && <p className={styles.errorMessage}>{errors.facebookLink}</p>}
      </div>

      <button type="submit" className={styles.submitBtn}>Submit</button>
    </form>
  );
};

export default BarangayForm;
