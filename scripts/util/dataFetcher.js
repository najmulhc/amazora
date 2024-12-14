const datafetcher = async (link) => {
  const response = await fetch(link);
  const data = await response.json();

  const result = data.data;
  if (!result) {
    throw console.error("No data found!");
  }
  return result;
};

export default datafetcher;
