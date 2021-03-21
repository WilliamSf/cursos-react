import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {

    const { activeChallenge, resetChallenge, completeChallege } = useContext(ChallengesContext);
    const { endCoutdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallege();
        endCoutdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        endCoutdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            onClick={handleChallengeFailed}
                            type="button"
                            className={styles.challegeFailedButton}>
                            Falhei
                        </button>
                        <button
                            onClick={handleChallengeSucceeded}
                            type="button"
                            className={styles.challegeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeBoxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}