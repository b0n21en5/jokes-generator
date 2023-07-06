import axios from "axios";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const JokeBox = ({ title, setIsShown }) => {
  const [jokes, setJokes] = useState("");
  const [nextjokes, setNextJokes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // fetch joke category wise
  const getJoke = async () => {
    setIsLoading(true);
    await axios
      .get(`https://api.chucknorris.io/jokes/random?category=${title}`)
      .then((res) => setJokes(res.data.value));
    setIsLoading(false);
  };

  useEffect(() => {
    getJoke();
  }, [title, nextjokes]);

  return (
    <div className="bg-gd absolute shadow-2xl md:top-56  top-72 lg:rounded-md card p-5 lg:w-1/2 md:w-1/2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 float-right text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setIsShown(false)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      <h1 className="text-center text-xl text-white font-bold">
        <span className="ft-30 block capitalize ext-3xl text-white">
          {title}
        </span>
      </h1>
      <div className="w-full border border-black m-auto mt-6 shadow-xl flex flex-col items-center justify-center">
        {isLoading ? (
          <HashLoader size={70} color="white" />
        ) : (
          <p className="ft-30 text-center font-semibold text-blue-100  font-sans  m-5 text-xl md:text-3xl">
            &quot; {jokes} &quot;
          </p>
        )}
        <button
          onClick={() => setNextJokes(Math.random())}
          className="px-4 py-2 bg-blue-700  my-2 mx-3 cursor-pointer lg:w-96 md:96  rounded-md hover:bg-blue-600 font-bold "
        >
          Next joke
        </button>
      </div>
    </div>
  );
};

export default JokeBox;
