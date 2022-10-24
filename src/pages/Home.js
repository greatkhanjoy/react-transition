import { motion as m } from 'framer-motion'
import React from 'react'

const Home = () => {
  return (
    <m.main
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full min-h-screen bg-orange-100 lg:px-48 px-16"
    >
      <div className="my-80 p-1">
        <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
          Happy pickle
        </h1>
      </div>
      <div className="flex justify-between">
        <div>
          <h2>Design</h2>
          <h2>Company</h2>
          <h2>2022</h2>
        </div>
        <div>
          <h3>This pickle gonna make you smile.</h3>
          <h3>Scottish design to make you happy.</h3>
          <h3>Click contact for cool transiotion.</h3>
        </div>
      </div>
    </m.main>
  )
}

export default Home
