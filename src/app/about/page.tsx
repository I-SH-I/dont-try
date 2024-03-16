'use client';

import React, { useEffect, useRef } from 'react';
import styles from './page.module.scss';

export default function About({}) {
    const profile = [
        { title: 'NAME', desc: 'Tokio Ishii' },
        { title: 'BORN', desc: '1993.09' },
        {
            title: 'SKILL',
            desc: 'HTML(pug), CSS(SCSS), JavaScript, jQuery, TypeScript, React, Next.js, Vue.js, WordPress, PHP, Gulp, Node.js, Vercel',
        },
        {
            title: 'TOOL',
            desc: 'Photoshop, Adobe XD, Illustrator, VScode, Github',
        },
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
                    <div className={styles.comment}>
                        <p>2018年、独学でHTML/CSS/JavaScriptを学びながらアルバイトとしてウェブ制作を開始。2019年より吉祥寺の制作会社にてコーディング業務を担当。</p>
                        <p>UI/UX系の実装経験が豊富。</p>
                    </div>
                </dl>
            </div>
        </>
    );
}
