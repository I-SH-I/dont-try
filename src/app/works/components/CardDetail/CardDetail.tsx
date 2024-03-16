import Image from 'next/image';
import { Work } from '../../../data';
import styles from './CardDetail.module.scss';

export default function CardDetail({ data }: { data: Work }) {
    return (
        <div className="p-10 w-50 bg-white rounded-lg flex flex-col border-gray-700 border-2">
            {data.url ? (
                <a className={styles.image} href={data.url} target="_blank">
                    <Image
                        alt=""
                        src={data.imageSrc}
                        height={600}
                        width={800}
                        className="col-span-2 mb-6 center"
                    />
                </a>
            ) : (
                <Image
                    alt=""
                    src={data.imageSrc}
                    height={600}
                    width={800}
                    className="col-span-2 mb-6 center"
                />
            )}
            <div className={styles.text}>
                {data.url ? (
                    <a href={data.url} target="_blank" className={styles.title}>
                        {data.title}
                    </a>
                ) : (
                    <h2 className={styles.title}>{data.title}</h2>
                )}
                <p className={styles.language}>{data.language.join(' / ')}</p>
                {data.charge && (
                    <p className={styles.desc}>{data.charge}</p>
                )} 
            </div>
        </div>
    );
}
