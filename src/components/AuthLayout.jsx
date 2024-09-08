import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, navigate, authStatus]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
Protected.propTypes = {
    children: PropTypes.node.isRequired, // children should be renderable content and is required
    authentication: PropTypes.bool, // authentication should be a boolean
  };