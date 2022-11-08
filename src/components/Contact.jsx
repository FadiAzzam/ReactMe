import React from 'react'

const Contact = () => {
  return (
    <div className="">
      <div className="card">
        <div className="card-header">
          Contact
          <hr />
        </div>
        <div className='card-body'>
          <a href="tel:017647683592" className='link-primary'>017647683592</a>
        </div>
        <div className='card-body'>
          <a href="mailto:fadi.azzam@outlook.de" className='link-primary'>fadi.azzam@outlook.de</a>
        </div>
        <div className='card-body'>
          <address>
            Königstraße 22, 01079 Dresden, Deutschland
          </address>
        </div>
      </div>
    </div>
  )
}

export default Contact