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
      className={` min-h-screen flex items-center justify-center bg-zinc-50 p-24 flex-col`}
    >
      <h1 className="p-4">Pokemon List</h1>
      <div className="w-full rounded-xl ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {data != null &&
            data.map((res, index) => {
              return (
                <div key={index}>
                  <div
                    className={`${styles.pokemon__card} border-[5px] border-black box-border hover:underline hover:decoration-primary transition-all duration-300 decoration-transparent flex justify-center rounded-2xl w-full flex-col items-center p-4`}
                  >
                    <h1 className=" uppercase ">{res.name}</h1>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                      alt={res.name}
                      className={`
                         hover:scale-100  scale-75
                       w-[75%]  transition-all duration-300 `}
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
                      <Button className="bg-sky-500 hover:bg-sky-500/80 text-white">
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

// {data != null && data.map((res, index) => <li>{res.name}</li>)}

export default Pokemon;
