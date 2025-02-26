
const Hexagon = ({ index, imageSrc }) => { 
  return (
    <div className="hexagon">
      {imageSrc && <img src={imageSrc} alt={`Hexagon ${index}`} />}
    </div>
  );
};

export default Hexagon;
