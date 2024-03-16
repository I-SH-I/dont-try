export type Work = {
    id: string;
    title: string;
    language: Array<string>;
    url: string;
    charge: string;
    imageSrc: string;
};

const data: Work[] = [
    {
        id: 'kiminovel',
        title: 'POPLAR KIMINOVEL',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://www.kiminovel.jp/',
        charge:
            '実装・CMS導入・改修・機能追加・運用保守',
        imageSrc: '/images/cards/kiminovel.png',
    },
    {
        id: 'eli',
        title: 'ELI for Sales Tech',
        language: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
        url: 'https://eli-salestech.com/',
        charge: '改修・機能追加',
        imageSrc: '/images/cards/eli.png',
    },
    {
        id: 'kurukura',
        title: 'KURU KURA',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://kurukura.jp/',
        charge: '実装',
        imageSrc: '/images/cards/kurukura.png',
    },
    {
        id: 'kitan',
        title: 'KITAN CLUB',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://kitan.jp/',
        charge: '実装・CMS導入・改修・機能追加',
        imageSrc: '/images/cards/kitan.jpg',
    },
    {
        id: 'donttry',
        title: "DON'T TRY",
        language: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Vercel'
        ],
        url: '/',
        charge: '実装・更新・デザイン',
        imageSrc: '/images/cards/donttry.png',
    },
    {
        id: 'toroneko',
        title: '#TORONEKO CHALLENGE',
        language: ['Adobe Experienced Manager'],
        url: '',
        charge: '実装',
        imageSrc: '/images/cards/toroneko.webp',
    },
    {
        id: 'mado',
        title: 'MADO',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://mado.cinra.net/',
        charge: '実装・CMS導入',
        imageSrc: '/images/cards/mado.png',
    },
    {
        id: 'big',
        title: 'Bridgestone Innovation Gallery',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'MovableType'],
        url: 'https://www.bridgestone.co.jp/corporate/innovation_gallery/',
        charge: '実装・CMS導入',
        imageSrc: '/images/cards/big.png',
    },
    {
        id: 'hare',
        title: 'HARE',
        language: ['HTML', 'CSS', 'jQuery', 'JavaScript'],
        url: 'https://hare.jp/',
        charge: '実装・CMS導入・改修',
        imageSrc: '/images/cards/hare.jpg',
    },
    {
        id: 'lyrical',
        title: 'lyricalschool',
        language: ['HTML', 'CSS', 'jQuery', 'JavaScript'],
        url: 'https://lyricalschool.com/',
        charge: '実装・CMS導入・改修・運用保守',
        imageSrc: '/images/cards/lyrical.png',
    },
    {
        id: 'xpoint',
        title: 'crosspoint advisers',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://xpoint.jp/',
        charge: '実装・CMS導入',
        imageSrc: '/images/cards/xpoint.png',
    },
    {
        id: 'shiseido',
        title: 'SHISEIDO CREATIVE',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://www.shiseidocreative.com/',
        charge: '実装・CMS導入',
        imageSrc: '/images/cards/shiseido.png',
    },
    {
        id: 'diane',
        title: 'DianeBonheur',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://www.diane-bonheur.com/',
        charge: '改修・機能追加',
        imageSrc: '/images/cards/diane.png',
    },
    {
        id: 'yamakara',
        title: 'Yamakara',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://www.yamakara.com/top/courses',
        charge: '実装',
        imageSrc: '/images/cards/yamakara.webp',
    },
    {
        id: 'g_record',
        title: 'Golden Record',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'http://goldenrecord.cs8.biz/',
        charge: '実装',
        imageSrc: '/images/cards/g_record.png',
    },
    {
        id: 'imaginary',
        title: 'IMAGINARY LINE',
        language: ['HTML', 'CSS', 'JavaScript'],
        url: 'http://imaginary-line.cs8.biz/',
        charge: '実装',
        imageSrc: '/images/cards/imaginary.png',
    },
    {
        id: 'bordering',
        title: 'BORDERING PRACTICE',
        language: ['HTML', 'CSS', 'JavaScript'],
        url: 'http://bordering-practice.cs8.biz/',
        charge: '実装',
        imageSrc: '/images/cards/bordering.png',
    },
];

export default data;
