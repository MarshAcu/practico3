import { useState } from "react";



/** Componente input que obtiene el nombre del jugador */
export function FormComponent({ onNewPlayer }) {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {

        event.preventDefault();
        if(inputValue.trim().length < 1) return;
        setInputValue('');
        onNewPlayer(inputValue.trim());
    }

    return (
        <form
            onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Ingrese nombre de jugador"
                    value={inputValue}
                    onChange={onInputChange}
                />
        </form>
    )

}