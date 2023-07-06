import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card/Card";
import JokeBox from "../Components/JokeBox/JokeBox";
import { ScaleLoader } from "react-spinners";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // fetching all categories
  const getCategories = async () => {
    setIsLoading(true);
    const resData = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    setCategories((prev) => [...prev, ...resData.data]);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="h-fit flex flex-col items-center justify-center">
      {isLoading ? (
        // when page is loading loader will be visible
        <ScaleLoader className="mt-9" color="white" />
      ) : (
        <>
          <h1 className="m-3 text-4xl text-green-500 animate-bounce font-bold ">
            Chuck Norries
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-4   bg-transparent text-white text-lg   md:gap-y-3  md:w-fit">
            {categories?.map((title, ind) => (
              <Card
                key={ind}
                title={title}
                isShown={isShown}
                setIsShown={setIsShown}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </div>
        </>
      )}
      {isShown && <JokeBox setIsShown={setIsShown} title={selectedCategory} />}
    </div>
  );
};

export default Home;
