// ImageFilters.js
import React, { useRef, useEffect } from 'react';
//import './ImageFilters.css';

const ImageFilters = ({ originalImage }) => {
  const canvasRef = useRef(null);
   console.log(originalImage?true:false);

  useEffect(() => {
    if (originalImage) {
      applyFilters();
    }
  }, [originalImage]);

  const applyFilters = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the original image
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Apply filters
      applyGrayscaleFilter(ctx);
      applySepiaFilter(ctx);
    };

    img.src = originalImage;
  };

  const applyGrayscaleFilter = (ctx) => {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const average = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = data[i + 1] = data[i + 2] = average;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const applySepiaFilter = (ctx) => {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];

      data[i] = red * 0.393 + green * 0.769 + blue * 0.189;
      data[i + 1] = red * 0.349 + green * 0.686 + blue * 0.168;
      data[i + 2] = red * 0.272 + green * 0.534 + blue * 0.131;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  return <canvas ref={canvasRef} className="image-filters-canvas" />;
};

export default ImageFilters;
