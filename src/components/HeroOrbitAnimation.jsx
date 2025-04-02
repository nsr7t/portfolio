function HeroOrbitAnimation({ children, size, rotation }) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className=" inline-flex  "
        style={{
          transform: `rotate(${rotation * -1}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default HeroOrbitAnimation;
