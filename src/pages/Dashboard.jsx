import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../partials/actions/FilterButton";
import Datepicker from "../partials/actions/Datepicker";
import Card from "../partials/Card";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dashboardItems = [
    {
      id: 0,
      type: "lumière",
      title: "Lumière principale",
      content: "Allumez ou éteignez la lumière",
      hasToggle: true,
      status: "disabled",
    },
    {
      id: 1,
      type: "garage",
      title: "Gestion de la porte du garage",
      content: "Ouverture du portail ou non",
      hasToggle: true,
      status: "disabled",
    },
    {
      id: 2,
      type: "tv",
      title: "Télévision",
      content: "Allumez ou éteignez votre téléviseur",
      hasToggle: true,
      status: "enabled",
    },
    {
      id: 3,
      type: "café",
      title: "Cafetière",
      content: "Allumez ou éteignez votre cafetière",
      hasToggle: true,
      status: "enabled",
    },
  ];

  return (
    <div className="flex h-screen  overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add view</span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {dashboardItems.map((item, index) => {
                return (
                    <Card
                        title={item.title}
                        content={item.content}
                        heightValue={250}
                        hasToggle={item.hasToggle}
                        status={item.status}
                        id={item.id}
                    />
                );
              })}
            </div>

            <div className="grid grid-cols-12 gap-6 ">
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />


              {/* Card (Customers) */}
              <DashboardCard10 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
