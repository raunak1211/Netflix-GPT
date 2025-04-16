import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-screen h-[30vh] sm:h-[25vh] md:h-[30vh] px-4 sm:px-8 py-2 z-1 bg-gradient-to-b from-black absolute">
        <img
          className="w-40 sm:w-20 md:w-30 xl:w-50"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
    </>
  );
};

export default Header;
