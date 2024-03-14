'use client';

import React, { useState, useEffect, useRef } from 'react';
import swagData from '../data';
import Card from './components/Card/Card';
import styles from './page.module.scss';

export default function Works() {
    const data = swagData;
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [key, setKey] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    // ボタンがクリックされたときに実行される関数
    const replaceCards = () => {
        if (containerRef.current) {
            containerRef.current.classList.add('shuffle');

            setTimeout(() => {
                containerRef.current.classList.remove('shuffle');
                setKey(prevKey => prevKey + 1);
            }, 1000);
        }
    };

    return (
        <>
            <button className={styles.replaceButton} onClick={replaceCards}>カードを再配置</button>
            <div ref={containerRef} className={styles.container} key={key}>
                {data.map(({ id, title, imageSrc }, index) => {
                    function getRandomValue(min: number, max: number): number {
                        return Math.random() * (max - min) + min;
                    }
                    const cardWidth = 450;
                    const cardHeight = 253.125;
                    const diagonal = Math.sqrt( cardWidth * cardWidth + cardHeight * cardHeight ); // カード回転時の対角線の長さ
                    const ww = windowSize.width;
                    const wh = windowSize.height;
                    const cardX = getRandomValue(-diagonal / 2, ww - diagonal / 2);
                    const cardY = getRandomValue(-diagonal / 2, wh - diagonal / 2);
                    const translateX = getRandomValue(ww, ww * 2);
                    const rotate = getRandomValue(-360, 360);

                    return (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            imageSrc={imageSrc}
                            style={{
                                left: `${cardX}px`,
                                top: `${cardY}px`,
                                /* transform: `translateX(-${translateX}%)`,*/
                            }}
                            rotate={{
                                transform: `rotate(${rotate}deg)`,
                            }}
                        ></Card>
                    );
                })}
            </div>
        </>
    );
}
