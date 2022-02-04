const msg = "hello Svelte App! this is from the backend!";

exports.handler = () => {
  return {
    statusCode: 200,
    body: JSON.stringify(msg),
  };
};
