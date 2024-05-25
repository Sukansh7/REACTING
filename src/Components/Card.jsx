import React from "react";

function Card({ data, handleClick, index }) {

const {image, Artist, name, added} = data;

  return (
    <div className="w-60 rounded-md bg-zinc-100 p-4 flex gap-4 pb-8 mt-10 relative">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div>
        <h3 className="text-xl leading-none whitespace-nowrap font-semibold">{name}</h3>
        <h6 className="text-sm">{Artist}</h6>
      </div>
      <button onClick={() => handleClick(index)} className={`px-4 py-3 rounded-full whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-teal-600"} text-white absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-xs`}>
        {added === false ? "Add to Favourites" : "Added"}
      </button>
    </div>
  );
}

export default Card;
