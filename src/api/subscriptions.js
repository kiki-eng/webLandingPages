import apiHandler from "./base";

export async function getSubscriptions() {
  const { data } = await apiHandler().get("/api/public/subsriptions");

  return data;
}
