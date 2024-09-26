import axios from "axios";

export const login = async (email, password) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const data = await axios.post(
      `http://localhost:5001/api/auth/s`,
      { email, password },
      config
    );

    if (data) {
      return data.data.success;
      // console.log(data.data.success);
    }
  } catch (error) {
    return error.response.data.message;
    // console.log(error.response.data.message);
  }
};

export const register = async (name, email, password) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const data = await axios.post(
      `http://localhost:5000/documenthandle/register`,
      { name, email, password },
      config
    );

    if (data) {
      return data.data.success;
      // console.log(data.data.success);
    }
  } catch (error) {
    return error.response.data.message;
    // console.log(error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const data = await axios.get(`http://localhost:5000/documenthandle/logout`);
    if (data) {
      return data.data.success;
      // console.log(data);
    }
  } catch (error) {
    return error.response.data.message;
    // console.log(error);
  }
};
