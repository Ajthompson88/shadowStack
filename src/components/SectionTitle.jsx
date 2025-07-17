import React from "react";

export default function SectionTitle({ id, title }) {
  return (
    <div id={id} className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-noir-500 to-noir-300 rounded-full" />
    </div>
  );
}
