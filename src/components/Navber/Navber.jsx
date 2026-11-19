import { Menu ,X} from "lucide-react";
import React, { useState } from "react";

const Navber = () => {
    const [open, setopen] = useState(false)
  return (
    <nav className="flex justify-between">
      <span className="flex gap-10" onClick={() => setopen(!open)
        
      }>
        {open?<X className="md:hidden" />:<Menu className="md:hidden"></Menu>}
        
        <h3 className="ml-4">My Navber</h3>
      </span>

      <button>Signin</button>
    </nav>
  );
};

export default Navber;
