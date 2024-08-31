import React from 'react'
import e1 from './e1.png';
import e2 from './e2.png';

const Home = () => {
  return (
    <div className="container">
      <div className="contentCon">
        <div className="content">
          <h1 className='mainHeading'>The AssetMerkle Society</h1>
          <p className='details'>Join our <strong className='focusWords'> Web3 </strong> and <strong className='focusWords'> Blockchain Society </strong> to explore the future of decentralized technology, collaborate on cutting-edge projects, and connect with like-minded innovators shaping the digital world.</p>
          <a target='_blank' href="https://chat.whatsapp.com/BjavpQevWHPI2uMNy5p3C4"><button className="btn">Join Now!</button></a>
        </div>
        <div className="elementCon">
          <img className='elements' src={e1} alt="" />
          </div>
      </div>
          <img className='elements e2' src={e2} alt="" />

    </div>
  )
}

export default Home