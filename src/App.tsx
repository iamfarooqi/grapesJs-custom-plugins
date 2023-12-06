import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor";

export const Homepage = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-between items-center bg-[#1A2238]">
        <h1 className="text-7xl mt-6 font-extrabold text-white tracking-widest">
          Website Builder
        </h1>

        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-blue-500 group focus:outline-none focus:ring">
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <a href="/editor">Go to Builder</a>
            </span>
          </a>
        </button>
        <span className="mb-4 text-white text-xl">
          <p>
            Powered By{' '}
            <a
              href="https://bawdicsoft.com/"
              target="_blank"
              className="hover:underline"
            >
              BawdicSoft Pvt.(Ltd)
            </a>
          </p>
        </span>
      </main>
    </div>
  );
};

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
