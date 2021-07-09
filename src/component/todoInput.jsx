import { useState } from 'react';
import styles from '../App.module.css'
import { v4 as uuid } from 'uuid';
function getDate() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let d = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let timeZone = hour > 12 ? 'PM' : 'AM';
    hour = hour % 12 === 0 ? 12 : hour % 12;
    let objOfdate = {
        year,
        month,
        date: d,
        hour,
        minutes,
        timeZone,
    }
    return objOfdate
}

export function TodoInput({ setTodos, Todos }) {
    let [inputData, setInputData] = useState('');
    function updateInput(e) {
        let payload = {
            status: false,
            content: e.target.value,
            important: false,
        };
        setInputData(payload)

    }
    return (
        <div className={styles.inputArea}>
            <input type="text" name="input" value={inputData === '' ? '' : inputData.content} onChange={updateInput} placeholder="Add notes" />
            <button onClick={() => {
                if (Todos === '' || Todos.content === '') return;
                inputData['id'] = uuid()
                inputData['date'] = getDate()
                let payload = [
                    ...Todos,
                    inputData
                ]
                setTodos(payload);
                setInputData('')
            }}>Add Todo</button>
        </div>
    )
}