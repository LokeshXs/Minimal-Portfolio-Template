"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

type StateType = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileNavContext = createContext<StateType>({
  isOpen: false,
  setOpen: () => {},
});

const MobileNavContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <MobileNavContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavContextProvider;
