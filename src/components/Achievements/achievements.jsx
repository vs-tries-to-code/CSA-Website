import React, { useState } from "react";
import "./achievements.css";

const achievements = [
     {
    id: 1,
    name: "Johan Varghese K",
    category: "Research Paper Publication",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },
   {
    id: 2,
    name: "Jane Doe",
    category: "Hackathon Winner",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },
   {
    id: 3,
    name: "John Doe",
    category: "Hackathon Winner",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },
   {
    id: 4,
    name: "Someone",
    category: "Coding Competition Winner",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },

];

function Achievements(){
  const [index, setIndex] = useState(0);

  const goRight = () => setIndex((index + 1) % achievements.length);
  const goLeft = () => setIndex((index - 1 + achievements.length) % achievements.length);

  const current = achievements[index];

    return (
    <main className="achievements-page">
        <div className="title-section">
        <div className="title-frame">
            <span className="line left" />                                                                              
            <h1 className="title">Achievements</h1>
            <span className="line right" />
        </div>
        </div>
          <div className="border-frame">
            <div className='top'></div>
            <div className='bottom'></div>
          </div>

      <section className="carousel">
          {/* decorative cards */}
        <div className="edge-stack edge-stack--left" aria-hidden="true">
          <img className="edge-card edge-card--1" src="/src/assets/achievements1.png" />
          <div className="edge-card edge-card--2" src="/src/assets/achievements1.png"/>
          <div className="edge-card edge-card--3" src="/src/assets/achievements1.png"/>
        </div>

        <div className="edge-stack edge-stack--right" aria-hidden="true">
          <div className="edge-card edge-card--1" src="/src/assets/achievements1.png"/>
          <div className="edge-card edge-card--2" src="/src/assets/achievements1.png"/>
          <div className="edge-card edge-card--3" src="/src/assets/achievements1.png"/>
        </div>

        
        <button className="arrow-btn arrow-btn--left" onClick={goLeft} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-inner">
            <div className="poster-card">
              {current.image
                ? <img src={current.image} alt={current.name} className="poster-img" />
                : <div className="poster-placeholder"><span>{current.name[0]}</span></div>
              }
            </div>

          <div className="detail-panel">
            <h2 className="detail-name">{current.name}</h2>
            <p className="detail-category">{current.category}</p>
            <p className="detail-desc">{current.description}</p>
          </div>
        </div>

        <button className="arrow-btn arrow-btn--right" onClick={goRight} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
    </section>
    </main>
  );
}

export default Achievements;
