// const BASE_URL = "http://localhost:4000/api/v1"

const BASE_URL = "https://curd-backend.vercel.app/api/v1";

  // User ENDPOINTS
export const userEndpoints = {
  POST_CREATE_USER_API: BASE_URL + "/createUser",
  GET_ALL_USER_API: BASE_URL + "/getAllUser",
  GET_SINGLE_USER_API_ID: BASE_URL + "/getUser",
  DELETE_SINGLE_USER_API_ID: BASE_URL + "/deleteUser",
  UPDATE_SINGLE_USER_API_ID: BASE_URL + "/updateUser",
}