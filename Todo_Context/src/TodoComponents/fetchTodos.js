import axios from "axios";
export async function FetchData() {
  const response = await axios.get("http://localhost:8095/todos/alltodos", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleGlzdGluZ1VzZXIiOnsiX2lkIjoiNjViZjllMTZmZTRkYmQwZjFmMDA5NGU1IiwiZW1haWwiOiJkdXJnYWFhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJHpkZFkzV3BVcXFmMGVObVRuL2l1Z09PUy8ycm9ZWkR0TTI4cTZYWmt0dlhTTFVqSzYuUXU2IiwidXNlcm5hbWUiOiJkcDExMDgiLCJhdmF0YXIiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RxbGR3bnAxMy9pbWFnZS91cGxvYWQvdjE3MDcwNTY2NjEvZXFlc3VsY2g2YTcwN3Fna2V6djkucG5nIiwiY3JlYXRlZEF0IjoiMjAyNC0wMi0wNFQxNDoyNDoyMi43NDZaIiwidXBkYXRlZEF0IjoiMjAyNC0wMi0wNFQxNDoyNDoyMi43NDZaIiwiX192IjowfSwiaWF0IjoxNzA3NjM3MTQzLCJleHAiOjE3MDc2NTUxNDN9.pvk3wpGzdScvD0JhMPfz7uMpRfQblU9XJRVzQ2-U6PU",
    },
  });
  return response.data;
}

export const PostTodos = async (title, description) => {
  try {
    const response = await axios.post(
      "http://localhost:8095/todos/createTodo",

      { title, description },

      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleGlzdGluZ1VzZXIiOnsiX2lkIjoiNjViZjllMTZmZTRkYmQwZjFmMDA5NGU1IiwiZW1haWwiOiJkdXJnYWFhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJHpkZFkzV3BVcXFmMGVObVRuL2l1Z09PUy8ycm9ZWkR0TTI4cTZYWmt0dlhTTFVqSzYuUXU2IiwidXNlcm5hbWUiOiJkcDExMDgiLCJhdmF0YXIiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RxbGR3bnAxMy9pbWFnZS91cGxvYWQvdjE3MDcwNTY2NjEvZXFlc3VsY2g2YTcwN3Fna2V6djkucG5nIiwiY3JlYXRlZEF0IjoiMjAyNC0wMi0wNFQxNDoyNDoyMi43NDZaIiwidXBkYXRlZEF0IjoiMjAyNC0wMi0wNFQxNDoyNDoyMi43NDZaIiwiX192IjowfSwiaWF0IjoxNzA3NjM3MTQzLCJleHAiOjE3MDc2NTUxNDN9.pvk3wpGzdScvD0JhMPfz7uMpRfQblU9XJRVzQ2-U6PU",
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
