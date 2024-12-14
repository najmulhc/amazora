const dataFetcher = async (link, method, reqbody) => {
  const url = "https://rmlkszzfalqtktilneyr.supabase.co";

  const anonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbGtzenpmYWxxdGt0aWxuZXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNTc3OTEsImV4cCI6MjA0OTczMzc5MX0._zq2Zr7BGbu92Y0EysP5AUCXliI5Hdrv5xL8WMJIbMo";
  const response = await fetch(`${url}/${link}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${anonKey}`,
      apikey: anonKey,
    },
    body: JSON.stringify(reqbody),
  });

  return response;
};

export default dataFetcher;
