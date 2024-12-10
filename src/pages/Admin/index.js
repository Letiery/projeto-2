import { useState } from 'react'
import './admin.css'

export default function Admin(){
    const [tarefaInput, setTarefaInput] = useState('')
    
    function handleRegister(e){
        e.preventDefault();
        
        alert()
    }

    return(
        <div className='admin-container'>
            <h1>Minhas tarefas</h1>

            <form className="form" onSubmit={handleRegister}>
                <textarea
                    placeholder='Digite sua tarefa...'
                    value={tarefaInput}
                    onChange={(e)=> setTarefaInput(e.target.value)}
                />

                <button className="btn-register" type="submit">Registrar tarefa</button>
            </form>

            <article className='list'>
                <p>Estudar javascript e reactjs</p>
                <div>
                    <button>Editar</button>
                    <button className='btn-delete'>Concluir</button>
                </div>
            </article>

            <button className='btn-logout'>Sair</button>

        </div>
    )
}