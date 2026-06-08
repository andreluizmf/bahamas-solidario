import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/Fundraising.css'

const regions = [
  {
    name: 'Zona da Mata e Campo das Vertentes',
    color: '#271d67',
    cities: [
      { name: 'Juiz de Fora', coords: [-21.7642, -43.3503] },
      { name: 'Além Paraíba', coords: [-21.8797, -42.7031] },
      { name: 'Barbacena', coords: [-21.2258, -43.7736] },
      { name: 'Cataguases', coords: [-21.3939, -42.6964] },
      { name: 'Leopoldina', coords: [-21.5328, -42.6436] },
      { name: 'Muriaé', coords: [-21.1303, -42.3672] },
      { name: 'Ponte Nova', coords: [-20.4158, -42.9075] },
      { name: 'Rio Pomba', coords: [-21.2728, -43.1736] },
      { name: 'São João del-Rei', coords: [-21.1342, -44.2614] },
      { name: 'Ubá', coords: [-21.1189, -42.9428] },
      { name: 'Viçosa', coords: [-20.7561, -42.8825] },
      { name: 'Visconde do Rio Branco', coords: [-21.0103, -42.8408] },
    ],
  },
  {
    name: 'Triângulo Mineiro e Alto Paranaíba',
    color: '#e51a26',
    cities: [
      { name: 'Uberlândia', coords: [-18.9186, -48.2772] },
      { name: 'Araguari', coords: [-18.6478, -48.1878] },
      { name: 'Araxá', coords: [-19.5928, -46.9408] },
      { name: 'Frutal', coords: [-20.0228, -48.9378] },
      { name: 'Ituiutaba', coords: [-18.9728, -49.4658] },
      { name: 'Iturama', coords: [-19.7278, -50.1958] },
      { name: 'Monte Carmelo', coords: [-18.7278, -47.4958] },
      { name: 'Patrocínio', coords: [-18.9428, -46.9928] },
      { name: 'Patos de Minas', coords: [-18.5778, -46.5178] },
      { name: 'Uberaba', coords: [-19.7478, -47.9378] },
    ],
  },
]

const allCities = regions.flatMap((r) =>
  r.cities.map((c) => ({ ...c, region: r.name, color: r.color }))
)

// Centro aproximado de MG
const MG_CENTER = [-18.5, -44.5]
const MG_ZOOM = 6

export default function Fundraising() {
  return (
    <section className="fundraising-section" id="arrecadacoes">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-label justify-content-center">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--primary-medium)',
                display: 'inline-block',
              }}
            />
            Onde atuamos
          </div>
          <h2 className="section-title">Presença em Minas Gerais</h2>
          <p className="section-subtitle mx-auto">
            O Bahamas Solidário atua em cidades da Zona da Mata, Campo das
            Vertentes, Triângulo Mineiro e Alto Paranaíba.
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* Mapa */}
          <div className="col-lg-8">
            <div className="map-wrapper">
              <MapContainer
                center={MG_CENTER}
                zoom={MG_ZOOM}
                scrollWheelZoom={false}
                style={{ height: '480px', width: '100%', borderRadius: '16px' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {allCities.map((city, i) => (
                  <CircleMarker
                    key={i}
                    center={city.coords}
                    radius={9}
                    pathOptions={{
                      fillColor: city.color,
                      fillOpacity: 0.9,
                      color: '#fff',
                      weight: 2,
                    }}
                  >
                    <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{city.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#666' }}>{city.region}</div>
                    </Tooltip>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Legenda */}
          <div className="col-lg-4">
            {regions.map((region, i) => (
              <div key={i} className="region-block">
                <div className="region-header" style={{ borderLeftColor: region.color }}>
                  <h6>{region.name}</h6>
                  <span>{region.cities.length} cidades</span>
                </div>
                <ul className="region-cities">
                  {region.cities.map((city, j) => (
                    <li key={j}>
                      <span
                        className="region-dot"
                        style={{ background: region.color }}
                      />
                      {city.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
