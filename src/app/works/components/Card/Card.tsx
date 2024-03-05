import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';

export default function Card({
    id,
    title,
    imageSrc,
    style,
}: {
    id: string;
    title: string;
    imageSrc: string;
    style?: React.CSSProperties;
}) {
    return (
        <Link href={`/works/${id}`} className={styles.cardLocate} style={style}>
            <div className={styles.card}>
                <Image
                    alt=""
                    src={imageSrc}
                    height={300}
                    width={400}
                />
                {/* <h2 className={styles.title}>{title}</h2> */}
            </div>
        </Link>
    );
}
