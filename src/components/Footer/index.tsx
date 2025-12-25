import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>Chronos Pomodoro &Copy; {new Date().getFullYear()} </a>
    </footer>
  );
}
