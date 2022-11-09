import React, {useState} from "react";


import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Card from "../partials/Card";
import TopConsoCard from "../partials/house/TopConsoCard";
import HomeConso from "../partials/house/HomeConsoCard";
import CardContent from "../partials/house/CardContent";
import dataRooms from '../data/rooms.json'


import { GrAddCircle } from "react-icons/gr";
import { BsLightbulb } from "react-icons/bs";
import { GiWaterDrop, GiWashingMachine, GiChickenOven } from "react-icons/gi";

function House() {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const addRooms = (
        <div className="grid place-items-center cursor-pointer">
            <GrAddCircle size={32} color={"rgb(0,201,29)"}/>
        </div>
    );



    return (
        <div className="flex h-screen overflow-hidden">

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        <h2 className="text-2xl font-bold pb-4">Maison</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
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
