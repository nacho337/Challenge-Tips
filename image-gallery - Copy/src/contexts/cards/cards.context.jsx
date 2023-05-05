import {createContext, useState, useEffect} from "react";

export const GalleryContext = createContext({
  slideNumber: 0,
  setSlideNumber: () => {},
  handleClick: () => {},
});

export const GalleryProvider = ({children}) => {
  const [slideNumber, setSlideNumber] = useState(1);

  const handleClick = (index) => {
    setSlideNumber(index);
  };

  const value = {
    slideNumber,
    setSlideNumber,
    handleClick,
  };
  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};
