"use client";

import {
  AlignRight,
  CircleX,
  
} from "lucide-react";
import React, { useState } from "react";
import Mobilemenu from "./Mobilemenu";
import Desktopmenu from "./Desktopmenu";

export default function Menu() {
  const [open, setopen] = useState<boolean>(false);

  return (
    <div>
      <nav className="flex justify-between items-center">

        {/* DESKTOP-NAVLINKS */}

        
          <Desktopmenu/>
        
        

        {/* MOBILE-NAVLINKS */}

        <div onClick={() => setopen(!open)} className="flex lg:hidden">
          {open ? <CircleX className="text-white" /> : <AlignRight className="text-white" />}
        </div>

    
      </nav>
          {open ? <Mobilemenu /> : ""}
    </div>
  );
}
