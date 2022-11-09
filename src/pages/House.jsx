import React, { useState } from "react";


import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Card from "../partials/Card";
import TopConsoCard from "../partials/house/TopConsoCard";
import HomeConso from "../partials/house/HomeConsoCard";

function House() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <h1 className="text-2xl font-bold pb-4">Ma Maison</h1>
                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div><TopConsoCard/></div>
                            <div><HomeConso/></div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 py-4">
                            <Card title={"Salle de bain"} heightValue={100} content={""}></Card>
                        </div>

                    </div>
                </main>
            </div>

        </div>
    );
}

export default House;
