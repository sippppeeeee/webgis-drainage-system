# WebGIS Drainage System
## Aplikasi Pendataan Saluran Drainase Perkotaan

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-production--ready-success.svg)

### 📋 Deskripsi

Aplikasi WebGIS modern berbasis cloud untuk pendataan dan manajemen saluran drainase perkotaan. Dikembangkan untuk Dinas Pekerjaan Umum Bidang Cipta Karya Kabupaten Brebes dengan fitur-fitur profesional, responsif, dan siap deploy ke hosting.

---

## 🎯 Fitur Utama

### 1. **Dashboard Publik**
- Hero section WebGIS dengan animasi modern
- Statistik drainase realtime
- Peta interaktif fullscreen
- Berita terbaru
- Filter kondisi drainase
- Grafik statistik
- Responsif mobile

### 2. **Peta Interaktif GIS**
- Multi-layer drainase (primer, sekunder, tersier)
- Titik genangan dengan heatmap
- Basemap switcher
- Fullscreen mode
- Measure tools
- Geolocation user
- Layer control dengan legend
- Search location

### 3. **Pendataan Drainase CRUD**
- Master data saluran drainase
- Input geometri GIS
- Upload foto multiple
- Tracking kondisi historis
- Data per tahun pendataan

### 4. **Upload SHP & Edit GIS**
- Import shapefile otomatis
- Konversi ke GeoJSON
- Draw tools (polygon, line, point)
- Edit vertex realtime
- Spatial database management

### 5. **Modul Titik Genangan**
- Input lokasi banjir
- Tinggi air terukur
- Status penanganan
- Foto dokumentasi
- Visualisasi heatmap

### 6. **CMS Berita & Informasi**
- CRUD berita lengkap
- Editor teks rich
- Kategori berita
- Slider homepage

### 7. **Admin Dashboard Profesional**
- Statistik realtime dengan KPI
- Grafik interaktif
- Tabel data dengan pagination
- Export Excel/PDF
- Multi-user dengan role-based access

### 8. **Sistem Autentikasi**
- JWT authentication
- Password hashing bcrypt
- Session management
- Role-based authorization
- Middleware proteksi route

### 9. **Manajemen Data Per Tahun**
- Filter tahun pendataan
- Time slider GIS
- Perbandingan antar tahun
- Arsip data tahunan
- Dashboard statistik per tahun

### 10. **Fitur Lanjutan**
- Progressive Web App (PWA)
- Offline mode
- Audit log lengkap
- Backup database otomatis
- Notifikasi realtime
- GPS mobile support
- Dark/Light mode theme

---

## 🛠️ Teknologi Stack

### Frontend
```
- React 18 + Vite
- TailwindCSS
- Leaflet.js + React-Leaflet
- Axios untuk API calls
- React Router v6
- Framer Motion (animasi)
- Recharts (grafik)
- React Hook Form
- Zustand (state management)
```

### Backend
```
- Node.js + Express.js
- JWT Authentication
- Multer (file upload)
- PostgreSQL + PostGIS
- Sequelize ORM
- Helmet (security)
- CORS & Rate Limiting
```

### Database
```
- PostgreSQL 14+
- PostGIS 3.0+ (spatial data)
- Redis (caching)
```

### DevOps
```
- Docker & Docker Compose
- Nginx reverse proxy
- PM2 process manager
- GitHub Actions CI/CD
```

---

## 📁 Struktur Project

```
webgis-drainage-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Map/
│   │   │   ├── Dashboard/
│   │   │   ├── Admin/
│   │   │   └── Common/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── styles/
│   │   └── utils/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validators/
│   │   └── config/
│   ├── migrations/
│   ├── seeders/
│   ├── package.json
│   └── server.js
│
├── database/
│   ├── schema.sql
│   ├── migrations/
│   └── seeders/
│
├── docker/
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── docker-compose.yml
│
├── nginx/
│   └── nginx.conf
│
├── docs/
│   ├── DEPLOYMENT.md
│   ├── API.md
│   ├── DATABASE.md
│   └── CONTRIBUTING.md
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+ dengan PostGIS
- npm atau yarn
- Docker & Docker Compose (opsional)

### Development Setup

```bash
# Clone repository
git clone https://github.com/sippppeeeee/webgis-drainage-system.git
cd webgis-drainage-system

# Copy environment file
cp .env.example .env

# Edit .env dengan konfigurasi lokal Anda
nano .env

# Install dependencies
npm run setup

# Jalankan database migrations
cd backend && npm run migrate

# Seed data (opsional)
cd backend && npm run seed

# Start development
cd .. && npm run dev
```

### Akses Aplikasi
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api
- Docs: http://localhost:5000/api/docs

---

## 🐳 Docker Setup

```bash
# Build images
docker-compose build

# Start containers
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

---

## 📚 Dokumentasi

- [API Documentation](./docs/API.md) - REST API endpoints lengkap
- [Database Schema](./docs/DATABASE.md) - Struktur database PostGIS
- [Deployment Guide](./docs/DEPLOYMENT.md) - Deploy ke hosting VPS/Cloud
- [Contributing Guide](./docs/CONTRIBUTING.md) - Guidelines untuk kontribusi

---

## 🔐 Keamanan

- JWT authentication dengan expiry
- Password hashing menggunakan bcrypt
- CORS protection
- Rate limiting
- Input validation & sanitization
- SQL injection prevention
- XSS protection dengan Helmet
- HTTPS ready

---

## 👥 Role-Based Access

| Role | Akses |
|------|-------|
| **Super Admin** | Full access semua fitur |
| **Admin** | Manajemen data drainase, berita, laporan |
| **Surveyor** | Input data lapangan, upload foto |
| **Viewer** | View map, berita, statistik |

---

## 📊 API Endpoints

### Drainase
```
GET    /api/drainase
POST   /api/drainase
GET    /api/drainase/:id
PUT    /api/drainase/:id
DELETE /api/drainase/:id
GET    /api/drainase/spatial/search
```

### Genangan
```
GET    /api/genangan
POST   /api/genangan
GET    /api/genangan/heatmap
```

### Tahun Pendataan
```
GET    /api/tahun-data
GET    /api/drainase/tahun/:year
```

### Upload
```
POST   /api/upload/shapefile
POST   /api/upload/photos
```

Lihat [API Documentation](./docs/API.md) untuk endpoint lengkap.

---

## 🗺️ GIS Features

- **Spatial Query**: PostGIS advanced spatial queries
- **Geometry Management**: Create, update, delete geometries
- **Layer Management**: Multiple layer support dengan toggle
- **Basemap Options**: OpenStreetMap, Satellite, Terrain
- **Measurement Tools**: Distance, area calculations
- **Drawing Tools**: Polygon, line, point drawing capabilities
- **Heatmap Visualization**: Flooding point density heatmap
- **Time Slider**: Historical data visualization by year

---

## 📈 Dashboard Statistik

- Total saluran drainase
- Kondisi drainase (baik/rusak/perlu perbaikan)
- Panjang total saluran
- Titik genangan teridentifikasi
- Statistik per kecamatan/kelurahan
- Grafik tren per tahun
- Prediksi kebutuhan perbaikan

---

## 💾 Export Formats

- **Excel** (.xlsx) - Data tabel
- **PDF** - Laporan tahunan
- **GeoJSON** - Format GIS standar
- **Shapefile** (.shp) - Format ArcGIS

---

## 🔄 Workflow Pendataan

1. **Surveyor** melakukan survey lapangan
2. **Surveyor** input data via mobile atau web
3. **Surveyor** upload foto lokasi
4. **Surveyor** mark geometry di map
5. **Admin** verifikasi data
6. **Admin** approve/reject data
7. Data masuk ke master database
8. Data visualisasi di public dashboard

---

## 📱 Mobile Support

- Progressive Web App (PWA)
- Responsive design
- Offline mode untuk view map
- GPS geolocation support
- Camera integration untuk upload foto

---

## 🎨 UI/UX Design

- Modern smart city dashboard aesthetic
- Glassmorphism design elements
- Dark/Light mode support
- Smooth animations dengan Framer Motion
- Loading skeleton screens
- Toast notifications
- Interactive data visualization

---

## 🧪 Testing

```bash
# Frontend tests
cd frontend && npm run test

# Backend tests
cd backend && npm run test

# E2E tests
npm run test:e2e
```

---

## 📝 Logging & Monitoring

- Audit log untuk semua aksi user
- Request logging
- Error tracking
- Performance monitoring
- Database query logging (development)

---

## 🔄 Backup & Recovery

- Automated daily database backups
- Backup retention policy
- Point-in-time recovery
- Data versioning system

---

## 📞 Support & Maintenance

Untuk support dan maintenance, hubungi:
- Email: support@brebes.go.id
- Issue Tracker: GitHub Issues
- Documentation: ./docs

---

## 📄 License

MIT License - Lihat LICENSE file untuk detail.

---

## 👨‍💻 Authors

- **Dinas Pekerjaan Umum Bidang Cipta Karya**
- Kabupaten Brebes, Jawa Tengah

---

## 🙏 Acknowledgments

- Leaflet.js untuk mapping library
- PostGIS untuk spatial database
- React community
- OpenStreetMap contributors

---

## 🔗 Useful Links

- [Leaflet Documentation](https://leafletjs.com)
- [PostGIS Documentation](https://postgis.net)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)

---

**Last Updated**: 2026-05-29
**Version**: 1.0.0
**Status**: Production Ready
