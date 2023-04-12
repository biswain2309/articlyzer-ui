export const fetchData = async (formData) => {
  try {
    const response = await axios("http://127.0.0.1:8000/getinfo/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
