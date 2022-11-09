import React, { useRef, useEffect } from 'react';

import {
    Chart, DoughnutController, ArcElement, TimeScale, Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';

// Import utilities
import { tailwindConfig } from '../utils/Utils';

Chart.register(PolarAreaChart, ArcElement, TimeScale, Tooltip);

function PolarAreaChart({data, width, height}) {

    const canvas = useRef(null);
    const legend = useRef(null);

    useEffect(() => {
        const ctx = canvas.current;
        // eslint-disable-next-line no-unused-vars
        const chart = new Chart(ctx, {
            type: 'polarArea',
            data: data,
            options: {
                responsive: true,
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 18
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Polar Area Chart With Centered Point Labels'
                    }
                }
            }
        });
        return () => chart.destroy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="grow flex flex-col justify-center">
            <div>
                <canvas ref={canvas} width={width} height={height}/>
            </div>
            <div className="px-5 pt-2 pb-6">
                <ul ref={legend} className="flex flex-wrap justify-center -m-1"></ul>
            </div>
        </div>
    );
}

export default PolarAreaChart;