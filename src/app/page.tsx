import Image from 'next/image';
import styles from './page.module.scss';
import MenuItem from './components/Menu/Menu';

export default function Home() {
    const menuItems = [
        { label: 'ABOUT', url: 'about', position: ['top', 'right', '50%', '-50%'] },
        { label: 'WORKS', url: 'works', position: ['bottom', 'left', '-50%', '50%'] },
    ];
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>DON&#39;T TRY</h1>
            {menuItems.map(({ label, url, position }, index) => (
                <MenuItem
                    key={index}
                    label={label}
                    url={url}
                    position={position}
                ></MenuItem>
            ))}
        </main>
    );
}
