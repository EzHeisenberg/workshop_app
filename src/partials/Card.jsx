import React from 'react';

function CustomCard({
    title, content, heightValue
}) {


  return (
      <div style={{height: {heightValue}}} className="flex flex-col bg-base-100 shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">{title}</h2>
        </header>
        <div className="p-4">
          {content}
        </div>
      </div>
  );
}

export default CustomCard;