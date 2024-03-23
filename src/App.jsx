import React, { useState } from 'react';
import iconNext from "/images/icon-next.svg";
import iconPrev from "/images/icon-prev.svg";

export default function App() {
  const infors = [
    { avatar: "/images/image-john.jpg", name: "Tanya Sinclair", job: "UX Engineer", content: "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”" },
    { avatar: "/images/image-tanya.jpg", name: "John Tarkpor", job: "Junior Front-end Developer", content: "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === infors.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? infors.length - 1 : prevIndex - 1));
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-bg-pattern bg-no-repeat sm:bg-right-bottom bg-top bg-contain">
      {infors.map((infor, index) => (
        <section key={index} className="sm:max-w-4xl flex flex-col-reverse sm:flex-row p-8" style={{ display: index === currentIndex ? 'flex' : 'none' }}>
          {/* content */}
          <div className="sm:w-1/2 w-full bg-pattern-quotes bg-no-repeat flex flex-col justify-center items-center gap-4 sm:translate-x-10">
            <p className="text-black text-center sm:text-justify">{infor.content}</p>
            <span className="flex flex-col sm:flex-row gap-1 text-center sm:text-start">
              <h1 className="font-semibold text-DarkBlue">{infor.name}</h1>
              <p className="text-GrayishBlue">{infor.job}</p>
            </span>
          </div>
          {/* image */}
          <div className="sm:w-1/2 w-full flex flex-col justify-center items-center sm:items-start">
            <img src={infor.avatar} alt="" className="h-full rounded-md" />
            <span className="w-14 p-2 bg-white flex justify-between rounded-full drop-shadow-xl sm:ml-6 -translate-y-[40%]">
              <button onClick={goToPrevSlide}><img src={iconPrev} alt="" className="sm:w-2" /></button>
              <button onClick={goToNextSlide}><img src={iconNext} alt="" className="sm:w-2" /></button>
            </span>
          </div>
        </section>
      ))}
    </main>
  );
}
