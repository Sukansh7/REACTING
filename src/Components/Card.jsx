import React from 'react'

function Card() {

  const data = [
    {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Amazon Basics", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in necessitatibus ullam!"},
    {image: 'https://plus.unsplash.com/premium_photo-1664110691129-ca0f4fbe8533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww', name: "Daily Objects", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in necessitatibus ullam!"},
    {image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D', name: "Apples", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in necessitatibus ullam!"},
  ]


  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
      {data.map((elem, index) => (
        <div key={index} className="w-52 bg-zinc-100 left-1/2 top-1/2 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img className='w-full h-full object-cover' src={elem.image} alt="" />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">{elem.name}</h2>
          <p className="text-xs mt-3">{elem.description}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Card