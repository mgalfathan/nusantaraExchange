export const preferenceOptions = [
  { id: "nature", label: "Alam", icon: "Mountain" },
  { id: "culture", label: "Budaya", icon: "Landmark" },
  { id: "culinary", label: "Kuliner", icon: "Utensils" },
  { id: "history", label: "Sejarah", icon: "ScrollText" },
  { id: "beach", label: "Pantai", icon: "Waves" },
  { id: "adventure", label: "Petualangan", icon: "Compass" }
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
    malaysiaMatch: "kampung-morten"
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
    malaysiaMatch: "belum-rainforest"
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
    malaysiaMatch: "pulau-kapas"
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
    malaysiaMatch: "lenggong-valley"
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
    malaysiaMatch: "sarawak-cultural-village"
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
    malaysiaMatch: "pulau-kapas"
  }
];

export const malaysiaDestinations = [
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
    id: "pulau-kapas",
    name: "Pulau Kapas",
    country: "Malaysia",
    region: "Terengganu",
    categories: ["beach", "nature"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
    description:
      "Pulau kecil dengan pantai putih, snorkeling santai, dan akses perahu cepat dari Marang.",
    similarity:
      "Sama-sama cocok untuk island hopping ringan, snorkeling, dan perjalanan pesisir yang tidak terlalu padat."
  }
];

export const culturePairs = [
  {
    id: "village-heritage",
    title: "Desa Adat dan Kampung Heritage",
    indonesia: "Wae Rebo, Flores",
    malaysia: "Kampung Morten, Melaka",
    sharedTheme: "Rumah tradisional sebagai pusat memori keluarga dan tata ruang komunitas.",
    difference:
      "Wae Rebo menonjolkan kehidupan pegunungan dan arsitektur Mbaru Niang, sedangkan Kampung Morten kuat pada kampung Melayu sungai di kawasan urban heritage.",
    recommendedFlow: "Mulai dari homestay Wae Rebo, lalu lanjutkan city heritage walk di Melaka."
  },
  {
    id: "ritual-borneo",
    title: "Arsitektur Adat Borneo dan Sulawesi",
    indonesia: "Kete Kesu, Toraja",
    malaysia: "Sarawak Cultural Village",
    sharedTheme: "Rumah adat, ukiran, musik, dan ritual sebagai bahasa identitas.",
    difference:
      "Toraja lebih kuat pada ritus leluhur dan lanskap pemakaman, Sarawak lebih cocok sebagai pengantar lintas-etnis Borneo Malaysia.",
    recommendedFlow: "Gunakan Toraja untuk pengalaman lapangan, Sarawak untuk perbandingan bentuk rumah dan seni pertunjukan."
  },
  {
    id: "heritage-landscape",
    title: "Warisan Sejarah dan Lanskap Lama",
    indonesia: "Sawahlunto, Sumatera Barat",
    malaysia: "Lenggong Valley, Perak",
    sharedTheme: "Situs lama yang menjelaskan hubungan manusia, kerja, dan lanskap.",
    difference:
      "Sawahlunto berpusat pada sejarah industri tambang, Lenggong pada arkeologi dan sejarah manusia purba.",
    recommendedFlow: "Cocok untuk itinerary edukasi sejarah kawasan Melayu-Nusantara."
  },
  {
    id: "island-escape",
    title: "Pulau Kecil dan Budaya Pesisir",
    indonesia: "Pulau Lengkuas atau Sombori",
    malaysia: "Pulau Kapas, Terengganu",
    sharedTheme: "Perjalanan laut pendek, snorkeling, dan kehidupan komunitas pesisir.",
    difference:
      "Belitung kuat pada batu granit dan mercusuar; Sombori kuat pada karst; Pulau Kapas lebih santai dan mudah diakses dari Semenanjung Malaysia.",
    recommendedFlow: "Gabungkan sebagai paket island literacy: navigasi, pangan laut, dan konservasi terumbu."
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
  }
];

export function getDestinationById(id) {
  return destinations.find((destination) => destination.id === id);
}

export function getMalaysiaDestinationById(id) {
  return malaysiaDestinations.find((destination) => destination.id === id);
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

  return {
    origin: originLabel,
    destination: destination.name,
    gateway: destination.transport.gateway,
    distance: destination.transport.distance,
    estimate: destination.transport.estimate,
    modes: destination.transport.modes,
    accessNotes: destination.transport.accessNotes,
    location: destination.location,
    navigationUrl: `/api/navigation?destinationId=${encodeURIComponent(destination.id)}&origin=${encodedOrigin}`
  };
}

export function getCultureExchangePayload() {
  return culturePairs.map((pair) => {
    const indonesiaDestination = destinations.find((destination) => pair.indonesia.includes(destination.name));
    const malaysiaDestination =
      malaysiaDestinations.find((destination) => indonesiaDestination?.malaysiaMatch === destination.id) ||
      malaysiaDestinations.find((destination) => pair.malaysia.includes(destination.name));

    return {
      ...pair,
      indonesiaDestination,
      malaysiaDestination
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
