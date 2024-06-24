const generateStars = (rating) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i} className="text-yellow-400">
        ★
      </span>
    );
  }
  return stars;
};

export default generateStars;
