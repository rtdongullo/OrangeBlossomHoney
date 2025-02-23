

const Hexagon = ({ index, imageSrc }) => {
    return (
      <div
        className="hexagon animate-slideIn"
        style={{ animationDelay: `${index * 0.3}s` }}
      >
        {imageSrc && <img src={imageSrc} alt={`Hexagon ${index}`} />}
      </div>
    );
};

export default Hexagon;
