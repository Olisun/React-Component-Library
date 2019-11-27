// This function returns a random item from a list (an array).

const choice = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex]
};

export default choice;