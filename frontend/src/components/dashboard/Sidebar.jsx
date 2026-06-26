import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Shield,
  Boxes,
  Zap,
  Wrench,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Repository Chat",
    icon: MessageSquare,
    path: "/dashboard/chat",
  },
  {
    title: "Documentation",
    icon: FileText,
    path: "/dashboard/documentation",
  },
  {
    title: "Security",
    icon: Shield,
    path: "/dashboard/security",
  },
  {
    title: "Architecture",
    icon: Boxes,
    path: "/dashboard/architecture",
  },
  {
    title: "Performance",
    icon: Zap,
    path: "/dashboard/performance",
  },
  {
    title: "Refactor",
    icon: Wrench,
    path: "/dashboard/refactor",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "#",
  },
];

function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950">

      <div className="border-b border-zinc-800 p-8">

        <h1 className="text-3xl font-bold text-white">
          RepoPilot AI
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Repository Intelligence
        </p>

      </div>

      <nav className="flex-1 p-5">

        <div className="space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>

              </NavLink>
            );

          })}

        </div>

      </nav>

      <div className="border-t border-zinc-800 p-6">

        <div className="rounded-xl bg-zinc-900 p-4">

          <p className="text-sm text-zinc-500">
            RepoPilot AI
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            Version 1.0
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;