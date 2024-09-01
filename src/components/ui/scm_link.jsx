import PropTypes from "prop-types";

export default function SocialLink({ icon, url }) {
  return (
    <>
      <a href={url} target="_blank">
        <i className={`${icon} dark:text-darkTheme-textColor`} />
      </a>
    </>
  );
}

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
