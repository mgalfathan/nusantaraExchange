import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeInfo,
  Bus,
  ChefHat,
  ChevronRight,
  Compass,
  Globe2,
  Landmark,
  Map,
  MapPin,
  Mountain,
  Plane,
  RefreshCw,
  Route,
  Search,
  ShipWheel,
  Sparkles,
  Star,
  Utensils,
  Waves
} from "lucide-react";
import {
  fetchCountries,
  fetchCultureExchange,
  fetchDestinations,
  fetchNearbyPlaces,
  fetchRecommendations,
  fetchRoute
} from "./lib/api";
import {
  buildAreaEmbedUrl,
  destinations as fallbackDestinations,
  getAseanDestinationById,
  getDestinationById,
  preferenceOptions,
  routeOriginCatalog
} from "./lib/travelData";

const iconMap = {
  nature: Mountain,
  culture: Landmark,
  culinary: Utensils,
  history: BadgeInfo,
  beach: Waves,
  adventure: Compass
};

const categoryLabels = {
  all: "Semua",
  nature: "Alam",
  culture: "Budaya",
  culinary: "Kuliner",
  history: "Sejarah",
  beach: "Pantai",
  adventure: "Petualangan",
  "slow-travel": "Slow Travel"
};

function App() {
  const [destinations, setDestinations] = useState(fallbackDestinations);
  const [selectedId, setSelectedId] = useState(fallbackDestinations[0].id);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [interests, setInterests] = useState(["nature", "culture"]);
  const [pace, setPace] = useState("any");
  const [budget, setBudget] = useState("any");
  const [recommendations, setRecommendations] = useState([]);
  const [routeOriginChoice, setRouteOriginChoice] = useState("Jakarta");
  const [routeOrigin, setRouteOrigin] = useState("Jakarta");
  const [routeInfo, setRouteInfo] = useState(null);
  const [culturePairs, setCulturePairs] = useState([]);
  const [countryFacts, setCountryFacts] = useState([]);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const selected = useMemo(
    () => destinations.find((destination) => destination.id === selectedId) || getDestinationById(selectedId) || destinations[0],
    [destinations, selectedId]
  );

  useEffect(() => {
    fetchDestinations({ search, category }).then((payload) => {
      setDestinations(payload.data);

      if (!payload.data.some((destination) => destination.id === selectedId)) {
        setSelectedId(payload.data[0]?.id || fallbackDestinations[0].id);
      }
    });
  }, [search, category, selectedId]);

  useEffect(() => {
    fetchRecommendations({ interests, pace, budget }).then((payload) => {
      setRecommendations(payload.data);
    });
  }, [interests, pace, budget]);

  useEffect(() => {
    if (!selected) return;

    fetchRoute(selected.id, routeOrigin).then((payload) => {
      setRouteInfo(payload.data);
    });

    fetchNearbyPlaces(selected).then((payload) => {
      setNearbyPlaces(payload.data);
    });
  }, [selected, routeOrigin]);

  useEffect(() => {
    fetchCultureExchange().then((payload) => setCulturePairs(payload.data));
    fetchCountries().then((payload) => setCountryFacts(payload.data));
  }, []);

  function toggleInterest(interestId) {
    setInterests((current) =>
      current.includes(interestId) ? current.filter((item) => item !== interestId) : [...current, interestId]
    );
  }

  function handleRouteOriginChange(value) {
    setRouteOriginChoice(value);

    if (value !== "Tulis manual") {
      setRouteOrigin(value);
    }
  }

  return (
    <div className="min-h-screen bg-rice text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-rice/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="HiddenNusantaraX home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-rice">
              <Globe2 className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-canopy">Hidden</span>
              <span className="block text-lg font-bold leading-5">NusantaraX</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/70 md:flex">
            <a href="#explore" className="hover:text-ink">Explore</a>
            <a href="#recommendation" className="hover:text-ink">Recommendation</a>
            <a href="#route" className="hover:text-ink">Route</a>
            <a href="#exchange" className="hover:text-ink">Culture Exchange</a>
          </nav>

          <a
            href="#explore"
            className="inline-flex items-center gap-2 rounded-lg bg-spice px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:bg-spice/90"
          >
            <Compass className="h-4 w-4" />
            Mulai
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="relative min-h-[690px] overflow-hidden bg-cover bg-center sm:min-h-[650px]"
          style={{ backgroundImage: `url(${fallbackDestinations[0].image})` }}
        >
          <div className="hero-veil absolute inset-0" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-16 lg:pt-20">
            <div className="flex max-w-3xl flex-col justify-center text-rice">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-rice/35 bg-ink/30 px-3 py-2 text-sm font-semibold backdrop-blur">
                <Sparkles className="h-4 w-4 text-turmeric" />
                Hidden gems Indonesia + pertukaran budaya ASEAN
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                HiddenNusantaraX
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-rice/86 sm:text-lg">
                Temukan destinasi tersembunyi, baca konteks budaya lokal, cek akses transportasi, dan bandingkan
                pengalaman Indonesia-ASEAN dalam satu platform.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["6", "Hidden gems"],
                  ["5", "Tema lintas budaya"],
                  ["Rute", "Siap Jalan"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-rice/25 bg-rice/10 p-4 backdrop-blur">
                    <div className="text-3xl font-black text-turmeric">{value}</div>
                    <div className="mt-1 text-sm font-semibold text-rice/82">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel self-end rounded-lg p-4 shadow-soft sm:p-5 lg:self-center">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-canopy">
                <Search className="h-4 w-4" />
                Explore Planner
              </div>
              <div className="mt-4 grid gap-3">
                <label className="block">
                  <span className="text-sm font-semibold text-ink/72">Cari destinasi, provinsi, atau kuliner</span>
                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-ink/12 bg-white px-3 py-2">
                    <Search className="h-4 w-4 text-ink/45" />
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Contoh: Flores, kopi, pantai"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>

                <div>
                  <span className="text-sm font-semibold text-ink/72">Filter tema</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["all", ...preferenceOptions.map((option) => option.id)].map((item) => {
                      const Icon = item === "all" ? Map : iconMap[item] || Compass;
                      const active = category === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          title={`Filter ${categoryLabels[item]}`}
                          onClick={() => setCategory(item)}
                          className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition ${
                            active ? "bg-canopy text-white" : "bg-white text-ink/70 hover:bg-mist"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {categoryLabels[item]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-lg bg-ink p-4 text-rice">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-rice/70">Pilihan cepat</p>
                      <h2 className="mt-1 text-xl font-black">{selected?.name}</h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => document.getElementById("route")?.scrollIntoView({ behavior: "smooth" })}
                      className="grid h-11 w-11 place-items-center rounded-lg bg-turmeric text-ink"
                      title="Lihat rute"
                    >
                      <Route className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-rice/78">{selected?.shortDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="explore" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Explore Destinations"
            title="Hidden gems yang siap dijelajah"
            description="List destinasi menampilkan gambar, deskripsi, lokasi, highlight budaya, dan akses transportasi."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                selected={selected?.id === destination.id}
                onSelect={() => setSelectedId(destination.id)}
              />
            ))}
          </div>
        </section>

        {selected && (
          <section className="bg-mist/70">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
              <div className="overflow-hidden rounded-lg bg-white shadow-soft">
                <img src={selected.image} alt={selected.name} className="h-72 w-full object-cover sm:h-[420px]" />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {selected.categories.slice(0, 4).map((item) => (
                      <span key={item} className="rounded-lg bg-rice px-3 py-1 text-xs font-bold text-ink/70">
                        {categoryLabels[item] || item}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-3xl font-black">{selected.name}</h2>
                  <p className="mt-2 text-sm font-semibold text-canopy">{selected.region}, {selected.province}</p>
                  <p className="mt-4 leading-7 text-ink/72">{selected.description}</p>
                </div>
              </div>

              <div className="grid gap-4">
                <InfoPanel icon={Landmark} title="Cultural Insight">
                  <p className="leading-7 text-ink/72">{selected.culturalInsight.history}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <MiniList title="Tradisi" items={selected.culturalInsight.traditions} />
                    <MiniList title="Kuliner" items={selected.culturalInsight.cuisine} />
                    <MiniList title="Etika" items={[selected.culturalInsight.etiquette]} />
                  </div>
                </InfoPanel>

                <InfoPanel icon={ShipWheel} title="Highlight Pengalaman">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {selected.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 rounded-lg bg-rice p-3 text-sm font-semibold">
                        <Star className="h-4 w-4 text-turmeric" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </InfoPanel>

                <InfoPanel icon={Globe2} title="Cross-Culture Match">
                  <CultureMatch destination={selected} />
                </InfoPanel>
              </div>
            </div>
          </section>
        )}

        <section id="recommendation" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Smart Recommendation"
            title="Rekomendasi sesuai preferensi"
            description="Pilih minat, ritme perjalanan, dan budget. Sistem akan menampilkan destinasi dengan alasan rekomendasi."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-lg bg-ink p-5 text-rice shadow-soft">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-turmeric">
                <Sparkles className="h-4 w-4" />
                Preference Builder
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {preferenceOptions.map((option) => {
                  const active = interests.includes(option.id);
                  const Icon = iconMap[option.id] || Compass;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      title={`Minat ${option.label}`}
                      onClick={() => toggleInterest(option.id)}
                      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition ${
                        active ? "bg-turmeric text-ink" : "bg-rice/10 text-rice hover:bg-rice/18"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {option.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <SelectField
                  label="Ritme"
                  value={pace}
                  onChange={setPace}
                  options={[
                    ["any", "Bebas"],
                    ["slow", "Slow travel"],
                    ["active", "Aktif"],
                    ["relaxed", "Santai"]
                  ]}
                />
                <SelectField
                  label="Budget"
                  value={budget}
                  onChange={setBudget}
                  options={[
                    ["any", "Bebas"],
                    ["low", "Hemat"],
                    ["mid", "Menengah"]
                  ]}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => setSelectedId(destination.id)}
                  className="rounded-lg bg-white p-4 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black">{destination.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-canopy">{destination.province}</p>
                    </div>
                    <span className="rounded-lg bg-turmeric px-2.5 py-1 text-sm font-black text-ink">
                      {destination.score}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {destination.reasons.map((reason) => (
                      <div key={reason} className="flex gap-2 text-sm leading-6 text-ink/70">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-spice" />
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="route" className="bg-ink py-12 text-rice">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Travel Route & Access"
              title="Rute, transportasi, dan peta"
              description="Gunakan origin fleksibel untuk melihat area tujuan, estimasi akses, dan panduan perjalanan."
              inverted
            />

            <div className="mt-8 grid gap-6 lg:items-start lg:grid-cols-[0.78fr_1.22fr]">
              <div className="rounded-lg bg-rice p-5 text-ink">
                <label className="block">
                  <span className="text-sm font-semibold text-ink/72">Berangkat dari</span>
                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-ink/12 bg-white px-3 py-2">
                    <Plane className="h-4 w-4 text-ink/45" />
                    <select
                      value={routeOriginChoice}
                      onChange={(event) => handleRouteOriginChange(event.target.value)}
                      className="w-full bg-transparent text-sm font-semibold outline-none"
                    >
                      {routeOriginCatalog.map((origin) => (
                        <option key={origin.label} value={origin.label}>
                          {origin.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>

                {routeOriginChoice === "Tulis manual" && (
                  <label className="mt-3 block">
                    <span className="text-sm font-semibold text-ink/72">Kota asal manual</span>
                    <div className="mt-2 flex items-center gap-2 rounded-lg border border-ink/12 bg-white px-3 py-2">
                      <Plane className="h-4 w-4 text-ink/45" />
                      <input
                        value={routeOrigin}
                        onChange={(event) => setRouteOrigin(event.target.value)}
                        className="w-full bg-transparent text-sm outline-none"
                        placeholder="Contoh: Semarang"
                      />
                    </div>
                  </label>
                )}

                {routeInfo && (
                  <div className="mt-5 grid gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-canopy">Tujuan</p>
                      <h3 className="mt-1 text-2xl font-black">{routeInfo.destination}</h3>
                    </div>
                    <div className="grid gap-3">
                      <AccessRow icon={Plane} label="Asal" value={routeInfo.origin} />
                      <AccessRow icon={Route} label="Jarak" value={routeInfo.distance} />
                      <AccessRow icon={Bus} label="Estimasi" value={routeInfo.estimate} />
                    </div>
                    <div className="rounded-lg bg-mist p-4">
                      <p className="text-sm font-bold">Akses akhir ke lokasi</p>
                      <p className="mt-2 text-sm leading-6 text-ink/68">
                        {routeInfo.gateway}: {routeInfo.lastMileAccess}
                      </p>
                      {!routeInfo.originMatched && (
                        <p className="mt-2 text-xs font-semibold text-ink/52">
                          Untuk kota manual yang belum ada di daftar, jarak detail mengikuti panduan akses lokal.
                        </p>
                      )}
                    </div>
                    <div className="rounded-lg bg-mist p-4">
                      <p className="text-sm font-bold">Moda transportasi</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {routeInfo.modes.map((mode) => (
                          <span key={mode} className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-ink/72">
                            {mode}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-ink/68">{routeInfo.accessNotes}</p>
                    </div>
                    <a
                      href={routeInfo.navigationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-spice px-4 py-3 text-sm font-black text-white transition hover:bg-spice/90"
                    >
                      Buka rute lengkap
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>

              <div className="self-start overflow-hidden rounded-lg bg-rice shadow-soft">
                <iframe
                  title={`Area ${selected?.name}`}
                  src={routeInfo?.embedUrl || buildAreaEmbedUrl(selected.location)}
                  className="map-frame"
                  loading="lazy"
                />
                <div className="grid gap-3 p-5 md:grid-cols-3">
                  {nearbyPlaces.slice(0, 6).map((place) => (
                    <div key={place.id || place.name} className="rounded-lg bg-white p-3 text-ink">
                      <p className="font-bold">{place.name}</p>
                      <p className="mt-1 text-xs font-semibold text-ink/55">{place.kinds || "point of interest"}</p>
                      {place.distance && <p className="mt-2 text-xs text-canopy">{place.distance}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="exchange" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cross-Culture Exchange"
            title="Indonesia dan ASEAN dalam satu lensa"
            description="Bandingkan tema budaya, lihat destinasi padanan lintas negara ASEAN, dan pahami konteks kawasan secara ringkas."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {culturePairs.map((pair) => (
              <article key={pair.id} className="rounded-lg bg-white p-5 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-spice">{pair.title}</p>
                    <h3 className="mt-2 text-xl font-black">{pair.sharedTheme}</h3>
                  </div>
                  <RefreshCw className="h-5 w-5 shrink-0 text-canopy" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <CountryCard label="Indonesia" value={pair.indonesia} image={pair.indonesiaDestination?.image} />
                  <CountryCard label={pair.country} value={pair.asean} image={pair.aseanDestination?.image} />
                </div>
                <p className="mt-4 text-sm leading-6 text-ink/70">{pair.difference}</p>
                <p className="mt-3 rounded-lg bg-rice p-3 text-sm font-semibold leading-6 text-ink/72">
                  {pair.recommendedFlow}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {countryFacts.map((country) => (
              <article key={country.cca2 || country.name.common} className="rounded-lg bg-ink p-5 text-rice">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-turmeric">Profil Negara</p>
                <h3 className="mt-2 text-2xl font-black">{country.name.common}</h3>
                <div className="mt-4 grid gap-2 text-sm text-rice/78">
                  <p>Capital: {country.capital?.[0] || "-"}</p>
                  <p>Region: {country.subregion || country.region}</p>
                  <p>Language: {Object.values(country.languages || {}).join(", ")}</p>
                  <p>Currency: {Object.values(country.currencies || {}).map((item) => `${item.name} (${item.symbol})`).join(", ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-rice px-4 py-8 text-center text-sm font-semibold text-ink/60">
        HiddenNusantaraX - Tourism & Culture Exchange prototype. Data wisata dikurasi untuk eksplorasi dan perbandingan budaya.
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, inverted = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-black uppercase tracking-[0.18em] ${inverted ? "text-turmeric" : "text-spice"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-3xl font-black sm:text-4xl ${inverted ? "text-rice" : "text-ink"}`}>{title}</h2>
      <p className={`mt-3 leading-7 ${inverted ? "text-rice/72" : "text-ink/68"}`}>{description}</p>
    </div>
  );
}

function DestinationCard({ destination, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`overflow-hidden rounded-lg bg-white text-left shadow-soft transition hover:-translate-y-1 hover:shadow-xl ${
        selected ? "ring-2 ring-spice" : ""
      }`}
    >
      <div className="relative h-52">
        <img src={destination.image} alt={destination.name} className="h-full w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-lg bg-ink/78 px-3 py-1 text-xs font-bold text-rice backdrop-blur">
          {destination.heroLabel}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-black">{destination.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-canopy">
              <MapPin className="h-4 w-4" />
              {destination.province}
            </p>
          </div>
          <span className="rounded-lg bg-turmeric px-2 py-1 text-xs font-black">{destination.rating}</span>
        </div>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-ink/66">{destination.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {destination.categories.slice(0, 3).map((category) => (
            <span key={category} className="rounded-lg bg-mist px-2.5 py-1 text-xs font-bold text-ink/66">
              {categoryLabels[category] || category}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function InfoPanel({ icon: Icon, title, children }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-soft">
      <div className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-canopy text-white">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-black">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </article>
  );
}

function MiniList({ title, items }) {
  return (
    <div className="rounded-lg bg-rice p-3">
      <h4 className="font-black">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-ink/68">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CultureMatch({ destination }) {
  const asean = getAseanDestinationById(destination.aseanMatch);

  if (!asean) {
    return <p className="text-sm text-ink/70">Belum ada padanan lintas negara.</p>;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-[0.36fr_0.64fr]">
      <img src={asean.image} alt={asean.name} className="h-36 w-full rounded-lg object-cover" />
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-spice">ASEAN Match</p>
        <h4 className="mt-1 text-lg font-black">{asean.name}</h4>
        <p className="mt-1 text-sm font-semibold text-canopy">{asean.country}</p>
        <p className="mt-2 text-sm leading-6 text-ink/68">{asean.similarity}</p>
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-rice/72">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-rice/15 bg-rice/10 px-3 py-2 text-sm font-semibold text-rice outline-none"
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue} className="text-ink">
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function AccessRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-mist p-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-canopy" />
      <div>
        <p className="text-xs font-black uppercase tracking-[0.12em] text-ink/48">{label}</p>
        <p className="mt-1 text-sm font-bold leading-6">{value}</p>
      </div>
    </div>
  );
}

function CountryCard({ label, value, image }) {
  return (
    <div className="overflow-hidden rounded-lg bg-rice">
      {image && <img src={image} alt={value} className="h-32 w-full object-cover" />}
      <div className="p-3">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-canopy">{label}</p>
        <p className="mt-1 text-sm font-bold leading-5">{value}</p>
      </div>
    </div>
  );
}

export default App;
