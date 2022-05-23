export const register = async (
  username: string,
  email: string,
  password: string
) => {
  await fetch(`http://localhost:1337/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
};
