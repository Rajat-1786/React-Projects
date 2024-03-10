import CreateNewProject from "./components/CreateNewProject";
import SidePanel from "./components/SidePanel";
import ProjectInfo from "./components/ProjectInfo";
import { useState } from "react";

function App() {
  const [handleClick, setHandleClick] = useState(true);

  function handleOnClick(){
      setHandleClick(false);
  }

  function handleReset(){
    setHandleClick(true);
  }

  return (
    <>
      <main className="my-8 flex gap-8">
        <SidePanel showProject={handleOnClick}></SidePanel>
        { handleClick ? <CreateNewProject></CreateNewProject> : <ProjectInfo handleOnReset={handleReset}></ProjectInfo>}
      </main>
      
    </>
  );
}

export default App;
