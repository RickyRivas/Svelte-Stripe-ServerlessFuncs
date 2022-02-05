const msg = "hello Svelte App! this is from the backend!";

exports.handler = (req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  };
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(req),
  };
};
