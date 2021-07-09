import styles from '../App.module.css'
import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa'




export function TodoList({ Todos, setCompleted, deleteTodo }) {
    return (
        <div className={styles.todosCont}>
            {Todos.map((Todo) => {
                let { year, month, date, hour, minutes, timeZone } = Todo.date;
                return <div className={Todo.status ? styles.completed : styles.todo} onClick={() => setCompleted(Todo.id)} >
                    <div className={styles.icons}>
                        <FaStar />
                    </div>
                    <div className={styles.content}>
                        {Todo.content}
                    </div>
                    <div className={styles.dateCont}>
                        <div className="time">
                            {`${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes} ${timeZone}`}
                        </div>
                        <div className={styles.date}>
                            {`${date < 10 ? '0' + date : date}-${month < 10 ? '0' + month : month}-${year}`}
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <RiCloseCircleLine onClick={(e) => {
                            e.stopPropagation()
                            deleteTodo(Todo.id);
                        }
                        } />
                    </div>
                </div>
            })}
        </div >
    )
}



