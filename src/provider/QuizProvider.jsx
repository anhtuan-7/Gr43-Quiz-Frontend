import { useCallback, useState } from "react";
import axios from "axios";
import propTypes from "prop-types";
import QuizContext from "../contexts/QuizContext";

export default function QuizProvider({ children }) {
  const [quizzes, setQuizzes] = useState([]);
  const [maxPage, setMaxPage] = useState(1);

  const getQuizzes = useCallback(async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/v1/quizzes?limit=4&page=${page}`,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      //console.log(response);
      setQuizzes(response.data.data.quizzes);
      setMaxPage(Math.ceil(response.data.data.count / 4));
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <QuizContext.Provider value={{ quizzes, maxPage, setQuizzes, getQuizzes }}>
      {children}
    </QuizContext.Provider>
  );
}

QuizProvider.propTypes = {
  children: propTypes.any,
};
