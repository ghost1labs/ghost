const setBackgroundImage = (imageUrl) => {
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${imageUrl})`;
  body.style.backgroundSize = 'cover';
};

// Replace 'path/to/your/image.jpg' with the actual path to your image
const imageUrl = 'img/nft.png';
setBackgroundImage(imageUrl);

// const setBackgroundImageWithResolution = (imageUrl, resolutionWidth, resolutionHeight) => {
//   const body = document.querySelector('body');
//   body.style.backgroundImage = `url(${imageUrl})`;
//   body.style.backgroundSize = `${resolutionWidth}px ${resolutionHeight}px`;
// };

// // Replace 'path/to/your/image.jpg' with the actual path to your image
// const imageUrl = 'img/nft.png';
// const resolutionWidth = 1368;
// const resolutionHeight = 768;
// setBackgroundImageWithResolution(imageUrl, resolutionWidth, resolutionHeight);