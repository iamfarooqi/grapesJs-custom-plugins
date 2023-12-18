import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './pages/Editor';
import CodeIndex from './CodeIndex';
import CodePreview from './CodePreview';

export const Homepage = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-7xl mt-6 font-extrabold text-white tracking-widest">
          Design Your UI
        </h1>

        <a
          href="/editor"
          className="mt-6 relative inline-block text-sm font-medium text-blue-500 group focus:outline-none focus:ring"
        >
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <a>Go to Builder</a>
          </span>
        </a>
        <a
          href="/preview"
          className="mt-6 relative inline-block text-sm font-medium text-blue-500 group focus:outline-none focus:ring"
        >
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <a>Preview Your Design</a>
          </span>
        </a>
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
          <Route path="/preview" element={<CodePreview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
