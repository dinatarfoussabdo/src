
import React, { useRef, useState } from "react";
import AddToList from "./AddToList";
import "./styl.css";

function App(){
    const [searchName,setSearchName] = useState("");
    const [searching,setSearching] = useState(false);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [infos,setInfos] = useState([])
    const nameRef = useRef("");
    const emailref = useRef("");
    const numberref = useRef("");
    const ajouter = (e)=>{
        e.preventDefault()
        setInfos([...infos,{name: name, email: email, number: number}]);
        e.target.elements.FullName.value = "";  // Pour vide  input (name) apres ajoutation d'un elm
       emailref.current.value = "";              // Pour vide  input (email) apres ajoutation d'un elm
        numberref.current.value = "";           // Pour vide  input (number) apres ajoutation d'un elm
        setSearching(false)
    }


    const Recherche =()=>{
        setSearching(true);
        document.getElementsByClassName("th-Spcial")[0].remove();
       
    }

    
    return(
        <>
        <div className="container">
            <form className="d-flex" onSubmit={(e)=>ajouter(e)}>
                <input className="form-control m-4" type="text" name="FullName" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} ref={nameRef}/>
                <input className="form-control m-4" type="text" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} ref={emailref}/>
                <input className="form-control m-4" type="text" name="number" placeholder="number" onChange={(e)=>setNumber(e.target.value)} ref={numberref}/>
                <button className="btn btn-danger m-4" type="submit">Add</button>
            </form>
            <div className="divsearch d-flex justify-content-center bg-dark">
                <input className="form-control m-4 w-50" type="text" placeholder="search out of name" onChange={(e)=>setSearchName(e.target.value)}/>
                <button className="btn btn-danger m-4" onClick={Recherche}>Search</button>
            </div>
            <table className="table table-bordered mt-5 bg-danger text-light">
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th className="text-center th-Spcial" colSpan="2">Actions</th>
                </tr>
                {searching === true ?  infos.map( info => searchName === info.name && <tr>
                                                                                    <td>{info.name}</td>
                                                                                    <td>{info.email}</td>
                                                                                    <td>{info.number}</td>
                                                                                   </tr> 
                                                                                    ) :<AddToList infos = {infos} setInfos = {setInfos}/>   }
                
            </table>
        </div>
        </>
    )
}

export default App;
