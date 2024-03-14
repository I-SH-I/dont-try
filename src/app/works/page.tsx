'use client';

import React, { useState, useEffect, useRef } from 'react';
import swagData from '../data';
import Card from './components/Card/Card';
import styles from './page.module.scss';

export default function Works({ setBackgroundImageUrl }) {
    const data = swagData;
    const containerRef = useRef(null);
    const [layoutPatterns, setLayoutPatterns] = useState<Array<Array<string>>>([]);

    useEffect(() => {
        const patterns = [
            { name: 'col-2-a', columns: 2 },
            { name: 'col-2-b', columns: 2 },
            { name: 'col-2-c', columns: 2 },
            { name: 'col-3-a', columns: 3 },
        ];
        let cardLayouts: Array<Array<string>> = [];

        for (let i = 0; i < data.length; ) {
            const { name, columns } =
                patterns[Math.floor(Math.random() * patterns.length)];
            let rowItemCount = 1;
            Array.from({ length: columns }).forEach(() => {
                if (i < data.length) {
                    cardLayouts.push(['col-'+columns, name+'-'+rowItemCount]);
                    i++;
                    rowItemCount++;
                }
            });
        }
        setLayoutPatterns(cardLayouts);
    }, [data]);

    return (
        <>
            <div ref={containerRef} className={styles.container}>
                {data.map(({ id, title, imageSrc }, index) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        imageSrc={imageSrc}
                        classNames={layoutPatterns[index]}
                        onHover={() => setBackgroundImageUrl(imageSrc)}
                        offHover={() => setBackgroundImageUrl('')}
                    />
                ))}
            </div>
        </>
    );
}
