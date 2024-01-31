import axios from "axios";

// const headers = {};

export const readAllBooks = async (token) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const result = await axios.get("http://localhost:8080/api/books", config);
    return result.data;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
