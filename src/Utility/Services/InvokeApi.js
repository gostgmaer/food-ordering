import axios from "axios";
const InvokeAPI = async (endpoint, type, body, headerParams, queryParam) => {
  let token = null;
  const baseURL = process.env.REACT_APP_API_URL;
  const headerToken = token && { Authorization: `bearer ${""}` };
  const option = {
    method: type,
    url: baseURL + endpoint,
    headers: { ...headerToken, ...headerParams },
    params: queryParam,
    data: body,
  };
  let response;
  console.log(option);
  try {
    response = await axios.request(option);
  } catch (e) {
    throw new Error(e.message);
  }
  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
export default InvokeAPI;

export const cleanParam = (param) => {
  return Object.keys(param).forEach(
    (key) =>
      (param[key] === "" || param[key] == null || param[key] === undefined) &&
      delete param[key]
  );
};
