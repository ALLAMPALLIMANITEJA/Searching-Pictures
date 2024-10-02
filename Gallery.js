import React from "react";

const Gallery = ({ data }) => {
  return (
    <div className="gallery"> {/* Added gallery class for flex styling */}
      {data.map((image) => (
        <div key={image.id} className="image-container"> {/* Add a container for each image */}
          <img
            className="images"
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={image.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
