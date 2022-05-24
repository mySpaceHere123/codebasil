import axios from "axios";

export const signUpAction = async (email, password, name, codechefId) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    console.log(email, password);

    const { data } = await axios.post(
      "http://localhost:5000/users",
      {
        email: email,
        name: name,
        password: password,
        codechefUsername: codechefId,
      },
      config
    );
    if (!data) {
      throw new Error("Error in SignUp");
      return;
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const loginAction = async (email, password) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    // console.log(email, password);

    const { data } = await axios.post(
      "http://localhost:5000/users/login",
      { email, password },
      config
    );
    if (!data) {
      throw new Error("Error in Login");
      return;
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserData = async (token) => {
  try {
    // console.log(token);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // console.log("hitting...");
    const { data } = await axios.get("http://localhost:5000/users/me", config);
    // console.log("Hit");

    if (!data) {
      throw new Error("Error in Login");
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const logoutAction = async (token) => {
  try {
    // console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // console.log("hitting...");
    const { data } = await axios.post(
      "http://localhost:5000/users/logout",
      null,
      config
    );
    // console.log("Hit");

    if (!data.message) {
      throw new Error("Error in Logout");
      return;
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const searchUserAction = async (emailToBeSearched) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      },
    };

    // console.log("hitting...");
    const { data } = await axios.post(
      "http://localhost:5000/users/search",
      { email: emailToBeSearched },
      config
    );
    // console.log("Hit");

    if (!data) {
      throw new Error("Error in Login");
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const getOtp = async (email) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    console.log(email);

    const { data } = await axios.post(
      "http://localhost:5000/users/reset/getotp",
      { email: email },
      config
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async (email, passwordToBeChanged, otp) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    console.log(email, passwordToBeChanged);

    const { data } = await axios.post(
      "http://localhost:5000/users/reset",
      { email: email, password: passwordToBeChanged, otp: otp },
      config
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const otpVarification = async (email, otp) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/users/otp",
      { email: email, otp: otp },
      config
    );
    return data;
  } catch (error) {
    return error;
  }
};
