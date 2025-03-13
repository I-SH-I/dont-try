'use client';

import React from 'react';
import styles from './layout.module.scss';

export default function WorksLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <main className={styles.worksArea}>
            {props.children}
            {props.modal}
        </main>
    );
}
