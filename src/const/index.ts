export const NAV_LINKS: navLinkProps[] = [
  {
    id: 1,
    label: 'home',
    link: '/'
  },
  {
    id: 2,
    label: 'tentang kami',
    link: '/about'
  },
  {
    id: 3,
    label: 'layanan',
    link: '#',
    dropDownLink: [
      {
        id: 'jasa-pembuatan-website',
        label: 'jasa pembuatan website',
        link: '/service/jasa-pembuatan-website'
      },
      {
        id: 'seo-bergaransi',
        label: 'seo bergaransi',
        link: '/service/seo-bergaransi'
      },
      {
        id: 'iklan-google-ads',
        label: 'iklan google ads',
        link: '/service/iklan-google-ads'
      },
      {
        id: 'creative-digital-agency',
        label: 'creative digital agency',
        link: '/service/creative-digital-agency'
      },
    ]
  },
  {
    id: 4,
    label: 'faq',
    link: '/faq'
  },
  {
    id: 5,
    label: 'klien kami',
    link: '/client'
  },
  {
    id: 6,
    label: 'kontak',
    link: '/contact'
  },
]

export const OUR_SERVICES:linkProps[] = [
      {
        id: 'jasa-pembuatan-website',
        label: 'jasa pembuatan website',
        link: '/service/jasa-pembuatan-website'
      },
      {
        id: 'seo-bergaransi',
        label: 'seo bergaransi',
        link: '/service/seo-bergaransi'
      },
      {
        id: 'iklan-google-ads',
        label: 'iklan google ads',
        link: '/service/iklan-google-ads'
      },
      {
        id: 'creative-digital-agency',
        label: 'creative digital agency',
        link: '/service/creative-digital-agency'
      },
]

export const PACKAGE:packageProps = {
    id: 1,
    label: 'silver',
    icon: '/image/SILVER.png',
    desc: 'Cocok untuk  yang baru memulai bisnis dan membutuhkan website sederhana yang mudah diakses.',
    price: 'Rp. 500rb',
    extention: 'perpanjangan 500rb',
    feature: [
      '4 menu',
      'free domain',
      'Hosting 500 MB (30 foto kuota kerja)',
      'Integrasi Sosial Media',
      'Website SSL',
      'Template WP Premium',
      'User + Video Panduan Edit',
      'Server Rata-Rata 5 Mili Detik',
      'Bandwidth Unlimited',
      'Standar Kontak Form',
      'Free Support',
      'Bergaransi Selamanya'
    ]
  }

export const TEAMS = [
  {
    id:1,
    label: 'tim server',
    image: '/image/TIM-WEB-DESIGN.jpg'
  },
  {
    id:2,
    label: 'tim web design',
    image: '/image/TIM-WEB-DESIGN.jpg'
  },
  {
    id:3,
    label: 'tim marketing',
    image: '/image/TIM-WEB-DESIGN.jpg'
  },
  {
    id:4,
    label: 'tim ADS',
    image: '/image/TIM-WEB-DESIGN.jpg'
  },
  {
    id:5,
    label: 'tim SEO',
    image: '/image/TIM-WEB-DESIGN.jpg'
  },
]

export const FEATURES = [
  {
    id: 1,
    title: 'free konsultasi 24 jam',
    desc: 'Pelayanan maksimal dan Solusi Cerdas untuk Website, Software, SEO, IT Harga Terjangkau'
  },
  {
    id: 2,
    title: 'free domain + SSL',
    desc: 'Gratis domain dan SSL (HTTPS) supaya website lebih aman dan terenkripsi.'
  },
  {
    id: 3,
    title: 'free logo + banner',
    desc: 'Gratis desain logo dan banner untuk website sesuai dengan bidang bisnisnya.'
  },
  {
    id: 4,
    title: 'free maintenance',
    desc: 'Jaminan keamanan Website, pasti tanpa Malware dan beroperasi secara optimal.'
  },
  {
    id: 5,
    title: 'free 3 artikel',
    desc: 'Gratis 3 artikel SEO Friendly konten 100% original dibuat tim SEO Profesional.'
  },
  {
    id: 6,
    title: 'dukungan pelanggan',
    desc: 'Tim kami siap melayani Anda 24 jam penuh dengan melalui chat whatsapp.'
  }
]

export const DIGITAL_SERVICES = [
  {
    id: 1,
    label: 'SEO',
    desc: 'Tingkatkan Visibilitas Anda di Mesin Pencari dengan Layanan SEO Kami!',
    detail: 'Di Danzstore, kami mengoptimalkan website Anda untuk memastikan bahwa bisnis Anda muncul di puncak hasil pencarian Google. Dengan strategi SEO yang efektif dan teknik terbaru, kami membantu Anda menarik lebih banyak pengunjung dan mendapatkan pelanggan baru.',
    price: 'Rp 600rb / bulan'
  },
  {
    id: 2,
    label: 'iklan ads',
    desc: 'Capai Target Audiens Anda Secara Tepat dengan Iklan Google Ads!',
    detail: 'Danzstore mengelola kampanye Google Ads yang dirancang untuk meningkatkan visibilitas online dan mengarahkan traffic berkualitas tinggi ke website Anda. Kami mengoptimalkan iklan Anda untuk memastikan hasil yang maksimal dengan anggaran yang efisien',
    price: 'Rp 50rb / hari'
  },
  {
    id: 3,
    label: 'sosmed',
    desc: 'Raih Lebih Banyak Pelanggan dengan Iklan Sosial Media yang Efektif!',
    detail: 'Dari Facebook hingga Instagram, Danzstore mengelola kampanye iklan sosial media yang dirancang untuk menarik perhatian audiens target Anda dan meningkatkan keterlibatan. Kami membuat iklan yang kreatif dan relevan untuk membantu bisnis Anda tumbuh di platform sosial media.',
    price: 'Rp Custom / bulan'
  },
  {
    id: 4,
    label: 'design',
    desc: 'Desain dan Layanan Kreatif untuk Berbagai Bidang Bisnis Anda!',
    detail: 'Danzstore menawarkan berbagai layanan kreatif mulai dari desain grafis hingga dukungan marketing digital. Kami siap untuk membantu Anda menciptakan konten visual yang menarik dan strategi pemasaran yang efektif untuk mendukung pertumbuhan bisnis & perusahaan Anda.',
    price: 'Rp Custom / item'
  },
]