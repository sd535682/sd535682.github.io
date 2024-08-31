import PropTypes from "prop-types";
import Button from "./button";

export default function Cards({ url, title, year, desc, imageurl, stack }) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="flex flex-col shadow-md font-inter font-normal bg-gray-100 p-4 rounded-xl md:rounded-2xl gap-4
        hover:scale-105 transition-all duration-500"
      >
        <div className="flex flex-row justify-between font-poppins font-bold">
          <h3 className="text-lg lg:text-xl">{title}</h3>
          <h5 className="text-lg">{year}</h5>
        </div>
        <div className="flex flex-col text-gray-600 md:flex-row justify-between">
          <p>{desc}</p>
          {imageurl && (
            <img
              src={imageurl}
              alt={`${title} url`}
              width={150}
              className="object-contain"
            />
          )}
        </div>
        <strong>{stack}</strong>
        <Button />
      </a>
    </>
  );
}

Cards.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  imageurl: PropTypes.string,
};
