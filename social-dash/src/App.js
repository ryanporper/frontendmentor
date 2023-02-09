import Followers from "./components/Followers";
import Header from "./components/Header";
import Overview from "./components/Overview";

function App() {
  return (
    <>
    {/* header background */}
      <div className="bg-slate-100 dark:bg-slate-800 h-52 w-full absolute top-0 left-0 rounded-b-3xl" 
        style={{
          zIndex: 0
        }}>
      </div>
      <div className="dark:bg-slate-900 p-8 h-full lg:h-screen">
        <Header />
        <Followers />
        <Overview />
      </div>
    </>
    
  );
}

export default App;