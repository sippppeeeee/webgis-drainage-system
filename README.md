# WebGIS Drainage System - DINAS PEKERJAAN UMUM Kabupaten Brebes

Aplikasi fullstack modern berbasis WebGIS untuk pendataan saluran drainase perkotaan dengan tampilan profesional, responsif, interaktif, dan siap deploy ke hosting.

## 📋 Daftar Isi
- [Teknologi](#teknologi)
- [Fitur Utama](#fitur-utama)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Struktur Database](#struktur-database)

## 🚀 Teknologi

### Frontend
- **React 18** + **Vite**
- **TailwindCSS** untuk styling
- **Leaflet.js** untuk peta interaktif
- **Axios** untuk HTTP client
- **React Router** v6
- **Framer Motion** untuk animasi UI
- **Recharts** untuk dashboard statistik
- **Leaflet Draw** untuk editing geometry
- **Leaflet Timeline** untuk time slider

### Backend
- **Node.js** + **Express.js**
- **JWT Authentication** dengan bcrypt
- **Multer** untuk upload file
- **Helmet** untuk security headers
- **Rate Limiter** untuk rate limiting
- **CORS** untuk cross-origin requests
- **Joi** untuk validasi data

### Database
- **PostgreSQL** + **PostGIS** untuk spatial data
- **Prisma ORM** untuk database management
- **pgAdmin** untuk administration (optional)

### GIS & Spatial
- **GeoJSON** format
- **Shapefile (.shp)** upload dan konversi
- **PostGIS** untuk spatial queries
- **Turf.js** untuk spatial analysis

### DevOps & Deployment
- **Docker** & **Docker Compose**
- **Nginx** reverse proxy
- **PM2** untuk process management
- **.env** environment configuration

## ✨ Fitur Utama

### 1. Landing Page & Dashboard Publik
- Hero section dengan WebGIS terintegrasi
- Statistik drainase realtime
- Peta interaktif fullscreen
- Berita terbaru slider
- Filter kondisi drainase
- Grafik statistik modern
- Responsive mobile-first design

### 2. Peta Interaktif WebGIS
- **Layers:**
  - Drainase Primer/Sekunder/Tersier
  - Titik Genangan
  - Jalan
  - Batas Administrasi
- **Fitur Peta:**
  - Zoom & Pan
  - Popup informasi detail
  - Basemap switcher (OSM, Satellite, Terrain)
  - Fullscreen mode
  - Measure tools
  - Coordinate cursor
  - Legend & Layer control
  - Search location
  - Geolocation user

### 3. Pendataan Drainase (CRUD)
- Form lengkap input data drainase
- Multiple photo upload
- Edit geometry langsung di map
- Validasi real-time
- Status tracking (normal/rusak)
- Tahun pembangunan & perbaikan

### 4. Upload SHP & Edit GIS
- Import Shapefile otomatis
- Konversi GeoJSON
- Draw polygon/line/point
- Edit vertex
- Delete feature
- Realtime spatial data update

### 5. Modul Titik Genangan
- Input titik banjir dengan detail
- Heatmap genangan
- Radius terdampak
- Status penanganan
- Foto lokasi

### 6. Modul Berita & Informasi
- CMS berita lengkap
- Upload thumbnail
- Text editor
- Kategori & tag
- Slider di homepage

### 7. Sistem Admin Dashboard
- Statistik realtime
- Grafik interaktif
- Tabel data dengan sorting & filtering
- Export Excel/PDF
- Multi-user role system:
  - Super Admin
  - Admin
  - Surveyor
  - Viewer

### 8. Sistem Historis Per Tahun
- Master tahun data (2023-2026+)
- Filter multi-tahun
- Time slider animasi
- Perbandingan kondisi antar tahun
- Arsip data tahunan
- Dashboard statistik per tahun
- Trend analysis

### 9. Autentikasi & Keamanan
- Login/Logout JWT
- Password hashing bcrypt
- Role-based access control
- Session management
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation

### 10. Export Data
- Excel
- PDF (laporan)
- GeoJSON
- Shapefile
- Per tahun

## 📁 Struktur Folder

```
webgis-drainage-system/
├── frontend/                 # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Map/
│   │   │   ├── Dashboard/
│   │   │   ├── Admin/
│   │   │   ├── Common/
│   │   │   └── Forms/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
├── backend/                  # Node.js + Express
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── config/
│   │   └── app.js
│   ├── prisma/
│   │   └── schema.prisma
│   ├── migrations/
│   ├── uploads/
│   ├── package.json
│   ├── .env.example
│   └── server.js
│
├── database/
│   ├── schema.sql
│   ├── initial_data.sql
│   └── migrations/
│
├── docker/
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── docker-compose.yml
│
├── nginx/
│   ├── nginx.conf
│   └── conf.d/
│
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── DATABASE.md
│   ├── GIS_GUIDE.md
│   └── USER_MANUAL.md
│
├── scripts/
│   ├── deploy.sh
│   ├── init-db.sh
│   └── backup-db.sh
│
└── .env.example
```

## 🔧 Instalasi

### Prerequisites
- Node.js v18+
- PostgreSQL 13+ dengan PostGIS
- Docker & Docker Compose (optional)
- Git

### Clone Repository
```bash
git clone https://github.com/sippppeeeee/webgis-drainage-system.git
cd webgis-drainage-system
```

### Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env sesuai konfigurasi
```

### Setup Backend
```bash
cd ../backend
npm install
cp .env.example .env
# Edit .env dengan konfigurasi database
npx prisma migrate dev
npx prisma db seed
```

### Setup Database
```bash
# Create database
createdb drainage_system

# Install PostGIS extension
psql drainage_system -c "CREATE EXTENSION postgis;"

# Run initial SQL
psql drainage_system < ../database/schema.sql
psql drainage_system < ../database/initial_data.sql
```

## ⚙️ Konfigurasi

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_MAP_API_KEY=your_mapbox_key_optional
VITE_APP_NAME=WebGIS Drainage System
```

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/drainage_system
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Multer Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760

# CORS
CORS_ORIGIN=http://localhost:3000

# Rate Limiter
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX=100
```

## 🏃 Menjalankan Aplikasi

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server berjalan di http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# App berjalan di http://localhost:5173
```

### Production Mode dengan Docker

```bash
docker-compose up -d

# Akses aplikasi di http://localhost
```

### Check Services
```bash
# Backend API
curl http://localhost:5000/api/health

# PostgreSQL
psql -U postgres -d drainage_system -c "SELECT PostGIS_version();"
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
Semua endpoint kecuali login memerlukan JWT token di header:
```
Authorization: Bearer <token>
```

### Drainage Endpoints
- `GET /drainase` - List semua drainase dengan filter & pagination
- `GET /drainase/:id` - Detail drainase
- `POST /drainase` - Tambah drainase baru
- `PUT /drainase/:id` - Update drainase
- `DELETE /drainase/:id` - Hapus drainase
- `GET /drainase/spatial/nearby?lat=X&lon=Y&distance=1000` - Spatial query
- `POST /drainase/upload-shp` - Upload shapefile

### Flooding Points Endpoints
- `GET /genangan` - List titik genangan
- `POST /genangan` - Tambah genangan
- `GET /genangan/heatmap` - Data heatmap
- `PUT /genangan/:id` - Update genangan
- `DELETE /genangan/:id` - Hapus genangan

### News Endpoints
- `GET /berita` - List berita
- `POST /berita` - Tambah berita
- `PUT /berita/:id` - Update berita
- `DELETE /berita/:id` - Hapus berita

### Analytics Endpoints
- `GET /analytics/dashboard` - Dashboard statistics
- `GET /analytics/yearly/:year` - Statistik per tahun
- `GET /analytics/comparison?year1=2024&year2=2025` - Perbandingan

### Admin Endpoints
- `GET /admin/users` - List users
- `POST /admin/users` - Tambah user
- `PUT /admin/users/:id` - Update user
- `DELETE /admin/users/:id` - Hapus user
- `POST /admin/export/excel` - Export Excel
- `POST /admin/export/pdf` - Export PDF

### Auth Endpoints
- `POST /auth/register` - Register user baru
- `POST /auth/login` - Login
- `POST /auth/logout` - Logout
- `POST /auth/refresh` - Refresh token
- `GET /auth/profile` - Get profile user

Lihat `/docs/API.md` untuk dokumentasi lengkap.

## 📊 Struktur Database

### Tabel Utama
- **users** - Data pengguna & login
- **drainase** - Data saluran drainase
- **drainase_photos** - Foto drainase
- **genangan** - Titik banjir/genangan
- **berita** - Berita & informasi
- **kategori_berita** - Kategori berita
- **wilayah** - Data kecamatan & kelurahan
- **tahun_data** - Master tahun data (2023-2026+)
- **drainase_histori** - Riwayat drainase per tahun
- **statistik_tahunan** - Statistik agregat per tahun

Lihat `/docs/DATABASE.md` untuk schema lengkap.

## 🚀 Deployment

### Quick Deploy ke VPS Ubuntu
```bash
bash scripts/deploy.sh production
```

### Manual Deployment
Lihat `/docs/DEPLOYMENT.md` untuk panduan lengkap:
- Deploy ke DigitalOcean
- Deploy ke AWS EC2
- Deploy ke Google Cloud
- Deploy ke Heroku
- Setup SSL dengan Let's Encrypt
- Backup database otomatis
- Monitoring dan logging

## 🔐 Keamanan

- ✅ JWT Token Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Role-Based Access Control (RBAC)
- ✅ Rate Limiting
- ✅ CORS Protection
- ✅ Helmet Security Headers
- ✅ Input Validation & Sanitization
- ✅ SQL Injection Prevention (Prisma ORM)
- ✅ XSS Protection
- ✅ CSRF Token (untuk forms)

## 📱 Responsive & Mobile Support

- Mobile-first design
- Progressive Web App (PWA)
- Offline mode support
- GPS location access
- Mobile photo upload
- Touch-optimized map controls

## 🎨 UI/UX Features

- Modern glassmorphism design
- Dark/Light mode toggle
- Smooth animations (Framer Motion)
- Loading skeleton
- Toast notifications
- Toast alerts
- Responsive grid layout
- Interactive charts & graphs

## 📈 Monitoring & Analytics

- Audit logging
- User activity tracking
- Performance monitoring
- Error logging
- Export reports

## 🤝 Contributing

Untuk berkontribusi:
1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - Lihat LICENSE file untuk detail.

## 📞 Support

Untuk pertanyaan atau issue:
- Buat GitHub Issue
- Email: support@drainage-system.local
- WhatsApp: +62-xxx-xxxx

## 👥 Tim Developer

- **Backend Developer** - Node.js + PostgreSQL
- **Frontend Developer** - React + TailwindCSS
- **GIS Developer** - PostGIS + Leaflet
- **DevOps Engineer** - Docker + Nginx

## 📝 Changelog

### v1.0.0 - Initial Release
- ✅ Landing page dengan peta interaktif
- ✅ CRUD drainase lengkap
- ✅ Modul genangan dengan heatmap
- ✅ Admin dashboard
- ✅ Sistem historis per tahun
- ✅ Export data multiple format
- ✅ User management & authentication
- ✅ Docker deployment ready

---

**Dikembangkan dengan ❤️ untuk DINAS PEKERJAAN UMUM Kabupaten Brebes**
