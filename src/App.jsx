import React, { Suspense } from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navber from "./components/Navber/Navber";
import PricingOPtions from "./components/pricingOPtions/pricingOPtions";
import Resultchart from "./components/resultchart/Resultchart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch("/pricingdata.json").then((res) => res.json());

const marksPromise = axios.get("/markData.json");
const App = () => {
  return (
    <>
      <header>
        {/* <Navber /> */}
        <DaisyNav />
      </header>

      <main>
        <Suspense
          fallback={<span className="loading loading-spinner text-info"></span>}
        >
          <PricingOPtions pricingPromise={pricingPromise} />
        </Suspense>
        <Suspense
          fallback={<span className="loading loading-spinner text-info"></span>}
        >
          <MarksChart marksPromise={marksPromise} />
        </Suspense>

        <Resultchart />
      </main>
    </>
  );
};

export default App;
