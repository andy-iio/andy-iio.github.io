import React from 'react';

//const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'React', 'C', 'C++', 'VBA', 'SCADA', 'C#', 'Selenium', 'MySQL', 'PostgresSQL', 'Python', 'Flask'];
const DURATION = 200000;
const ROWS = 6;
const TAGS_PER_ROW = 30;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='bgLoopSlider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='bgTag'><span>#</span> {text}</div>
);

const Background = () => {
  return (
  <div className='bgContainer'>
    <div className='bgTagList'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='bgFade'/>
    </div>
  </div>
);
};

export default Background;

// import React, { useEffect, useRef } from 'react';

// const Background = () => {
//   const containerRef = useRef(null);
//   const wordElementsRef = useRef([]);
  
//   useEffect(() => {
//     const words = ['Python', 'React', 'JavaScript', 'C++', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Git', 'SQL'];
//     const colors = ['#00ff00', '#00ffff', '#ff00ff', '#ffff00', '#ff0000', '#0000ff'];
//     const svg = containerRef.current.querySelector('svg');
    
//     // Create word elements
//     words.forEach((word, index) => {
//       const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//       text.textContent = word;
//       text.classList.add('tech-word');
//       text.style.stroke = colors[index % colors.length];
//       svg.appendChild(text);
      
//       // Random initial position and velocity
//       const position = {
//         x: Math.random() * containerRef.current.clientWidth,
//         y: Math.random() * containerRef.current.clientHeight
//       };
//       const velocity = {
//         x: (Math.random() - 0.5) * 2,
//         y: (Math.random() - 0.5) * 2
//       };
      
//       wordElementsRef.current.push({ element: text, position, velocity });
//     });

//     // Animation function
//     let animationFrameId;
//     const animate = () => {
//       wordElementsRef.current.forEach(({ element, position, velocity }) => {
//         position.x += velocity.x;
//         position.y += velocity.y;

//         // Bounce off walls
//         if (position.x < 0 || position.x > containerRef.current.clientWidth) {
//           velocity.x *= -1;
//         }
//         if (position.y < 20 || position.y > containerRef.current.clientHeight - 20) {
//           velocity.y *= -1;
//         }

//         element.setAttribute('x', position.x);
//         element.setAttribute('y', position.y);
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       wordElementsRef.current.forEach(({ position }) => {
//         if (position.x > containerRef.current.clientWidth) {
//           position.x = containerRef.current.clientWidth - 50;
//         }
//         if (position.y > containerRef.current.clientHeight) {
//           position.y = containerRef.current.clientHeight - 20;
//         }
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       cancelAnimationFrame(animationFrameId);
//       wordElementsRef.current = [];
//     };
//   }, []);

//   return (
//     <div className="w-full h-[500px] bg-black overflow-hidden relative" ref={containerRef}>
//       <svg width="100%" height="100%" className="absolute inset-0">
//       </svg>
//       <style>{`
//         .tech-word {
//           fill: none;
//           stroke-width: 1;
//           filter: url(#neon);
//           cursor: pointer;
//           transition: all 0.7s ease;
//         }
//         .tech-word:hover {
//           stroke: #ff00ff !important;
//           filter: url(#neon-hover);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Background;