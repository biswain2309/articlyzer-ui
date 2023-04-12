import React from "react";
import axios from "axios";
import Result from "../result";
import { useGetWordCount } from "../../common/hooks";

function PlaceHolder() {
  const [formData, setFormData] = React.useState(""); //hooks
  const [result, setResult] = React.useState({ message: "", data: [] });
  const wordCount = useGetWordCount(result.data);

  const fetchData = async () => {
    try {
      const response = await axios("http://127.0.0.1:8000/getinfo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: formData,
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <main className="container mt-3">
      <section className="row">
        <div className="col-12 pt-3">
          <form onSubmit={submitForm}>
            <textarea
              placeholder="Paste/Type your article here..."
              className="form-control shadow-lg"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              rows="15"
            ></textarea>
            <div className="form-buttons">
              <button
                type="submit"
                className="btn btn-block btn-success shadow analyze-btn"
              >
                Analyze
              </button>
              <button
                type="reset"
                className="btn btn-block btn-primary shadow reset-btn"
                onClick={() => setFormData("")}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <Result frequentWords={wordCount} />
      </section>
    </main>
  );
}
export default PlaceHolder;
