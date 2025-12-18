import React from "react";
import { Timeline } from "@/components/ui/timeline";

const TimelineDemo = () => {
  const data = [
    {
      title: "2018",
      content: (
        <p className="text-neutral-300">
          Completed HighSchool.
        </p>
      ),
    },
    {
      title: "2020",
      content: (
        <p className="text-neutral-300">
          Completed Higher Secondary Education (+2).
        </p>
      ),
    },
    {
      title: "2023",
      content: (
        <p className="text-neutral-300">Completed B.Sc in Information Technology.</p>
      ),
    },
    {
      title: "2025",
      content: (
        <p className="text-neutral-300">Completed Master in Computer Application.</p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#06070a] via-[#060f28] to-[#10151f] py-20">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
