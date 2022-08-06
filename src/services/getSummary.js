// Use service to fetch data using axios
import axios from "axios";

async function getSummary() {
  return await axios
    .get("/summary")
    .then((summary) => {
      return summary.data;
    })
    .catch((err) => {
      return err;
    });
}

export { getSummary };
