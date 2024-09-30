import React from 'react'

const Popup = ({contain,submit,info}) => {
  return (
    <div
  class="div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#6464f4] group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"
  >
    <span
      class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0"
      >More Info</span
    >
    <i class="fa-solid fa-arrow-right"></i>
  </button>

  <h1
    class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
  >
    HEADING
  </h1>
</div>

  )
}

export default Popup
