import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';

export default function Card({
    id,
    title,
    imageSrc,
    classNames,
}: {
    id: string;
    title: string;
    imageSrc: string;
    classNames: Array<string>;
}) {
    return (
        <Link href={`/works/${id}`} className={`${styles.card} ${classNames ? classNames.map(name => styles[name]).join(' ') : ''}`} style={{ backgroundImage: `url(${imageSrc})` }}></Link>
    );
}
