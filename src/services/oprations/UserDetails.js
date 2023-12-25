import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { userEndpoints } from "../apis";

const {POST_CREATE_USER_API,UPDATE_SINGLE_USER_API_ID} = userEndpoints;

export function createUser( id, name, email, phone, address, deliveryNo)
  {
    return  async (navigate) => {
      const toastId = toast.loading("Loading...");
      try {

        const response = await apiConnector("POST", POST_CREATE_USER_API, {id, name, email, phone, address, deliveryNo })
        // imp check properly sentence & spelling( bc I got error many times & take 1-2hr ->> forbbiden )

        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("User create Successful")
        // navigate("/");
      } catch (error) {
        console.log("CREATE User API ERROR............", error)
        toast.error("User Creation Failed")
        // navigate("/")
      }
      toast.dismiss(toastId)
    }
  }



// update a user
export const updateSectionApi = async (data,id) => {

  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PATCH", `${UPDATE_SINGLE_USER_API_ID}/${id}`, data);
    console.log("UPDATE USER API RESPONSE............", response)

    if (!response?.data?.success) {
      throw new Error("Could Not Update USER")
    }
    toast.success("USER Updated")
     // navigate("/");
  } catch (error) {
    console.log("UPDATE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}


// delete a course
export const deleteUser = async (id) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", `${userEndpoints.DELETE_SINGLE_USER_API_ID}/${id}`);
      console.log("DELETE user API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete user")
      }
      toast.success("user Deleted")
    } catch (error) {
      console.log("DELETE delete API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }  