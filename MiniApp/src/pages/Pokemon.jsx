import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import styles from "../assets/css/GlobalModule.module.scss";
const Pokemon = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setData([...res.data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className={` min-h-screen flex items-center justify-center bg-zinc-50 p-8 md:p-16 lg:p-24 flex-col`}
    >
      <h1 className="p-4 text-center">Pokemon List</h1>
      <div className="w-full rounded-xl ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {data != null &&
            data.map((res, index) => {
              return (
                <div key={index}>
                  <div
                    className={`${styles.pokemon__card} border-[5px] border-black box-border hover:underline hover:decoration-primary transition-all duration-300 decoration-transparent flex justify-center rounded-2xl w-full flex-col items-center p-4`}
                  >
                    <h1 className=" uppercase text-base md:text-xl lg:text-2xl">
                      {res.name}
                    </h1>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                      alt={res.name}
                      className={`
                         hover:scale-100 w-full lg:w-[75%] scale-75
                      transition-all duration-300 `}
                    />
                    <a
                      target="_blank"
                      href={
                        index + 1 < 10
                          ? `https://id.portal-pokemon.com/play/pokedex/00${
                              index + 1
                            }`
                          : `https://id.portal-pokemon.com/play/pokedex/0${
                              index + 1
                            }`
                      }
                    >
                      <Button className="bg-sky-500 hover:bg-sky-500/80 text-white min-w-0 text-[12px] py-0 items-center text-center md:text-sm">
                        More Details
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
