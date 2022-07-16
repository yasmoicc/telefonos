import React from "react";

const Viewperson = ({lista}) =>{
    return (
        <div>
            <ul>
                {lista.map(p => 
                    <li key={p.id}>
                        Name={p.name} -- Telefono={p.number}
                    </li> 
                )}
            </ul>
        </div>
    );
}

export default Viewperson;
