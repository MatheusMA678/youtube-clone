import React, { useState } from "react";
import { Main } from "./layout/Main";
import { Sidebar } from "./layout/Sidebar";
import { Topbar } from "./layout/Topbar";

const App = () => {
  const [isExtended, setIsExtended] = useState(true);

  return (
    <div
      className={`dark:bg-dark dark:text-white h-screen grid ${
        isExtended ? "grid-cols-[15rem_auto]" : "grid-cols-[5rem_auto]"
      }  grid-rows-[3.5rem_auto]`}
    >
      <Topbar
        isExtended={isExtended}
        onClick={() => setIsExtended(!isExtended)}
      />
      <Sidebar isExtended={isExtended} />
      <Main />
    </div>
  );
};

export default App;
