const createDummyImage = (payload) => {
  const {
    width,
    height,
    backgroundColor = "000000",
    fontColor = "fff",
  } = payload;

  return `https://dummyimage.com/${width}x${height}/${backgroundColor}/${fontColor}`;
};

export { createDummyImage };
