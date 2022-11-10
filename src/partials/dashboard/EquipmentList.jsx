import React, {useState} from 'react';
import dataEquip from '../../data/equipement.json'



function EquipmentList() {

  const [setIsToggled] = useState(null);

  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Liste des équipements</h2>
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
                  <div className="font-semibold text-left">Etat</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Conso moy.</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Conso total</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Prix conso</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              {dataEquip && dataEquip.length > 0 && dataEquip.map((item) =>
                  <tr>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800">{item.name}</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <label
                          htmlFor={`default-toggle-${item.id}`}
                          className="inline-flex relative items-center cursor-pointer">
                        <input
                            type="checkbox"
                            defaultChecked={item.state}
                            value=""
                            id={`default-toggle-${item.id}`}
                            className="sr-only peer"
                            onChange={(e) => setIsToggled(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"/>
                      </label>

                      <div className="text-center">{item.state}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.average} kWh</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.total} W</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-green-500">{item.price} €</div>
                    </td>
                  </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default EquipmentList;
