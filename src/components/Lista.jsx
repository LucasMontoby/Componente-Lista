import React, {useState} from 'react';

function Lista () {
    const [tarea, setTarea] = useState([]);
    const [inputValue, SetInputValue] = useState('');

    const change = (event) => {
        SetInputValue(event.target.value);
    }

    const submit = (event) =>{
        event.preventDefault();
            setTarea([...tarea, inputValue])
            SetInputValue('')
        }

    return(
        <div>
            <h1>Lista de Tareas</h1>
            <form onSubmit={submit}> 
                <label htmlFor="task">Nueva tarea: </label>
                <br/>
                <input type='text' id='task' value={inputValue} onChange={change} />
                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {tarea.map((tarea, item)=>(
                    <li key={item}>{tarea}</li>
                ))}
            </ul>
        </div>
    )

}

export default Lista;