export const preferenceOptions = [
  { id: "nature", label: "Alam", icon: "Mountain" },
  { id: "culture", label: "Budaya", icon: "Landmark" },
  { id: "culinary", label: "Kuliner", icon: "Utensils" },
  { id: "history", label: "Sejarah", icon: "ScrollText" },
  { id: "beach", label: "Pantai", icon: "Waves" },
  { id: "adventure", label: "Petualangan", icon: "Compass" }
];

export const routeOriginCatalog = [
  { label: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { label: "Bogor", lat: -6.595, lng: 106.8167 },
  { label: "Bandung", lat: -6.9175, lng: 107.6191 },
  { label: "Semarang", lat: -6.9667, lng: 110.4167 },
  { label: "Yogyakarta", lat: -7.7956, lng: 110.3695 },
  { label: "Surabaya", lat: -7.2575, lng: 112.7521 },
  { label: "Malang", lat: -7.9666, lng: 112.6326 },
  { label: "Denpasar", lat: -8.6705, lng: 115.2126 },
  { label: "Mataram", lat: -8.5833, lng: 116.1167 },
  { label: "Kupang", lat: -10.1772, lng: 123.607 },
  { label: "Medan", lat: 3.5952, lng: 98.6722 },
  { label: "Padang", lat: -0.9471, lng: 100.4172 },
  { label: "Palembang", lat: -2.9761, lng: 104.7754 },
  { label: "Pontianak", lat: -0.0263, lng: 109.3425 },
  { label: "Balikpapan", lat: -1.2379, lng: 116.8529 },
  { label: "Samarinda", lat: -0.5022, lng: 117.1536 },
  { label: "Banjarmasin", lat: -3.3186, lng: 114.5944 },
  { label: "Makassar", lat: -5.1477, lng: 119.4327 },
  { label: "Manado", lat: 1.4748, lng: 124.8421 },
  { label: "Kendari", lat: -3.9985, lng: 122.512 },
  { label: "Ambon", lat: -3.6547, lng: 128.1903 },
  { label: "Jayapura", lat: -2.5337, lng: 140.7181 },
  { label: "Kuala Lumpur", lat: 3.139, lng: 101.6869 },
  { label: "Singapore", lat: 1.3521, lng: 103.8198 },
  { label: "Bangkok", lat: 13.7563, lng: 100.5018 },
  { label: "Manila", lat: 14.5995, lng: 120.9842 },
  { label: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 },
  { label: "Hanoi", lat: 21.0278, lng: 105.8342 },
  { label: "Phnom Penh", lat: 11.5564, lng: 104.9282 },
  { label: "Vientiane", lat: 17.9757, lng: 102.6331 },
  { label: "Tulis manual", lat: null, lng: null }
];

export const destinations = [
  {
    id: "wae-rebo",
    name: "Wae Rebo",
    country: "Indonesia",
    province: "Nusa Tenggara Timur",
    region: "Manggarai, Flores",
    heroLabel: "Desa adat di atas awan",
    categories: ["culture", "nature", "history", "slow-travel"],
    travelStyle: ["homestay", "trekking", "village"],
    budget: "mid",
    pace: "slow",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=82",
    description:
      "Desa adat berbentuk kerucut di pegunungan Manggarai. Cocok untuk wisatawan yang ingin tidur di rumah adat, berjalan kaki melewati hutan, dan memahami pola hidup komunal.",
    shortDescription:
      "Rumah adat Mbaru Niang, homestay komunal, dan trekking ringan di dataran tinggi Flores.",
    location: {
      lat: -8.7715,
      lng: 120.2908,
      label: "Desa Satar Lenda, Manggarai"
    },
    bestSeason: "April-November",
    culturalInsight: {
      history:
        "Wae Rebo dikenal karena arsitektur Mbaru Niang dan tata ruang kampung melingkar yang menjaga hubungan keluarga, leluhur, dan alam.",
      traditions: ["Waelu'u sebagai ritual sambutan tamu", "Tenun Manggarai", "Cerita lisan tentang leluhur kampung"],
      cuisine: ["Kopi Flores", "Ubi dan jagung lokal", "Sayur daun labu"],
      etiquette:
        "Ikuti arahan tetua saat masuk rumah adat, bawa pakaian hangat, dan minta izin sebelum memotret warga."
    },
    transport: {
      gateway: "Labuan Bajo",
      distance: "110 km dari Labuan Bajo ke Denge, lanjut trekking sekitar 2-3 jam",
      estimate: "5-6 jam perjalanan darat + trekking",
      modes: ["Pesawat ke Labuan Bajo", "Mobil sewa/travel ke Denge", "Trekking berpemandu"],
      accessNotes:
        "Datang pagi dari Labuan Bajo agar tiba di Denge sebelum siang. Jalur trekking bisa licin saat hujan."
    },
    highlights: ["Mbaru Niang", "Homestay adat", "Kopi Flores", "Pemandangan kabut pagi"],
    nearbyPoints: ["Denge", "Todo Village", "Labuan Bajo"],
    aseanMatch: "kampung-morten"
  },
  {
    id: "tumpak-sewu",
    name: "Tumpak Sewu",
    country: "Indonesia",
    province: "Jawa Timur",
    region: "Lumajang-Malang",
    heroLabel: "Air terjun tirai raksasa",
    categories: ["nature", "adventure"],
    travelStyle: ["waterfall", "hiking", "photography"],
    budget: "low",
    pace: "active",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=82",
    description:
      "Air terjun bertingkat dengan panorama tebing melingkar. Destinasi ini paling menarik bagi pemburu lanskap, tapi membutuhkan sepatu aman dan kondisi fisik baik.",
    shortDescription:
      "Panorama air terjun melingkar, jalur turun tebing, dan akses gabungan dari Malang atau Lumajang.",
    location: {
      lat: -8.2305,
      lng: 112.9175,
      label: "Sidomulyo, Pronojiwo"
    },
    bestSeason: "Mei-September",
    culturalInsight: {
      history:
        "Nama Tumpak Sewu berarti seribu aliran, merujuk pada banyaknya curahan air yang turun dari dinding tebing.",
      traditions: ["Kampung lereng Semeru", "Pasar pagi desa", "Kerja pemandu lokal"],
      cuisine: ["Rawon", "Pecel Jawa Timur", "Kopi robusta lokal"],
      etiquette:
        "Gunakan pemandu lokal untuk turun ke dasar air terjun, hindari musim hujan ekstrem, dan bawa pulang sampah."
    },
    transport: {
      gateway: "Malang atau Lumajang",
      distance: "70 km dari Malang atau 55 km dari Lumajang",
      estimate: "2-3 jam dengan mobil dari Malang",
      modes: ["Kereta/pesawat ke Malang", "Mobil sewa", "Ojek lokal menuju pintu masuk"],
      accessNotes:
        "Rute dari Malang lebih populer untuk wisatawan luar kota; rute Lumajang lebih dekat bila datang dari Jember/Banyuwangi."
    },
    highlights: ["Panorama atas", "Goa Tetes", "Tebing Semeru", "Fotografi lanskap"],
    nearbyPoints: ["Goa Tetes", "Kapas Biru", "Ranu Pani"],
    aseanMatch: "ban-gioc"
  },
  {
    id: "sombori",
    name: "Kepulauan Sombori",
    country: "Indonesia",
    province: "Sulawesi Tengah",
    region: "Morowali",
    heroLabel: "Mini Raja Ampat di Teluk Tolo",
    categories: ["nature", "beach", "adventure"],
    travelStyle: ["island-hopping", "snorkeling", "boat"],
    budget: "mid",
    pace: "active",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1400&q=82",
    description:
      "Gugusan pulau karst, laguna, dan perairan jernih di Morowali. Pilihan bagus untuk wisatawan yang ingin suasana pulau timur Indonesia tanpa keramaian besar.",
    shortDescription:
      "Laguna karst, snorkeling, gua laut, dan island hopping dari Morowali.",
    location: {
      lat: -3.1093,
      lng: 122.5525,
      label: "Morowali, Teluk Tolo"
    },
    bestSeason: "April-Oktober",
    culturalInsight: {
      history:
        "Sombori berada di jalur pesisir Sulawesi yang lama menjadi ruang singgah pelaut, nelayan, dan komunitas Bajo.",
      traditions: ["Budaya maritim Bajo", "Perahu nelayan", "Cerita gua dan pulau karst"],
      cuisine: ["Ikan bakar", "Kasubi", "Sambal dabu-dabu"],
      etiquette:
        "Hormati area tinggal nelayan, gunakan operator perahu lokal, dan batasi penggunaan plastik sekali pakai."
    },
    transport: {
      gateway: "Kendari atau Morowali",
      distance: "Perjalanan darat dan laut bervariasi 4-8 jam tergantung titik masuk",
      estimate: "1 hari perjalanan dari kota besar terdekat",
      modes: ["Pesawat ke Kendari/Morowali", "Mobil ke dermaga", "Perahu wisata lokal"],
      accessNotes:
        "Jadwal perahu bergantung cuaca. Susun rencana pulang dengan buffer minimal setengah hari."
    },
    highlights: ["Laguna biru", "Gua Berlian", "Pulau Kayangan", "Snorkeling"],
    nearbyPoints: ["Labengki", "Teluk Tolo", "Pulau Kayangan"],
    aseanMatch: "el-nido"
  },
  {
    id: "sawahlunto",
    name: "Sawahlunto",
    country: "Indonesia",
    province: "Sumatera Barat",
    region: "Lembah Bukit Barisan",
    heroLabel: "Kota tambang warisan dunia",
    categories: ["history", "culture", "culinary"],
    travelStyle: ["heritage-walk", "museum", "railway"],
    budget: "low",
    pace: "slow",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=82",
    description:
      "Kota tua tambang batu bara dengan bangunan kolonial, museum, terowongan tambang, dan jejak kereta api Ombilin.",
    shortDescription:
      "Kota heritage tambang Ombilin dengan museum, arsitektur lama, dan kuliner Minang.",
    location: {
      lat: -0.681,
      lng: 100.7818,
      label: "Sawahlunto, Sumatera Barat"
    },
    bestSeason: "Maret-Oktober",
    culturalInsight: {
      history:
        "Sawahlunto berkembang sebagai kota tambang Ombilin dan kini menjadi contoh transformasi kota industri menjadi destinasi heritage.",
      traditions: ["Randai", "Musik Minang", "Festival kota tua"],
      cuisine: ["Rendang", "Sate Padang", "Kopi kawa daun"],
      etiquette:
        "Kunjungi museum dengan pemandu untuk memahami konteks pekerja tambang dan sejarah sosial kota."
    },
    transport: {
      gateway: "Padang",
      distance: "95 km dari Padang",
      estimate: "3-4 jam dengan mobil",
      modes: ["Pesawat ke Padang", "Travel/minibus ke Sawahlunto", "Jalan kaki untuk heritage trail"],
      accessNotes:
        "Rute Padang-Solok-Sawahlunto melewati jalan berkelok; hindari perjalanan malam bila tidak terbiasa."
    },
    highlights: ["Museum Goedang Ransoem", "Lubang Mbah Soero", "Stasiun lama", "Kota tua"],
    nearbyPoints: ["Danau Singkarak", "Solok", "Sijunjung"],
    aseanMatch: "luang-prabang"
  },
  {
    id: "kete-kesu",
    name: "Kete Kesu",
    country: "Indonesia",
    province: "Sulawesi Selatan",
    region: "Toraja Utara",
    heroLabel: "Tongkonan dan ritual Toraja",
    categories: ["culture", "history", "culinary"],
    travelStyle: ["ritual", "architecture", "village"],
    budget: "mid",
    pace: "slow",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=82",
    description:
      "Kampung adat dengan rumah Tongkonan, lumbung padi, ukiran Toraja, dan kompleks pemakaman tebing yang mencerminkan filosofi hidup-mati masyarakat Toraja.",
    shortDescription:
      "Tongkonan, ukiran Toraja, kompleks makam, dan kuliner dataran tinggi.",
    location: {
      lat: -2.9947,
      lng: 119.9104,
      label: "Kesu, Toraja Utara"
    },
    bestSeason: "Juni-September",
    culturalInsight: {
      history:
        "Kete Kesu menjadi salah satu ruang terbaik untuk memahami arsitektur Tongkonan dan sistem kekerabatan Toraja.",
      traditions: ["Rambu Solo", "Ukiran Pa'ssura", "Kerajinan bambu dan kayu"],
      cuisine: ["Pa'piong", "Kopi Toraja", "Pantollo pamarrasan"],
      etiquette:
        "Ritual adat bukan atraksi biasa. Tanyakan aturan berpakaian, kontribusi tamu, dan area yang boleh difoto."
    },
    transport: {
      gateway: "Makassar",
      distance: "310 km dari Makassar",
      estimate: "8-9 jam bus malam atau mobil",
      modes: ["Pesawat ke Makassar", "Bus malam ke Rantepao", "Mobil/ojek lokal ke Kete Kesu"],
      accessNotes:
        "Bus malam Makassar-Rantepao umum dipakai wisatawan. Sediakan satu hari penuh untuk adaptasi perjalanan."
    },
    highlights: ["Tongkonan", "Makam tebing", "Ukiran Toraja", "Kopi dataran tinggi"],
    nearbyPoints: ["Rantepao", "Londa", "Batutumonga"],
    aseanMatch: "ban-chiang"
  },
  {
    id: "pulau-lengkuas",
    name: "Pulau Lengkuas",
    country: "Indonesia",
    province: "Kepulauan Bangka Belitung",
    region: "Belitung",
    heroLabel: "Mercusuar dan granit raksasa",
    categories: ["beach", "nature", "history"],
    travelStyle: ["island-hopping", "snorkeling", "heritage"],
    budget: "mid",
    pace: "relaxed",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=82",
    description:
      "Pulau kecil dengan mercusuar tua, batu granit besar, perairan dangkal, dan akses island hopping dari Tanjung Kelayang.",
    shortDescription:
      "Mercusuar kolonial, batu granit, dan perairan jernih untuk island hopping Belitung.",
    location: {
      lat: -2.5383,
      lng: 107.6249,
      label: "Sijuk, Belitung"
    },
    bestSeason: "Maret-Oktober",
    culturalInsight: {
      history:
        "Mercusuar Pulau Lengkuas menjadi penanda navigasi laut Belitung dan bagian dari memori jalur timah serta pelayaran.",
      traditions: ["Dulang Belitung", "Musik campak", "Kehidupan nelayan pesisir"],
      cuisine: ["Gangan ikan", "Mie Belitung", "Kopi Kong Djie"],
      etiquette:
        "Perhatikan batas kunjungan mercusuar, gunakan jaket pelampung, dan jangan menginjak karang hidup."
    },
    transport: {
      gateway: "Tanjung Pandan",
      distance: "27 km ke Tanjung Kelayang, lanjut perahu 20-30 menit",
      estimate: "1-1,5 jam dari bandara",
      modes: ["Pesawat ke Tanjung Pandan", "Mobil ke Tanjung Kelayang", "Perahu island hopping"],
      accessNotes:
        "Berangkat pagi agar laut lebih tenang dan rute bisa digabung dengan Pulau Kepayang atau Batu Berlayar."
    },
    highlights: ["Mercusuar", "Batu granit", "Snorkeling", "Dulang Belitung"],
    nearbyPoints: ["Tanjung Kelayang", "Batu Berlayar", "Tanjung Tinggi"],
    aseanMatch: "el-nido"
  }
];

export const aseanDestinations = [
  {
    id: "kampung-morten",
    name: "Kampung Morten",
    country: "Malaysia",
    region: "Melaka",
    categories: ["culture", "history", "slow-travel"],
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=82",
    description:
      "Kampung Melayu heritage di tepi Sungai Melaka, kuat dengan rumah tradisional, homestay, dan narasi keluarga lokal.",
    similarity:
      "Sama-sama menonjolkan ruang tinggal tradisional dan interaksi langsung dengan warga."
  },
  {
    id: "belum-rainforest",
    name: "Royal Belum Rainforest",
    country: "Malaysia",
    region: "Perak",
    categories: ["nature", "adventure"],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=82",
    description:
      "Hutan hujan tua dengan danau, trekking, konservasi, dan pengalaman alam yang cocok dibandingkan dengan wisata lanskap aktif.",
    similarity:
      "Keduanya membutuhkan rencana akses yang matang dan pemandu lokal untuk pengalaman alam yang bertanggung jawab."
  },
  {
    id: "lenggong-valley",
    name: "Lenggong Valley",
    country: "Malaysia",
    region: "Perak",
    categories: ["history", "culture"],
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=82",
    description:
      "Lanskap arkeologi dan sejarah manusia purba di Perak, menarik bagi wisatawan heritage dan pembelajar sejarah kawasan.",
    similarity:
      "Sama-sama membuka percakapan tentang bagaimana situs lama dikelola menjadi pembelajaran publik."
  },
  {
    id: "sarawak-cultural-village",
    name: "Sarawak Cultural Village",
    country: "Malaysia",
    region: "Sarawak",
    categories: ["culture", "history"],
    image:
      "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=1200&q=82",
    description:
      "Ruang pengenalan rumah adat, musik, tekstil, dan tradisi komunitas Borneo Malaysia.",
    similarity:
      "Keduanya memperlihatkan arsitektur tradisional sebagai pintu masuk memahami identitas komunitas."
  },
  {
    id: "el-nido",
    name: "El Nido",
    country: "Filipina",
    region: "Palawan",
    categories: ["beach", "nature"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
    description:
      "Gugusan pulau kapur, lagoon, dan perjalanan laut pendek yang populer untuk island hopping tropis Asia Tenggara.",
    similarity:
      "Sama-sama cocok untuk island hopping, snorkeling, dan pengalaman pesisir yang kuat secara visual."
  },
  {
    id: "ban-gioc",
    name: "Ban Gioc Waterfall",
    country: "Vietnam",
    region: "Cao Bang",
    categories: ["nature", "adventure"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=82",
    description:
      "Air terjun besar di perbatasan utara Vietnam dengan karakter lanskap tebing dan aliran air yang dramatis.",
    similarity:
      "Sama-sama menawarkan pengalaman lanskap air yang kuat dan membutuhkan perencanaan akses yang matang."
  },
  {
    id: "luang-prabang",
    name: "Luang Prabang",
    country: "Laos",
    region: "Laos Utara",
    categories: ["history", "culture", "culinary"],
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=82",
    description:
      "Kota warisan dengan jejak kolonial, tradisi Buddha, pasar malam, dan ritme kota tua yang tenang.",
    similarity:
      "Sama-sama kuat pada pembacaan sejarah kota dan transformasi kawasan lama menjadi pengalaman publik."
  },
  {
    id: "ban-chiang",
    name: "Ban Chiang",
    country: "Thailand",
    region: "Udon Thani",
    categories: ["culture", "history"],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=82",
    description:
      "Situs budaya dan arkeologi yang dikenal sebagai pintu masuk membaca sejarah komunitas awal di daratan Asia Tenggara.",
    similarity:
      "Sama-sama menghubungkan artefak, ruang hidup tradisional, dan narasi identitas komunitas."
  }
];

export const culturePairs = [
  {
    id: "village-heritage",
    title: "Desa Adat dan Kampung Heritage ASEAN",
    indonesia: "Wae Rebo, Flores",
    asean: "Kampung Morten, Melaka",
    country: "Malaysia",
    sharedTheme: "Rumah tradisional sebagai pusat memori keluarga dan tata ruang komunitas.",
    difference:
      "Wae Rebo menonjolkan kehidupan pegunungan dan arsitektur Mbaru Niang, sedangkan Kampung Morten kuat pada kampung Melayu sungai di kawasan urban heritage.",
    recommendedFlow: "Mulai dari homestay Wae Rebo, lalu lanjutkan city heritage walk di Melaka."
  },
  {
    id: "waterfall-asean",
    title: "Lanskap Air Dramatis ASEAN",
    indonesia: "Tumpak Sewu, Jawa Timur",
    asean: "Ban Gioc Waterfall, Cao Bang",
    country: "Vietnam",
    sharedTheme: "Air terjun besar sebagai pengalaman lanskap aktif dan fotografi alam.",
    difference:
      "Tumpak Sewu lebih vertikal dan intens dengan jalur turun tebing, sedangkan Ban Gioc lebih lebar dan terbuka di lanskap perbatasan.",
    recommendedFlow: "Gabungkan untuk itinerary pecinta air terjun dan lanskap geologi Asia Tenggara."
  },
  {
    id: "heritage-asean",
    title: "Kota Warisan dan Ritme Sejarah",
    indonesia: "Sawahlunto, Sumatera Barat",
    asean: "Luang Prabang, Laos Utara",
    country: "Laos",
    sharedTheme: "Kawasan lama yang menjelaskan hubungan sejarah kota, kehidupan warga, dan lanskap.",
    difference:
      "Sawahlunto berpusat pada sejarah industri tambang, sedangkan Luang Prabang lebih menonjolkan kota sungai, biara, dan ritme heritage hidup.",
    recommendedFlow: "Cocok untuk itinerary slow travel yang berfokus pada warisan kota Asia Tenggara."
  },
  {
    id: "ritual-identity",
    title: "Identitas Komunitas dan Jejak Budaya",
    indonesia: "Kete Kesu, Toraja",
    asean: "Ban Chiang, Udon Thani",
    country: "Thailand",
    sharedTheme: "Ruang budaya yang membantu membaca identitas komunitas dan memori panjang kawasan.",
    difference:
      "Toraja menekankan rumah adat, ritual, dan lanskap leluhur, sementara Ban Chiang lebih arkeologis dan berfokus pada jejak kebudayaan awal.",
    recommendedFlow: "Cocok untuk perbandingan antara budaya hidup dan situs sejarah komunitas Asia Tenggara."
  },
  {
    id: "island-asean",
    title: "Island Hopping dan Pesisir ASEAN",
    indonesia: "Pulau Lengkuas atau Sombori",
    asean: "El Nido, Palawan",
    country: "Filipina",
    sharedTheme: "Pulau kecil, laut jernih, dan pengalaman pesisir yang kuat untuk island hopping.",
    difference:
      "Belitung kuat pada mercusuar dan granit; Sombori pada karst; El Nido pada lagoon dan gugusan pulau kapur yang lebih ekspansif.",
    recommendedFlow: "Gabungkan sebagai paket eksplorasi pesisir tropis Asia Tenggara."
  }
];

export const countryFallback = [
  {
    cca2: "ID",
    name: { common: "Indonesia" },
    capital: ["Jakarta"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: { ind: "Indonesian" },
    currencies: { IDR: { name: "Indonesian rupiah", symbol: "Rp" } }
  },
  {
    cca2: "MY",
    name: { common: "Malaysia" },
    capital: ["Kuala Lumpur"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: { msa: "Malay" },
    currencies: { MYR: { name: "Malaysian ringgit", symbol: "RM" } }
  },
  {
    cca2: "TH",
    name: { common: "Thailand" },
    capital: ["Bangkok"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: { tha: "Thai" },
    currencies: { THB: { name: "Thai baht", symbol: "฿" } }
  },
  {
    cca2: "VN",
    name: { common: "Vietnam" },
    capital: ["Hanoi"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: { vie: "Vietnamese" },
    currencies: { VND: { name: "Vietnamese dong", symbol: "₫" } }
  },
  {
    cca2: "LA",
    name: { common: "Laos" },
    capital: ["Vientiane"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: { lao: "Lao" },
    currencies: { LAK: { name: "Lao kip", symbol: "₭" } }
  },
  {
    cca2: "PH",
    name: { common: "Philippines" },
    capital: ["Manila"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: { eng: "English", fil: "Filipino" },
    currencies: { PHP: { name: "Philippine peso", symbol: "₱" } }
  }
];

export function getDestinationById(id) {
  return destinations.find((destination) => destination.id === id);
}

export function getAseanDestinationById(id) {
  return aseanDestinations.find((destination) => destination.id === id);
}

export function filterDestinations({ search = "", category = "all", country = "Indonesia" } = {}) {
  const term = search.trim().toLowerCase();

  return destinations.filter((destination) => {
    const countryMatch = country === "all" || destination.country === country;
    const categoryMatch = category === "all" || destination.categories.includes(category);
    const searchMatch =
      !term ||
      [
        destination.name,
        destination.province,
        destination.region,
        destination.shortDescription,
        destination.description,
        ...destination.highlights
      ]
        .join(" ")
        .toLowerCase()
        .includes(term);

    return countryMatch && categoryMatch && searchMatch;
  });
}

export function getRecommendationResults({ interests = [], pace = "any", budget = "any" } = {}) {
  const normalizedInterests = Array.isArray(interests)
    ? interests.filter(Boolean)
    : String(interests)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

  return destinations
    .map((destination) => {
      let score = destination.rating;
      const matchedInterests = normalizedInterests.filter((interest) => destination.categories.includes(interest));

      score += matchedInterests.length * 2.1;

      if (pace !== "any" && destination.pace === pace) {
        score += 1.3;
      }

      if (budget !== "any" && destination.budget === budget) {
        score += 1;
      }

      const reasons = [
        matchedInterests.length
          ? `Cocok dengan minat ${matchedInterests.map(toTitleCase).join(", ")}`
          : "Cocok sebagai pembuka eksplorasi hidden gems",
        pace !== "any" && destination.pace === pace ? `Ritme perjalanan ${paceLabel(pace)}` : null,
        budget !== "any" && destination.budget === budget ? `Estimasi biaya ${budgetLabel(budget)}` : null,
        destination.transport.gateway ? `Akses utama dari ${destination.transport.gateway}` : null
      ].filter(Boolean);

      return {
        ...destination,
        score: Number(score.toFixed(1)),
        reasons
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

export function buildRoute(destinationId, origin = "Jakarta") {
  const destination = getDestinationById(destinationId) || destinations[0];
  const originLabel = origin.trim() || "Jakarta";
  const encodedOrigin = encodeURIComponent(originLabel);
  const encodedDestination = encodeURIComponent(`${destination.location.lat},${destination.location.lng}`);
  const originPoint = routeOriginCatalog.find((item) => item.label.toLowerCase() === originLabel.toLowerCase());
  const dynamicDistanceKm =
    originPoint?.lat != null ? haversineDistance(originPoint, destination.location) : null;

  return {
    origin: originLabel,
    destination: destination.name,
    gateway: destination.transport.gateway,
    distance: dynamicDistanceKm != null ? `~${formatDistanceKm(dynamicDistanceKm)} km dari ${originLabel}` : destination.transport.distance,
    estimate: dynamicDistanceKm != null ? estimateTravelTime(dynamicDistanceKm) : destination.transport.estimate,
    lastMileAccess: destination.transport.distance,
    modes: destination.transport.modes,
    accessNotes: destination.transport.accessNotes,
    location: destination.location,
    originMatched: Boolean(originPoint?.lat != null),
    navigationUrl: `https://www.google.com/maps/dir/?api=1&origin=${encodedOrigin}&destination=${encodedDestination}&travelmode=driving`,
    embedUrl: buildAreaEmbedUrl(destination.location)
  };
}

export function buildAreaEmbedUrl(location) {
  const delta = 0.08;
  const left = (location.lng - delta).toFixed(5);
  const bottom = (location.lat - delta).toFixed(5);
  const right = (location.lng + delta).toFixed(5);
  const top = (location.lat + delta).toFixed(5);

  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${location.lat}%2C${location.lng}`;
}

export function getCultureExchangePayload() {
  return culturePairs.map((pair) => {
    const indonesiaDestination = destinations.find((destination) => pair.indonesia.includes(destination.name));
    const aseanDestination =
      aseanDestinations.find((destination) => indonesiaDestination?.aseanMatch === destination.id) ||
      aseanDestinations.find((destination) => pair.asean.includes(destination.name));

    return {
      ...pair,
      indonesiaDestination,
      aseanDestination
    };
  });
}

function toTitleCase(value) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function paceLabel(value) {
  return {
    slow: "pelan dan imersif",
    active: "aktif",
    relaxed: "santai"
  }[value] || value;
}

function budgetLabel(value) {
  return {
    low: "hemat",
    mid: "menengah",
    high: "premium"
  }[value] || value;
}

function haversineDistance(from, to) {
  const earthRadiusKm = 6371;
  const lat1 = degreesToRadians(from.lat);
  const lat2 = degreesToRadians(to.lat);
  const latDelta = degreesToRadians(to.lat - from.lat);
  const lngDelta = degreesToRadians(to.lng - from.lng);
  const a =
    Math.sin(latDelta / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(lngDelta / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function degreesToRadians(value) {
  return (value * Math.PI) / 180;
}

function formatDistanceKm(value) {
  return Math.round(value).toLocaleString("id-ID");
}

function estimateTravelTime(distanceKm) {
  if (distanceKm < 180) {
    const low = Math.max(2, Math.round(distanceKm / 60));
    const high = Math.max(low + 1, Math.round(distanceKm / 40));
    return `~${low}-${high} jam perjalanan darat`;
  }

  if (distanceKm < 800) {
    const low = Math.max(3, Math.round(distanceKm / 220));
    const high = Math.max(low + 2, Math.round(distanceKm / 140));
    return `~${low}-${high} jam perjalanan multimoda`;
  }

  const low = Math.max(5, Math.round(distanceKm / 650) + 1);
  const high = Math.max(low + 2, Math.round(distanceKm / 420) + 2);
  return `~${low}-${high} jam termasuk transit`;
}
