import styles from '../App.module.css'

export function NavBar({ showOnlyCompleted, Name1 ,showOnlyImp,Name2}) {
    return <>
        <div className={styles.todoAppLeft}>
            <button onClick={() => {
                showOnlyCompleted()
            }}>{Name1}</button>
            <button onClick={() => {
                console.log('yo')
                showOnlyImp()
            }}>{ Name2 }</button>
        </div>
    </>
}