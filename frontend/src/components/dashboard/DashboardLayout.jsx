import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-950">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <Outlet />

      </main>

    </div>
  );
}

export default DashboardLayout;