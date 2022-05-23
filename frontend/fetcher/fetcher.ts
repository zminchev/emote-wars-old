export const fetcher = async (url: string, payload: any) => {
  const token = localStorage.getItem("userJwt");

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
