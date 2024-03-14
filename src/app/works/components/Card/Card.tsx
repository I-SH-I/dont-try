import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';

export default function Card({
    id,
    title,
    imageSrc,
    classNames,
    onHover,
    offHover,
}: {
    id: string;
    title: string;
    imageSrc: string;
    classNames: Array<string>;
    onHover: React.MouseEventHandler<HTMLAnchorElement>;
    offHover: React.MouseEventHandler<HTMLAnchorElement>;
}) {
    return (
        <Link href={`/works/${id}`} onMouseEnter={onHover} onMouseLeave={offHover} className={`${styles.card} ${classNames ? classNames.map(name => styles[name]).join(' ') : ''}`} style={{ backgroundImage: `url(${imageSrc})` }}></Link>
    );
}
