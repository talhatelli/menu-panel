# Restaurant QR Menu & Yönetim Paneli

Modern restoranlar için geliştirilmiş, QR kod tabanlı menü ve sipariş yönetim sistemi. Müşteriler masalardaki QR kodları okutarak menüye erişebilir ve sipariş verebilir, tüm siparişler anında yönetim paneline düşer.

## 🎯 Sistem Özellikleri

### 1. QR Kod Sistemi
- Her masaya özel benzersiz QR kodlar
- QR kod üzerinden menüye kolay erişim
- Masa bazlı sipariş takibi
- Temassız sipariş imkanı

[QR Kod Yönetimi Ekran Görüntüsü]

### 2. Menü Yönetimi
- Kategori bazlı ürün organizasyonu
- Ürün ekleme, düzenleme ve silme
- Fiyat ve stok yönetimi
- Özel notlar ve alerjen bilgileri ekleme

[Menü Yönetimi Ekran Görüntüsü]

### 3. Sipariş Takip Sistemi
- Anlık sipariş bildirimleri
- Masa bazlı sipariş görüntüleme
- Sipariş durumu güncelleme
- Sipariş geçmişi ve raporlama

[Sipariş Takip Ekranı Görüntüsü]

### 4. Yönetim Paneli
- Kullanıcı dostu arayüz
- Detaylı raporlama
- Personel yönetimi
- Sistem ayarları

[Dashboard Ekran Görüntüsü]

## 🛠 Teknik Altyapı

- **Frontend:** Vue.js 3 + TypeScript
- **UI Framework:** Ant Design Vue
- **State Management:** Pinia
- **API İletişimi:** Axios
- **Build Tool:** Vite

## 📱 Kullanıcı Arayüzleri

### 1. Giriş Ekranı
- Güvenli giriş sistemi
- Rol bazlı yetkilendirme
- Şifre yenileme özelliği

[Giriş Ekranı Görüntüsü]

### 2. Ana Dashboard
- Günlük sipariş özeti
- Aktif masalar
- Popüler ürünler
- Satış grafikleri

[Dashboard Görüntüsü]

### 3. Kategori ve Ürün Yönetimi
- Sürükle-bırak kategori sıralaması
- Toplu ürün işlemleri
- Görsel yükleme ve düzenleme
- Fiyat güncelleme

[Kategori Yönetimi Görüntüsü]

### 4. Sipariş İşlemleri
- Gerçek zamanlı sipariş takibi
- Masa durumu monitörü
- Sipariş detayları
- Mutfak ekranı

[Sipariş Ekranı Görüntüsü]

## 💡 Müşteri Deneyimi

1. **QR Kod Okutma**
   - Masadaki QR kodu okut
   - Menüyü görüntüle
   - Sipariş ver
   
[QR Kod Kullanımı Görüntüsü]

2. **Menü Görüntüleme**
   - Kategorilere göz at
   - Ürün detaylarını incele
   - Fiyatları gör
   
[Müşteri Menü Görüntüsü]

3. **Sipariş Verme**
   - Ürün seç
   - Özel notlar ekle
   - Siparişi onayla
   
[Sipariş Verme Ekranı]

## 🔧 Kurulum

1. Projeyi klonlayın
```bash
git clone [proje-url]
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

## 📊 Raporlama Özellikleri

- Günlük/Haftalık/Aylık satış raporları
- Popüler ürün analizleri
- Masa doluluk oranları
- Personel performans takibi

[Raporlama Ekranı Görüntüsü]

## 🔒 Güvenlik

- JWT tabanlı kimlik doğrulama
- Rol bazlı yetkilendirme
- Güvenli API iletişimi
- Veri şifreleme

## 📱 Mobil Uyumluluk

- Responsive tasarım
- Mobil cihazlarda optimize performans
- Touch-friendly arayüz

[Mobil Görünüm Ekran Görüntüsü]
