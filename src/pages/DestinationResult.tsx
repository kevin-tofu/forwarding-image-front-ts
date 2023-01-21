import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"

interface MyNavigator {
  comment: string,
  to: string
}

function DestinationResult(props: MyNavigator) {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate(props.to);
    }, 2500)
  }, []);

  return <h2>{ props.comment }</h2>;
}
  
export default DestinationResult;
  