import styles from '../styles/alert.module.css'
import cln_m from 'classnames' 


export default function Alert({ children, type }) {
    return (
        <div
            className={cln_m({
                [styles.success]: type === 'success', //or [styles.success] : true
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}