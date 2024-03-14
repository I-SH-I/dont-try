export type Work = {
    id: string;
    title: string;
    language: Array<string>;
    url: string,
    description: string;
    imageSrc: string;
};

const data: Work[] = [
    {
        id: 'kiminovel',
        title: 'ポプラキミノベル',
        language: ['HTML','CSS','JavaScript','WordPress'],
        url: 'https://www.kiminovel.jp/',
        description:
            'ここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入ります',
        imageSrc: '/images/cards/kiminovel.png',
    },
    {
        id: 'eli',
        title: 'ELI for Sales Tech',
        language: ['HTML','CSS','JavaScript','React','TypeScript'],
        url: 'https://eli-salestech.com/',
        description: 'ここに説明が入ります',
        imageSrc: '/images/cards/eli.png',
    },
    {
        id: 'kurukura',
        title: 'KURU KURA',
        language: ['HTML','CSS','JavaScript'],
        url: 'https://kurukura.jp/',
        description: 'ここに説明が入ります',
        imageSrc: '/images/cards/kurukura.png',
    },
    {
        id: 'kitan',
        title: 'キタンクラブ',
        language: ['HTML','CSS','JavaScript','WordPress'],
        url: 'https://kitan.jp/',
        description: 'ここに説明が入ります',
        imageSrc: '/images/cards/kitan.jpg',
    },
    {
        id: 'toroneko',
        title: '#とろねこチャレンジ',
        language: ['Adobe Experienced Manager'],
        url: '',
        description: 'ここに説明が入ります',
        imageSrc: '/images/cards/toroneko.webp',
    },
    {
        id: 'mado',
        title: 'MADO',
        language: ['HTML','CSS','JavaScript','WordPress'],
        url: 'https://mado.cinra.net/',
        description: 'ここに説明が入ります',
        imageSrc: '/images/cards/mado.png',
    },
    {
        id: 'hare',
        title: 'HARE',
        language: ['HTML','CSS','JavaScript'],
        url: 'https://hare.jp/',
        description: 'ここに説明が入ります',
        imageSrc: '/images/cards/hare.jpg',
    },
    {
        id: 'lyrical',
        title: 'lyricalschool',
        language: ['HTML','CSS','JavaScript'],
        url: 'https://lyricalschool.com/',
        description: 'ここに説明が入ります',
        imageSrc: '/images/cards/lyrical.png',
    },
    {
      id: 'xpoint',
      title: '株式会社クロスポイント・アドバイザーズ',
      language: ['HTML','CSS','JavaScript','WordPress'],
      url: 'https://xpoint.jp/',
      description: 'ここに説明が入ります',
      imageSrc: '/images/cards/xpoint.png',
  },
  {
    id: 'shiseido',
    title: 'SHISEIDO CREATIVE',
    language: ['HTML','CSS','JavaScript'],
    url: 'https://www.shiseidocreative.com/',
    description: 'ここに説明が入ります',
    imageSrc: '/images/cards/shiseido.png',
},
{
  id: 'diane',
  title: 'DianeBonheur',
  language: ['HTML','CSS','JavaScript'],
  url: 'https://www.diane-bonheur.com/',
  description: 'ここに説明が入ります',
  imageSrc: '/images/cards/diane.png',
},
{
  id: 'yamakara',
  title: 'Yamakara',
  language: ['HTML','CSS','JavaScript'],
  url: 'https://www.yamakara.com/top/courses',
  description: 'ここに説明が入ります',
  imageSrc: '/images/cards/yamakara.webp',
},
{
  id: 'g_record',
  title: 'Golden Record',
  language: ['HTML','CSS','JavaScript'],
  url: 'http://goldenrecord.cs8.biz/',
  description: 'ここに説明が入ります',
  imageSrc: '/images/cards/g_record.png',
},
];

export default data;
