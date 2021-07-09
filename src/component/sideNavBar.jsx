import styles from '../App.module.css'

export function NavBar({ showOnlyCompleted, Name }) {
    return <>
        <div className={styles.todoAppLeft}>
            <button onClick={() => {
                showOnlyCompleted()
            }}>{Name}</button>
            <button>Show only Important tasks</button>
        </div>
    </>
}