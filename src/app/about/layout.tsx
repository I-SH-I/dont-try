import styles from './layout.module.scss';
import BackToTop from '../components/BackToTop/BackToTop';

export default function AboutLayout(props: {
    children: React.ReactNode;
}) {
    return (
        <main className={styles.AboutArea}>
            {props.children}
            <BackToTop position={'left'}></BackToTop>
        </main>
    );
}
