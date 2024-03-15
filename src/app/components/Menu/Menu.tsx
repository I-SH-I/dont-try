"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import styles from './Menu.module.scss';

export default function MenuItem({
    label,
    url,
    position,
}: {
    label: string;
    url: string;
    position: Array<string>;
}) {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const areaPos = {
        [position[0]]: 0,
        [position[1]]: 0,
    };
    const labelPos = {
        [position[0]]: '20px',
        [position[1]]: '20px',
        transformOrigin: `${position[0]} ${position[1]}`,
    };
    const itemPos = {
        [position[0]]: 0,
        [position[1]]: 0,
        transform: `translate(${position[2]}, ${position[3]}) rotate(45deg)`,
    };
    const router = useRouter();
    const animation = (event) => {
        event.preventDefault();
        if (linkRef.current) {
            linkRef.current.classList.add('slideIn');
        }
        setTimeout(()=>{
            router.push('/'+url);
        }, 1000)
    };

    return (
        <Link ref={linkRef} onClick={(animation)} href={`/${url}`} className={styles.area}  style={areaPos}>
            <div className={styles.item} style={itemPos}></div>
            <p className={styles.label} style={labelPos}>{label}</p>
        </Link>
    );
}