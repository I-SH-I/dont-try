'use client';

import React, { useState  } from 'react';
import Works from './page';
import styles from './layout.module.scss';

export default function WorksLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');
    
    return (
        <main className={styles.worksArea}>
            <div className={styles.bg} style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
            <Works setBackgroundImageUrl={setBackgroundImageUrl} />
            {props.modal}
        </main>
    );
}
