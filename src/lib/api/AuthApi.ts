import { SIGN_IN } from "./ApiRoutes";
import { nonAuthData } from "./ApiService";

export const logInApi = async (formData: object) => {
  const response = await nonAuthData.post(SIGN_IN, formData);
  return response.data;
};
