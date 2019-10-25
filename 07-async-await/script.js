// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// }

// fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto");

async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

const requisicao = fetchProdutos(
  "https://ranekapi.origamid.dev/wp-json/api/produto"
);
