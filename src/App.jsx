import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {
      image:
        "https://i.pinimg.com/474x/cf/bc/9a/cfbc9aa23d256555733494a62ddcac9a.jpg",
      name: "Balle Balle",
      Artist: "SukkuGod",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/236x/4e/02/43/4e02439c86bf5ea40a2048f114b985e3.jpg",
      name: "Challenger",
      Artist: "Eminem",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/236x/e5/3b/2a/e53b2aa902156191c38bdb24ee311466.jpg",
      name: "HoneyBeez",
      Artist: "Honey Singh",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/236x/7b/b6/bc/7bb6bc5208f5830cab8829649d6de241.jpg",
      name: "Another Love",
      Artist: "Tom Odell",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/236x/50/68/25/50682586781195e2c080493ede9ae930.jpg",
      name: "Dreamer",
      Artist: "Mohit Chauhan",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/236x/20/f3/eb/20f3ebe8c8a1540739046f6e3fabfce7.jpg",
      name: "Alone",
      Artist: "Weeknd",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/236x/66/98/10/669810ffde2d068f6d8484a25001754f.jpg",
      name: "After Dark",
      Artist: "Mr. Kitty",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if(index === itemindex) return {...item, added: !item.added};
        return item;
      })
    })
  }

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData} />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((obj, index) => (
          <Card data={obj} handleClick={handleClick} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
