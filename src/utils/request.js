export const graphql = async ({query}) => {
  const response = await fetch(
    'https://api.tiki.vn/tiniapp/api/graphql/query',
    {
      body: JSON.stringify({query}),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const json = await response.json();
  return json.data;
};
