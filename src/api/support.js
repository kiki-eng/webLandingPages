import apiHandler from "./base";

export async function sendSupportMessage(messageData) {
  const { data } = await apiHandler().post(
    `/api/public/send-support-notification`,
    messageData,
    {
      headers: {
        "pub-access-key": process.env.REACT_APP_PUBLIC_ACCESS_KEY,
      },
    }
  );

  return data;
}
