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



                        <h2 className="text-2xl font-bold py-4">Pièces</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                            {dataRooms && dataRooms.length > 0 && dataRooms.map((item) =>
                                <Card title={item.name}
                                      heightValue={100}
                                      content={<CardContent conso={item.conso} />} />
                            )}
                            <Card title={"Ajouter"}
                                  heightValue={100}
                                  content={addRooms} />
                        </div>


                        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
                            <header className="px-5 py-4 border-b border-slate-100">
                                <h2 className="font-semibold text-slate-800">Équipements Top Conso</h2>
                            </header>
                            <div className="p-3">

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
                                        {/* Table header */}
                                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                        <tr>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Nom</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Lieu</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Consommation</div>
                                            </th>
                                        </tr>
                                        </thead>
                                        {/* Table body */}
                                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                                        {/* Row */}
                                        <tr>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <GiWaterDrop size={25}/>
                                                    <div className="pl-4 text-slate-800">Chauffe-eau</div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">Garage</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-red-300">726 KWh/an</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <GiWashingMachine size={25}/>
                                                    <div className="pl-4 text-slate-800">Machine à laver</div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">Garage</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-orange-300">201 KWh/an</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <GiChickenOven size={25}/>
                                                    <div className="pl-4 text-slate-800">Four</div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">Salon</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-orange-300">201 KWh/an</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <BsLightbulb size={25}/>
                                                    <div className="pl-4 text-slate-800">Lumières</div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">Salon</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-green-300">70 KWh/an</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>



                    </div>
                </main>
            </div>

        </div>
    );
}

export default House;
