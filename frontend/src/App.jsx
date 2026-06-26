import { Routes, Route } from "react-router-dom";

import Background from "./components/Landing/Background";
import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";

import Loading from "./pages/Loading";

import DashboardLayout from "./components/dashboard/DashboardLayout";

import Overview from "./pages/dashboard/Overview";
import Chat from "./pages/dashboard/Chat";
import Documentation from "./pages/dashboard/Documentation";
import Security from "./pages/dashboard/Security";
import Architecture from "./pages/dashboard/Architecture";
import Performance from "./pages/dashboard/Performance";
import Refactor from "./pages/dashboard/Refactor";

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      <Background />

      <Navbar />

      <main className="relative z-10 px-6 pt-32 pb-20">
        <Hero />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/loading"
        element={<Loading />}
      />

      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >

        <Route
          index
          element={<Overview />}
        />

        <Route
          path="chat"
          element={<Chat />}
        />

        <Route
          path="documentation"
          element={<Documentation />}
        />

        <Route
          path="security"
          element={<Security />}
        />

        <Route
          path="architecture"
          element={<Architecture />}
        />

        <Route
          path="performance"
          element={<Performance />}
        />

        <Route
          path="refactor"
          element={<Refactor />}
        />

      </Route>

    </Routes>
  );
}

export default App;