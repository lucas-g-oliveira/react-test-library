noRepeatElementsArray = (array = []) => {
  const arrayUnique = [];
  array.forEach((e) => {
    const temp = arrayUnique.some((i) => i === e);
    if (!temp) {
      arrayUnique.push(e);
    }
  });
  return arrayUnique;
};

export default noRepeatElementsArray;