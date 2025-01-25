 const loadTemplate = async (path) => {
    const response = await fetch(path);
    const templateText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(templateText, "text/html");
    return doc;
  };

  export default loadTemplate;