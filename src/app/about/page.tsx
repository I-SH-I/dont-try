'use client';

import React, { useEffect, useRef } from 'react';
import styles from './page.module.scss';

export default function About({ }) {
    const profile = [
        {title: 'NAME', desc: 'Tokio Ishii'},
        {title: 'BORN', desc: '1993.09'},
        {title: 'SKILL', desc: 'HTML / CSS / JavaScript / TypeScript / React / Next.js / WordPress'},
        {title: 'TOOL', desc: 'Photoshop / Adobe XD / Illustrator / VScode / Github'},
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.classList.add('slideIn');
        }
    });
    return (
        <>
            <div ref={containerRef} className={styles.container}>
                <dl className={styles.profile}>
                    {profile.map(({ title, desc }, index) => (
                        <div className={styles.profileRow} key={index}>
                            <dt>{title} :</dt>
                            <dd>{desc}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    );
}
