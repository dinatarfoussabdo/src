import React, { useState } from "react";

function EditList(props){
    const [name,setName] = useState(props.elmEdited.name);
    const [email,setEmail] = useState(props.elmEdited.email);
    const [number,setNumber] = useState(props.elmEdited.number);
    const Modifier = ()=>{
        props.setEditClicked(false);
        props.infos.map(info=> props.elmEdited === info && (info.name = name, info.email = email, info.number = number))
    }
    return(
        props.infos.map(elm => elm === props.elmEdited && 
                    <tr>
                        <td><input className="form-control bg-light" type="text" placeholder="write new name" onChange={(e)=>setName(e.target.value)} value={name} /></td>
                        <td><input className="form-control bg-light" type="text" placeholder="write new email"  onChange={(e)=>setEmail(e.target.value)} value={email}/></td>
                        <td><input className="form-control bg-light" type="text" placeholder="write new number" onChange={(e)=>setNumber(e.target.value)} value={number}/></td>
                        <td><button className="btn btn-light bg-light" onClick={Modifier}>Edit</button></td>
                   </tr> 
    )
    )
}
export default EditList;
