import React, { useState } from "react";

function CustomCard({ title, content, heightValue, hasToggle, status, id }) {
  const [isToggled, setIsToggled] = useState(null);
  return (
    <div
      style={{ height: { heightValue } }}
      className="flex flex-col col-span-6 bg-base-100 shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">{title}</h2>
      </header>
      <div className="p-4">{content}</div>
      {hasToggle && (
        <div className="p-4">
          <label
            for={`default-toggle-${id}`}
            className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={false}
              value=""
              id={`default-toggle-${id}`}
              class="sr-only peer"
              onChange={(e) => setIsToggled(e.target.checked)}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isToggled === true ? "Actif" : "Inactif"}
            </span>
          </label>
        </div>
      )}
    </div>
  );
}

export default CustomCard;