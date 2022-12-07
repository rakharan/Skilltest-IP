import React from "react";
import { Link } from "react-router-dom";
import { notFound } from "../assets/img";
import Button from "../components/Button";
const NotFound = () => {
  return (
    <div className="min-h-screen w-full items-center flex justify-center flex-col">
      <img
        src={notFound}
        alt="not found page"
        className="w-[400px] max-w-full object-cover"
      />
      <h1>Page under construction</h1>
      <Button className="bg-primary text-white hover:bg-primary/80">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
