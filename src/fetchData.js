const fetchData = async (url) => {
  const response = await fetch(url).catch((err) => console.log(err));
  if (response) {
    const products = await response.json();
    return products;
  }
  return response;
};
export default fetchData;
