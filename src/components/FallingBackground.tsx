interface FallingBackgroundProps {
  scrollY: number;
}

const FallingBackground: React.FC<FallingBackgroundProps> = ({ scrollY }) => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div
        className="relative inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`, // Move lines down as user scrolls
        }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-[100vh] w-[2px] bg-[#98c37980]"
            style={{
              left: `${Math.random() * 100}vw`, // Random horizontal position
              animation: `fallAnimation ${
                3 + Math.random() * 2
              }s linear infinite`,
              opacity: `${0.2 + Math.random() * 0.3}`,
              width: `${Math.random() * 3 + 1}px`, // Random width
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FallingBackground;
