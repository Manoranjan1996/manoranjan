import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStates = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && authStates !== authentication) {
      navigate("/login");
    } else if (!authentication && authStates !== authentication) {
      navigate("/");
    }

    setLoader(false);
  }, [authStates, navigate, authentication]);

  return <div>AutheLayout</div>;
}
