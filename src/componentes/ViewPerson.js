import React from "react";

const Viewperson = ({key, name, telefono, deletehandle}) =>{
    console.log(key)
    if(key === undefined)
        return "No hay elementos en la lista"
    return (
        <div>
           <li key={key}>
                Name={name} -- Telefono={telefono}
                <button onClick={deletehandle}> deleteperson</button>
            </li> 
        </div>
    );
}

export default Viewperson;
