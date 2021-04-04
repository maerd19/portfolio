import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import Spinner from "./Components/Spinner/Spinner";

const App = () => {
  const [state, setState] = useState({ resumeData: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getResumeData() {
      try {
        const answer = await axios.get("/resumeData.json");
        setState({ resumeData: answer.data });
        // Hide spinner

        setTimeout(() => {
          if (state) setLoading(false);
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    }
    getResumeData();
  }, []);

  const {
    resumeData: { main, resume, portfolio, testimonials },
  } = state;

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header data={main} />
          <About data={main} />
          <Resume data={resume} />
          <Portfolio data={portfolio} />
          <Testimonials data={testimonials} />
          <Contact data={main} />
          <Footer data={main} />
        </>
      )}
    </div>
  );
};

export default App;
