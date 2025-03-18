import React from "react";

const GridOverlay = () => {
  return (
    <React.Fragment>
      <div className="block sm:hidden">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] grid-rows-[repeat(auto-fit,minmax(40px,1fr))] gap-[1px] transition-transform duration-1000">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="aspect-square h-full w-full bg-[#1e1e1e]"
            ></div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] grid-rows-[repeat(auto-fit,minmax(40px,1fr))] gap-[1px] transition-transform duration-1000">
          {[...Array(1500)].map((_, i) => (
            <div
              key={i}
              className="aspect-square h-full w-full bg-[#1e1e1e]"
            ></div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GridOverlay;
