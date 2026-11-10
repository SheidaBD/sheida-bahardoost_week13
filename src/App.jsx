import React, { useState } from "react";
import Contents from "./Contents";
import './Style.css';
function App() {
  const [active, setActive] = useState(1);

  return (
    <div className="base">
      <h1>Tabs Component with React</h1>

{/* button */}

      <div className="btn">
        <button className={active === 1 ? 'active-btn' :'tab-btn'}
          onClick={() => setActive(1)}>TAB 1
        </button>

        <button className={active === 2 ? 'active-btn' :'tab-btn'}
          onClick={() => setActive(2)}>TAB 2
        </button>
        
        <button className={active === 3 ? 'active-btn' :'tab-btn'}
          onClick={() => setActive(3)}>TAB 3
        </button>

        <button className={active === 4 ? 'active-btn' :'tab-btn'}
          onClick={() => setActive(4)}>TAB 4
        </button>
      </div>

{/* descriptions */}
      <div className="description-boc">
        {active === 1 && (<Contents title="content 1"
          description="CONTENT 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        )}

        {active === 2 && (<Contents title="content 2"
          description=" CONTENT 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        />
        )}

        {active === 3 && (<Contents title="content 3"
          description="CONTENT 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ."
        />
        )}

        {active === 4 && (<Contents title="content 4"
          description="CONTENT 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        )}
      </div>
    </div>
  );
}

export default App
