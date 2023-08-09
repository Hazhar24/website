import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { dataTextGeneral } from '@/data/text'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-box">
        <Image
          className="animate__animated animate__flash"
          src="svgs/Vector.svg"
          width={80}
          height={80}
          alt="Vector"
        />
        <div>
          <div className="">
            <span className="hero-name">{dataTextGeneral.afrazteam}</span>
            <span className="hero-title">{dataTextGeneral.group}</span>
          </div>
        </div>
        <p className="hero-descrption">{dataTextGeneral.title}</p>
        <div className="hero-button">
          <button className="hero-counseling">
            <Link href="/">{dataTextGeneral.counseling}</Link>
          </button>
          <button className="hero-services">
            <Link href="/">{dataTextGeneral.ourservices}</Link>
          </button>
        </div>
      </div>
      <div className="hero-svg animate__animated animate__zoomIn">
        <Image
          src="/svgs/team1.svg"
          width={500}
          height={500}
          alt="afraz team"
        />
      </div>
    </div>
  )
}

export default Hero
