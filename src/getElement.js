const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `The element '${selection}' dosen't exist. Please check again`
  );
};

export default getElement;
