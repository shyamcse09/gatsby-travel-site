import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-700 ">
      <div className="container mx-auto p-10 text-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="left">
            <h3> This is my Personal travel site.</h3>
          </div>
          <div className="right">
          <p>© {new Date().getFullYear()}, Copyright with Shyam.</p>
          <p>All contents belongs to Shyam for personal use only.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
