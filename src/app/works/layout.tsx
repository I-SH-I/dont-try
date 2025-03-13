'use client';

import React, { use } from 'react';
import styles from './layout.module.scss';

export default function WorksLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    const children = use(props.children);
    return (
        <main className={styles.worksArea}>
            {children}
            {modal}
        </main>
    );
}
