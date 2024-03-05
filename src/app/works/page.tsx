import swagData from '../data';
import Card from './components/Card/Card';
import styles from './page.module.scss';

export default function Works() {
    const data = swagData;
    return (
        <div className={styles.container}>
            {data.map(({ id, title, imageSrc }, index) => {
                function getRandomValue(min: number, max: number): number {
                    return Math.random() * (max - min) + min;
                }
                let marginTop = 0;
                if (index) {
                  marginTop = getRandomValue(300, 1000);
                } else {
                  // 1枚目はKVに収まるように
                  marginTop = getRandomValue(200, 300);
                }
                const translate = getRandomValue(-50, 50);
                const rotate = getRandomValue(-80, 80);

                return (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        imageSrc={imageSrc}
                        style={{ marginTop: `${marginTop}px`, transform: `translate(${translate}%) rotate(${rotate}deg)` }}
                    ></Card>
                );
            })}
        </div>
    );
}
