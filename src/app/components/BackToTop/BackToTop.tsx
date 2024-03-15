'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import styles from './BackToTop.module.scss';

export default function MenuItem({
    position,
}: {
    position: string;
}) {
    const areaRef = useRef<HTMLAnchorElement>(null);
    const areaPos = {
        [position]: 0,
    };
    const router = useRouter();
    const animation = (event) => {
        event.preventDefault();
        if (areaRef.current) {
            areaRef.current.classList.add('slideOut');
        }
        setTimeout(()=>{
            router.push('/');
        }, 1000)
    };
    
    return (
        <Link ref={areaRef} onClick={(animation)} href={'/'} className={styles.area} style={areaPos}>
            <figure className={styles.item} style={areaPos}></figure>
        </Link>
    );
}