import PropTypes from "prop-types";
import nameSrc from "../assets/MoniLogo.webp";

const logoSrc = "/LogoMoni.jpeg";

function Logo({
  logoAlt = "Logo",
  nameAlt = "Name",
  size = "40px", // Ensure equal width and height for the logo to make it round
}) {
  return (
    <div className="flex items-center">
      <img
        src={logoSrc}
        alt={logoAlt}
        className="rounded-full"
        style={{ height: size, width: size, borderRadius: "50%" }} // Ensure height and width are the same
      />
      <img
        src={nameSrc}
        alt={nameAlt}
        className="ml-2"
        style={{ height: "auto", width: "120px" }}
      />
    </div>
  );
}

Logo.propTypes = {
  logoAlt: PropTypes.string,
  nameAlt: PropTypes.string,
  size: PropTypes.string,
};

export default Logo;
