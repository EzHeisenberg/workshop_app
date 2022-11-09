import React from 'react';

function CardContent({temp, conso}) {


    return (
        <div className="flex flex-col text-center gap-4">
            <div className="hover:text-purple-500">{conso}</div>
        </div>
    );
}

export default CardContent;