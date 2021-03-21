import { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Coutdown.module.css';

let countdownTimeout: any;

export function Coutdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCoutdown,
        endCoutdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.counterdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={`${styles.coutdownButton}`}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            onClick={endCoutdown}
                            type="button"
                            className={`${styles.coutdownButton} ${styles.coutdownButtonActive}`}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                            onClick={startCoutdown}
                            type="button"
                            className={styles.coutdownButton}>
                            Iniciar um ciclo
                        </button>
                    ) }
                </>
            )}

        </div>
    );
}