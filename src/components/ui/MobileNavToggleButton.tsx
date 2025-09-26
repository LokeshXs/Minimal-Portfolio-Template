"use client";

import { motion, MotionConfig } from "framer-motion";
import { useContext } from "react";
import { MobileNavContext } from "@/context/MobileNavContextProvider";
import { cn } from "@/lib/utils";
import { IconMenu, IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "./button";

const MobileNavToggleButton = () => {
  const { isOpen, setOpen } = useContext(MobileNavContext);
 

  return <button  className="[&_svg:not([class*='size-'])]:size-5 bg-transparent hover:bg-transparent   " onClick={()=>setOpen(prev=>!prev)}>{isOpen ? <IconX /> : <IconMenu2 />}</button>;
};

export default MobileNavToggleButton;
