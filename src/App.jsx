
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h3>Home Page</h3>;
}

function About() {
  return <h3>About Page</h3>;
}

function Contact() {
  return <h3>Contact Page</h3>;
}

function Pages() {
  return (
    <>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Router Types</h1>

      <h2>HashRouter</h2>
      <HashRouter>
        <Pages />
      </HashRouter>

      <hr />

      <h2>MemoryRouter</h2>
      <MemoryRouter>
        <Pages />
      </MemoryRouter>

      <hr />

      <h2>StaticRouter</h2>
      <p>
        StaticRouter is intended for server-side rendering.
        Its navigation location is fixed during rendering.
      </p>
    </div>
  );
}
