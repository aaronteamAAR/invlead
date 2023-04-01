import "../styles/card.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
import { useState, useEffect } from "react";




interface Props {
  title?: string;
  imgUrl?: string;
  desc?: string;
  alt?: string;
  class?: string;
}

export default function Card(props: Props) {
  useEffect(() => {
    AOS.init({
      delay:200,
      duration:500
    })
  })

  return (
    <a href="/" 
    data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="1300"
    className="cards block w-[21em] h-1/2 p-6 rounded-lg ">
    <p className="mb-2 text-2xl text-center font-semibold  text-army ">{props.title}.</p>
    <p className="font-normal text-army text-center font-normal px-6 py-6">{props.desc}</p>
</a>
  );
}
