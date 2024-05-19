import React from 'react'

function Songs() {

  const data = [
    {name: 'Hell Yeah!!!', description: 'This is awesome stuff that will never be' },
    {name: 'Junoon', description: 'This is awesome stuff that will never be' }
  ]

  const handleClickDown = () => {alert('downloading...')}

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center'>
        {data.map((elem, index) => (
          <div className="w-90 px-3 py-2 bg-zinc-100 rounded-xl">
          <h3 className="font-semibold text-xl">{elem.name}</h3>
          <p className="text-xs mt-2">{elem.description}</p>
          <button onClick={handleClickDown} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-full mt-3">Download Now!</button>
      </div>
        ))}
    </div>
  )
}

export default Songs