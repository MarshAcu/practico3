import { useState } from  'react';

export const SelectionComponent = ({ isReady, onSelectOption }) => {

    //const [selectedValue, setSelectedValue] = useState();
    const selectOption = (value) => {
        //if(!value) return;
        console.log(value.target.id);
        //setSelectedValue(value.target.id);
        onSelectOption(value.target.id);
    }


    return (
        <>
        { isReady && <div className="game_options">
            <div className="zoom" onClick={ selectOption } id='0'>
                <img src="./assets/img/Piedra.png" alt="Piedra" />
            </div>
            <div className="zoom" onClick={ selectOption } id="1">
                <img src="./assets/img/Papel.png" alt="Papel" />
            </div>
            <div className="zoom" onClick={ selectOption } id="2">
                <img src="./assets/img/Tijera.png" alt="Tijera" />
            </div>
        </div>}
        
        </>
        
    )


}