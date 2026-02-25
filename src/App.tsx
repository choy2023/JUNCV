import Main from "./components/Main";
import PrintButton from "./components/PrintButton";

function App() {
  return (
    <>
      <PrintButton />
      <div className="cv-container">
        <Main />
      </div>
    </>
  );
}

export default App;