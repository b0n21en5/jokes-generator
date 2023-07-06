const Card = ({
  title,
  isShown,
  setIsShown,
  selectedCategory,
  setSelectedCategory,
}) => {
  //  handle click on card
  const handleCardClick = () => {
    setIsShown(true);
    setSelectedCategory(title);
  };

  return (
    <>
      <div
        className={`shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  
                        cursor-pointer md:p-3 ${
                          selectedCategory === title && isShown
                            ? "bg-slate-400"
                            : ""
                        }`}
        onClick={handleCardClick}
      >
        <h1 className=" text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6">
          {title}
        </h1>
        <p className="capitalize text-purple-800 text-sm lg:block md:block hidden">
          Unlimited Jokes On {title}
        </p>
      </div>
    </>
  );
};

export default Card;
