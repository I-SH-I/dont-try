export type Work = {
    id: string;
    title: string;
    language: Array<string>;
    url: string;
    charge: string;
    imageSrc: string;
    productImages: Array<string>;
};

const data: Work[] = [
    {
        id: 'quiz',
        title: 'Alas!',
        language: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
        ],
        url: '',
        charge: '企画・デザイン・実装',
        imageSrc: 'quiz.png',
        productImages: ['alas_1.png', 'alas_2.png', 'alas_3.png'],
    },
    {
        id: 'ado',
        title: 'Niconico × Ado',
        language: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        url: 'https://site.nicovideo.jp/niconico_ado/',
        charge: '実装',
        imageSrc: 'ado.png',
        productImages: [],
    },
    {
        id: 'kiminovel',
        title: 'POPLAR KIMINOVEL',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://www.kiminovel.jp/',
        charge: '実装・CMS導入・改修・機能追加・運用保守',
        imageSrc: 'kiminovel.png',
        productImages: [],
    },
    {
        id: 'eli',
        title: 'ELI for Sales Tech',
        language: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
        url: 'https://eli-salestech.com/',
        charge: '改修・機能追加',
        imageSrc: 'eli.png',
        productImages: [],
    },
    {
        id: 'kurukura',
        title: 'KURU KURA',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://kurukura.jp/',
        charge: '実装',
        imageSrc: 'kurukura.png',
        productImages: [],
    },
    {
        id: 'kitan',
        title: 'KITAN CLUB',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://kitan.jp/',
        charge: '実装・CMS導入・改修・機能追加',
        imageSrc: 'kitan.jpg',
        productImages: [],
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
            'Vercel',
        ],
        url: '/',
        charge: '実装・更新・デザイン',
        imageSrc: 'donttry.png',
        productImages: [],
    },
    {
        id: 'toroneko',
        title: '#TORONEKO CHALLENGE',
        language: ['Adobe Experienced Manager'],
        url: '',
        charge: '実装',
        imageSrc: 'toroneko.webp',
        productImages: [],
    },
    {
        id: 'mado',
        title: 'MADO',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://mado.cinra.net/',
        charge: '実装・CMS導入',
        imageSrc: 'mado.png',
        productImages: [],
    },
    {
        id: 'big',
        title: 'Bridgestone Innovation Gallery',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'MovableType'],
        url: 'https://www.bridgestone.co.jp/corporate/innovation_gallery/',
        charge: '実装・CMS導入',
        imageSrc: 'big.png',
        productImages: [],
    },
    {
        id: 'hare',
        title: 'HARE',
        language: ['HTML', 'CSS', 'jQuery', 'JavaScript'],
        url: 'https://hare.jp/',
        charge: '実装・CMS導入・改修',
        imageSrc: 'hare.jpg',
        productImages: [],
    },
    {
        id: 'lyrical',
        title: 'lyricalschool',
        language: ['HTML', 'CSS', 'jQuery', 'JavaScript'],
        url: 'https://lyricalschool.com/',
        charge: '実装・CMS導入・改修・運用保守',
        imageSrc: 'lyrical.png',
        productImages: [],
    },
    {
        id: 'xpoint',
        title: 'crosspoint advisers',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
        url: 'https://xpoint.jp/',
        charge: '実装・CMS導入',
        imageSrc: 'xpoint.png',
        productImages: [],
    },
    {
        id: 'shiseido',
        title: 'SHISEIDO CREATIVE',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://www.shiseidocreative.com/',
        charge: '実装・CMS導入',
        imageSrc: 'shiseido.png',
        productImages: [],
    },
    {
        id: 'diane',
        title: 'DianeBonheur',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://www.diane-bonheur.com/',
        charge: '改修・機能追加',
        imageSrc: 'diane.png',
        productImages: [],
    },
    {
        id: 'yamakara',
        title: 'Yamakara',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'https://www.yamakara.com/top/courses',
        charge: '実装',
        imageSrc: 'yamakara.webp',
        productImages: [],
    },
    {
        id: 'g_record',
        title: 'Golden Record',
        language: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        url: 'http://goldenrecord.cs8.biz/',
        charge: '実装',
        imageSrc: 'g_record.png',
        productImages: [],
    },
    {
        id: 'imaginary',
        title: 'IMAGINARY LINE',
        language: ['HTML', 'CSS', 'JavaScript'],
        url: 'http://imaginary-line.cs8.biz/',
        charge: '実装',
        imageSrc: 'imaginary.png',
        productImages: [],
    },
    {
        id: 'bordering',
        title: 'BORDERING PRACTICE',
        language: ['HTML', 'CSS', 'JavaScript'],
        url: 'http://bordering-practice.cs8.biz/',
        charge: '実装',
        imageSrc: 'bordering.png',
        productImages: [],
    },
];

export default data;
