const Card = ({ title, setIsShown, setSelectedCategory }) => {
  //  handle click on card
  const handleCardClick = () => {
    setIsShown(true);
    setSelectedCategory(title);
  };

  return (
    <>
      <div
        className="bg-white shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  
                        cursor-pointer bg-slate-400 md:p-3 "
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
