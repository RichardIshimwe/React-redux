import API from "../api";

const login = async (data) => {
   const response = await API.post("https://puce-helpful-xerus.cyclic.app/login", data);
   console.log(response);
};

const authService = { login };

export default authService;
