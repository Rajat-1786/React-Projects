import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './Examples.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts/>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
