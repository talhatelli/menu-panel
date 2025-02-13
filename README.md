# Restaurant QR Menu & Yönetim Paneli

Modern restoranlar için geliştirilmiş, QR kod tabanlı menü ve sipariş yönetim sistemi. Müşteriler masalardaki QR kodları okutarak menüye erişebilir ve sipariş verebilir, tüm siparişler anında yönetim paneline düşer.

## 🎯 Sistem Özellikleri

### 1. QR Kod Sistemi
- Her masaya özel benzersiz QR kodlar
- QR kod üzerinden menüye kolay erişim
- Masa bazlı sipariş takibi
- Temassız sipariş imkanı

### 2. Menü Yönetimi
- Kategori bazlı ürün organizasyonu
- Ürün ekleme, düzenleme ve silme
- Fiyat ve stok yönetimi
- Özel notlar ve alerjen bilgileri ekleme


### 3. Sipariş Takip Sistemi
- Anlık sipariş bildirimleri
- Masa bazlı sipariş görüntüleme
- Sipariş durumu güncelleme
- Sipariş geçmişi ve raporlama

### 4. Yönetim Paneli
- Kullanıcı dostu arayüz
- Detaylı raporlama
- Personel yönetimi
- Sistem ayarları

## 🛠 Teknik Altyapı

- **Frontend:** Vue.js 3 + TypeScript
- **UI Framework:** Ant Design Vue
- **State Management:** Pinia
- **API İletişimi:** Axios
- **Build Tool:** Vite

## 📱 Kullanıcı Arayüzleri
<img width="1440" alt="Screenshot 2025-02-13 at 11 22 17" src="https://github.com/user-attachments/assets/b56ba838-0e20-4452-acee-69ec46a755f5" />
<img width="1440" alt="Screenshot 2025-02-13 at 11 22 57" src="https://github.com/user-attachments/assets/2d323eb5-e013-48ce-ab34-af6e06efde2f" />
<img width="1440" alt="Screenshot 2025-02-13 at 11 23 08" src="https://github.com/user-attachments/assets/5f7bf418-ba96-457d-94d5-420ed8a036a1" />
<img width="1440" alt="Screenshot 2025-02-13 at 11 23 20" src="https://github.com/user-attachments/assets/24e1889c-1b7b-45f3-94dd-a1c22261ff20" />
<img width="1440" alt="Screenshot 2025-02-13 at 11 23 34" src="https://github.com/user-attachments/assets/f191a149-c48e-41a1-a04f-f8c477c2e375" />
<img width="1440" alt="Screenshot 2025-02-13 at 11 23 44" src="https://github.com/user-attachments/assets/3b716da7-ce1c-439f-8f46-68d56f388fcf" />
<img width="1440" alt="Screenshot 2025-02-13 at 11 23 51" src="https://github.com/user-attachments/assets/bc4d0518-3e8e-4865-b4de-7a8ec779bdc5" />
<img width="1440" alt="Screenshot 2025-02-13 at 11 24 18" src="https://github.com/user-attachments/assets/45ab2b58-6edc-41f2-a2b7-261676e40ff7" />

## 🔧 Kurulum

1. Projeyi klonlayın
```bash
git clone https://github.com/talhatelli/menu-panel.git
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

3. Environment değişkenlerini ayarlayın
```env
VITE_API_URL=http://localhost:3000
VITE_BASE_URL=http://localhost:3000
VITE_BACKEND_URL=http://localhost:3000
```

4. Geliştirme sunucusunu başlatın
```bash
npm run dev
```

## 👥 Kullanıcı Rolleri

1. **Admin**
   - Tam sistem yönetimi
   - Personel yönetimi
   - Raporlara erişim

2. **Garson**
   - Sipariş yönetimi
   - Masa durumu güncelleme
   - Menü görüntüleme

3. **Mutfak**
   - Sipariş görüntüleme
   - Sipariş durumu güncelleme

## 🔒 Güvenlik

- JWT tabanlı kimlik doğrulama
- Rol bazlı yetkilendirme
- Güvenli API iletişimi
- Veri şifreleme

## 📱 Mobil Uyumluluk

- Responsive tasarım
- Mobil cihazlarda optimize performans
- Touch-friendly arayüz
