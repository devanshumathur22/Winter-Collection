import { Link } from "react-router-dom";
import parallax from "../assets/images/parallax.jpg";
export default function Reviewparalax() {
  return (
    <Link to="/review">
      <section id="review"
        className="cursor-pointer relative flex justify-center items-center h-[60vh] sm:h-[70vh] md:h-[60vh] bg-fixed bg-center bg-cover px-4 md:px-10 hover:opacity-95 transition"
        style={{ backgroundImage: `url(${parallax})` }}>
        <div className="relative z-20 text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-2xl">
            Customer Reviews
          </h2>
          <hr className="bg-white mt-3 mb-4 w-28 mx-auto opacity-70" />
          <p className="text-white text-lg font-semibold drop-shadow-md">
            Tap to explore real customer experiences, ratings,  
            and winter wear reviews.
          </p>
        </div>
               
        <div className="absolute inset-0 bg-black/40"></div>
      </section>
    </Link>
  );
}
