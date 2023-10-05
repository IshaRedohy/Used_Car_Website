import React from 'react'

const ImageGallery = () => {
    // Assuming your images are named image1.jpg, image2.jpg, ..., image200.jpg
    const imageCount = 200;
    const imageArray = Array.from({ length: imageCount }, (_, index) => index + 1);
  
    return (
      <div className="image-gallery">
        {imageArray.map((index) => (
          <img
            key={index}
            src={`../../../server/images/image${index}.jpg`}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    );
  };
  
  export default ImageGallery;
  