

const Hexagon = ({ index }) => {
    return (
      <div
        className={`hexagon animate-slideIn`}
        style={{
          animationDelay: `${index * 0.3}s`, // Delay the animations for a staggered effect
        }}
      >
        
      </div>
    );
  };
  
  export default Hexagon;