import React from 'react';

import NavFooter from "../components/Nav/NavFooter";

function Home() {
  return (
    <>
      <NavFooter
      initial={{
        opacity: 0,
        transform: "translate3d(0, 20%, 0)",
      }}
        animate={{
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        }}
        exit={{
          opacity: 0,
          transform: "translate3d(0, 20%, 0)",
        }}
        transition={{ duration: 0.5 }} />
    </>
  )
}

export default Home;