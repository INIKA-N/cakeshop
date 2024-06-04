import React, { useState } from 'react';
import './Packaging.css';
import Navbar from './Navbar';

function Packaging() {
  const [sortOption, setSortOption] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0); // State for cart items count

  const packagingItems = [
    { imageSrc: 'https://via.placeholder.com/150', title: 'waqece', price: '$10' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'qui ecui c', price: '$15' },
    // Add more packaging items as needed
  ];

  const overlayItems = [
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOMo4ZE3Z5C3xc8497Vn1ZHQi4JrlTokD9A&s', title: 'Overlay Item 1', price: '$50' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Overlay Item 2', price: '$60' },
    // Add more overlay items as needed
  ];

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);
  };

  const handleAddButtonClick = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const handleOverlayItemClick = (item) => {
    setSelectedItem(item);
  };
const handleAddToCart = () => {
  if (!selectedItem) {
    alert("Please select an item before adding it to the cart.");
    return; // Exit the function early if no item is selected
  }
  setCartItemsCount(prevCount => prevCount + 1); // Increment cart items count
  setShowOverlay(false); // Close the overlay
};
      
  

  const sortedPackagingItems = [...packagingItems].sort((a, b) => {
    if (sortOption === 'a-z') {
      return a.title.localeCompare(b.title);
    }
    if (sortOption === 'z-a') {
      return b.title.localeCompare(a.title);
    }
    return 0; // No sorting if no option is selected
  });

  return (
    <div className='package'>
      {!showOverlay && <Navbar cartItemsCount={cartItemsCount} />}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <span className="overlay-close" onClick={() => setShowOverlay(false)}>×</span>
            {selectedItem && (
              <h3>{selectedItem.title} - {selectedItem.price}</h3>
            )}

            <div className="overlay-image-container">
              <img 
                src={selectedItem ? selectedItem.imageSrc : "https://via.placeholder.com/150"}
                alt={selectedItem ? selectedItem.title : "dont"}
                className="overlay-image"
              />
              <div className="overlay-options">
                {overlayItems.map((item, index) => (
                  <div key={index} className="overlay-option">
                    <label>
                      <input 
                        type="radio" 
                        name="item" 
                        onChange={() => handleOverlayItemClick(item)}
                      />
                      <span className="overlay-option-label">{item.title}</span>
                      <br></br>
                      <span className="overlay-option-price">{item.price}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="overlay-add-to-cart">
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={() => console.log("Buy Now clicked")}>Buy Now</button>
            </div>
          </div>
        </div>
      )}

      <img 
        className="image" 
        src="https://img.freepik.com/premium-psd/dessert-packaging-mockup-design_23-2149897464.jpg"
        alt="Packaging"
      />
      <div className='package-container'>
        <h1>Packaging</h1>
        <div className="sorting-bar">
          <label htmlFor="sort-options">Sort by:</label>
          <select id="sort-options" value={sortOption} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="a-z">Alphabetical: A to Z</option>
            <option value="z-a">Alphabetical: Z to A</option>
          </select>
        </div>
        <div className='grid-container'>
          {sortedPackagingItems.map((item, index) => (
            <div key={index} className="packaging-item">
              <img src={item.imageSrc} alt={item.title} className="item-image" />
              <div className="item-details">
                <div className="item-info">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">{item.price}</p>
                </div>
                <button className="add-button" onClick={() => handleAddButtonClick(item)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packaging;
