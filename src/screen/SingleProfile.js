import React from "react";
import { useParams } from "react-router-dom";

const SingleProfile = () => {
  const { id } = useParams();

  return <div>Sono un singolo profilo con id: {id}</div>;
};

export default SingleProfile;
