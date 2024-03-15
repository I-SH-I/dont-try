import Link from 'next/link';
import styles from './Menu.module.scss';

export default function MenuItem({
    label,
    url,
    position,
}: {
    label: string;
    url: string;
    position: Array<string>;
}) {
    const areaPos = {
        [position[0]]: 0,
        [position[1]]: 0,
    };
    const labelPos = {
        [position[0]]: '20px',
        [position[1]]: '20px',
    };
    const itemPos = {
        [position[0]]: 0,
        [position[1]]: 0,
        transform: `translate(${position[2]}, ${position[3]}) rotate(45deg)`,
    };
    return (
        <Link href={`/${url}`} className={styles.area}  style={areaPos}>
            <div className={styles.item} style={itemPos}>
            </div>
            <p className={styles.label} style={labelPos}>{label}</p>
        </Link>
    );
}