import {
  Files,
  Boxes,
  FileCode2,
  FileText,
} from "lucide-react";

function StatsCards({
  totalFiles,
  totalLines,
  totalLanguages,
  totalChunks,
}) {
  const stats = [
    {
      title: "Files",
      value: totalFiles,
      icon: Files,
    },
    {
      title: "Chunks",
      value: totalChunks,
      icon: Boxes,
    },
    {
      title: "Languages",
      value: totalLanguages,
      icon: FileCode2,
    },
    {
      title: "Lines",
      value: totalLines,
      icon: FileText,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              group
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-indigo-500/40
              hover:shadow-xl
              hover:shadow-indigo-500/10
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {stat.value}
                </h2>

              </div>

              <div
                className="
                  rounded-xl
                  bg-indigo-600/20
                  p-3
                  text-indigo-400
                  transition-all
                  group-hover:bg-indigo-600
                  group-hover:text-white
                "
              >
                <Icon size={26} />
              </div>

            </div>

          </div>
        );

      })}

    </div>
  );
}

export default StatsCards;