import { useState } from "react";

export default function Player({initialName,symbol,isActive, onNameChange}){
    const [name, setName] = useState(initialName);
    const [isEdited,isEditing] = useState(false);

    function onClickEditHandler(){
        isEditing(isEdited => !isEdited);
        if(isEdited){
            onNameChange(symbol,name);
        }
        
    }

    function handleOnChange(event){
        setName(event.target.value);
    }

    let player = <span className="player-name" >{name}</span>


    if(isEdited){
        player = (<input type="text"  value={name} required onChange={handleOnChange}/>);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {player}
              <span className="player-symbol">{symbol}</span>
            </span> 
            <button onClick={onClickEditHandler}>{isEdited ? 'save': 'edit'}</button>   
        </li>
    );
}