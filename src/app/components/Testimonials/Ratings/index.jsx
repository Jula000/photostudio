const Ratings = ({ rating }) => {
  const stars = Array(rating).fill(null);

  return (
    <>
      {stars.map((_, index) => (
        <span key={index} className="text-yellow-400">
          ★
        </span>
      ))}
    </>
  );
};

export default Ratings;
