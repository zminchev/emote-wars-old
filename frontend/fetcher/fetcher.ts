export const fetcher = async (url: string, payload: any) => {
  const token = localStorage.getItem("userJwt");

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2JhMDgwMmJkMWQ2NTUwNDBjZTQ4NSIsImlhdCI6MTY1NDAwMDk4NCwiZXhwIjoxNjU2NTkyOTg0fQ.9yprnXAfewaug3IOjyiSUlUgpdEf_L3tnIf-sG2JV7Is";

  const options = {
    method: payload ? "POST" : "GET",
    ...(payload && { body: payload }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return fetch(url, options).then((res) => res.json());
};
