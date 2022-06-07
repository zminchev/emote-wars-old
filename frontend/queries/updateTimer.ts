interface TimerData {
  timer: {
    startTime: string;
    isWorking: boolean;
    hoursToWork: number;
  };
}

export const updateTimer = async (
  data: TimerData,
  id: number,
  token: string
) => {
  const response = await fetch(`http://localhost:1337/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
};
