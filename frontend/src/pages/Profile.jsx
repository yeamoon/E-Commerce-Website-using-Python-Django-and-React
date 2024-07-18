import React, { useState } from 'react';
import api from "../api";
const Profile = () => {
  const [state, setState] = useState({
    error: null,
    loading: false,
    formData: {
      address_type: "",
      apartment_address: "",
      country: "",
      default: false,
      id: "",
      street_address: "",
      author: 1,
      zip: ""
    },
    saving: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(prevState => ({ ...prevState, saving: true }));
    api.post("/Address/ad/", { ...formData })
 
    .then(res => {
    // Perform save action
    // After saving:
    setState(prevState => ({ ...prevState, saving: false }));
    setState(prevState => ({ ...prevState, success: true }));
  })
  .catch(err => {
    setState(prevState => ({ ...prevState,  error: err }));
  });
};

  const { formData, saving } = state;

  return (
    <form onSubmit={handleSubmit}  >
      <div>
        <label>Address Type</label>
        <input
          type="text"
          name="address_type"
          value={formData.address_type}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Apartment Address</label>
        <input
          type="text"
          name="apartment_address"
          value={formData.apartment_address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Street Address</label>
        <input
          type="text"
          name="street_address"
          value={formData.street_address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>ZIP</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="default"
            checked={formData.default}
            onChange={handleCheckboxChange}
          />
          Default
        </label>
      </div>
      
     
       
      <button type="submit" disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default Profile;
