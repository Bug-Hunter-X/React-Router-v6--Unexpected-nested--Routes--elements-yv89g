```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Incorrect nested Routes */}
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {}
function About() {}
function Contact() {}
export default App;
```