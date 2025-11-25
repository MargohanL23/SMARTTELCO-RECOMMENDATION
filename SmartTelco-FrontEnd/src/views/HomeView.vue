<template>
  <div class="min-h-screen bg-gradient-to-br from-white-900 to-purple-900 overflow-hidden">
    
    <div class="fixed inset-0 opacity-30 pointer-events-none">
      <div class="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <div class="relative z-10 space-y-20 pt-16 pb-16 px-6">

      <div class="max-w-7xl mx-auto">
        
          
          <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          <div class="relative z-10 grid md:grid-cols-2 gap-12 items-center p-12 md:p-16">
            
            <div class="flex flex-col justify-center space-y-8">
              <div>
                <h1 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-400 to-cyan-300 leading-tight tracking-tight mb-4 text-center">
                  Sistem Rekomendasi Paket Telco Cerdas
                </h1>
                <div class="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              </div>

              <p class="text-blue-750/200 text-lg leading-relaxed font-light text-justify">
                Didukung oleh <span class="font-semibold text-blue-900">Machine Learning (XGBoost)</span>, sistem ini melakukan personalisasi penawaran paket dengan akurasi tinggi. Kami menganalisis secara multidimensi pola perilaku pelanggan—mulai dari frekuensi top-up, rata-rata penggunaan data (GB), durasi panggilan (Menit), hingga skor keluhan—untuk memprediksi penawaran yang paling optimal.
              </p>

              <p class="text-blue-750/100 text-base font-light">
                Hasilnya: <span class="text-green-700 font-semibold">peningkatan konversi penjualan dan loyalitas pelanggan</span> karena setiap rekomendasi terasa sangat relevan.
              </p>

              <RouterLink
                to="/simulation"
                class="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-gray-900 font-extrabold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 w-fit group">
                <span>→ MULAI SIMULASI</span>
                <span class="group-hover:translate-x-1 transition duration-300">→</span>
              </RouterLink>
            </div>

            <div class="hidden md:flex justify-center items-center">
              <div class="relative w-full" :style="{ maxWidth: '600px' }"> 

                <img
                  src="/images/SmartTelco_ilustration.png"
                  alt="Hero Illustration"
                  class="w-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
                  :style="{ height: '450px' }" 
                />  
                
              </div>
            </div>
          </div>
        
      </div>

      <div 
        id="businessSection" 
        class="max-w-7xl mx-auto transition-opacity duration-1000 transform"
        :class="{'opacity-100 translate-y-0': isBusinessVisible, 'opacity-0 translate-y-10': !isBusinessVisible}"
      >
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 mb-4">
            Nilai Bisnis & Inovasi
          </h2>
          <div class="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <div class="group relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md border border-blue-400/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-300/40 transition duration-300 transform hover:-translate-y-2"
               :style="{ transitionDelay: isBusinessVisible ? '0ms' : '0ms' }"> 
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            
            <div class="relative z-10">
              <div class="text-6xl mb-6 text-center">🎯</div>
              <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400 mb-4 text-center">
                Presisi Tinggi
              </h3>
              <p class="text-blue-800/70 text-sm leading-relaxed text-justify">
                Menggunakan algoritma Machine Learning mutakhir yang dilatih dengan dataset masif perilaku historis pelanggan. Sistem menganalisis variabel kompleks secara real-time untuk menghasilkan prediksi <span class="font-semibold text-blue-900">Target Offer</span> dengan tingkat akurasi tertinggi.
              </p>
            </div>
          </div>

          <div class="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md border border-green-400/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-green-300/40 transition duration-300 transform hover:-translate-y-2"
               :style="{ transitionDelay: isBusinessVisible ? '200ms' : '0ms' }"> 
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            
            <div class="relative z-10">
              <div class="text-6xl mb-6 text-center">💰</div>
              <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-600 mb-4 text-center">
                Peningkatan Revenue
              </h3>
              <p class="text-green-700/100 text-sm leading-relaxed text-justify">
                Mentransformasi strategi penjualan menjadi pendekatan presisi yang berdampak langsung pada <span class="font-semibold text-green-800">Bottom Line</span>. Meningkatkan <span class="font-semibold">Average Revenue Per User</span> sekaligus menekan <span class="font-semibold">marketing waste</span> untuk <span class="font-semibold">Return on Investment</span> maksimal.
              </p>
            </div>
          </div>

          <div class="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-300/40 transition duration-300 transform hover:-translate-y-2"
               :style="{ transitionDelay: isBusinessVisible ? '400ms' : '0ms' }">
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            
            <div class="relative z-10">
              <div class="text-6xl mb-6 text-center">📊</div>
              <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-400 mb-4 text-center">
                Segmentasi Dinamis
              </h3>
              <p class="text-purple-800/70 text-sm leading-relaxed text-justify">
                Sistem mampu mendeteksi perubahan perilaku pelanggan secara instan dan mengkategorikan mereka ke dalam mikro-segmen spesifik seperti <span class="font-semibold text-purple-900">High-Bandwidth Streamers</span> atau <span class="font-semibold">Price-Sensitive Users</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <div 
        id="offersSection" 
        class="max-w-7xl mx-auto transition-opacity duration-1000 transform"
        :class="{'opacity-100 translate-y-0': isOffersVisible, 'opacity-0 translate-y-10': !isOffersVisible}"
      >
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 mb-4">
            Jelajahi Jenis Penawaran Kami
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Sistem kami merekomendasikan penawaran-penawaran ini berdasarkan pola perilaku unik setiap pelanggan.
          </p>
          <div class="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mt-4"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '0ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-blue-600">🚀</div>
              <h3 class="text-xl font-bold text-gray-800">Data Booster</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Data Booster adalah paket add-on yang dirancang untuk memberikan tambahan kuota internet tanpa mengubah paket utama pengguna. Solusi ini umumnya digunakan ketika pengguna telah mendekati atau telah melewati batas kuota reguler, tetapi masih membutuhkan konektivitas yang stabil untuk aktivitas digital. Data Booster biasanya bersifat fleksibel, tersedia dalam berbagai ukuran kuota, dan berlaku dalam jangka waktu tertentu. Produk ini memaksimalkan pengalaman pengguna dengan memastikan tidak ada gangguan layanan akibat kehabisan kuota, khususnya untuk aktivitas intensif seperti streaming video, penggunaan aplikasi produktivitas, dan akses media sosial dengan cukup tinggi.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '100ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-indigo-600">📱</div>
              <h3 class="text-xl font-bold text-gray-800">Device Upgrade Offer</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Device Upgrade Offer adalah penawaran khusus yang memungkinkan pengguna untuk meningkatkan perangkat mereka ke model terbaru dengan biaya yang lebih efisien dan proses yang lebih sederhana. Penawaran ini biasanya mencakup potongan harga, cicilan ringan, atau bundling dengan paket tertentu. Inisiatif ini dirancang untuk mempercepat siklus pembaruan perangkat pengguna sehingga mereka dapat menikmati teknologi terbaru, mulai dari peningkatan performa, kualitas kamera, hingga efisiensi baterai tanpa harus menanggung biaya penuh perangkat baru.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '200ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-green-600">👨‍👩‍👧‍👦</div>
              <h3 class="text-xl font-bold text-gray-800">Family Plan Offer</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Family Plan Offer adalah paket layanan yang disusun untuk memenuhi kebutuhan seluruh anggota keluarga dalam satu langganan terpadu. Biasanya, paket ini menyediakan kuota internet bersama (shared quota), unlimited call antar anggota keluarga, hingga fitur kontrol penggunaan untuk masing-masing lini. Layanan penawaran ini memberikan efisiensi biaya yang signifikan dan pengalaman terpusat dalam pengelolaan akun. Selain itu, Family Plan sering dilengkapi dengan fitur keamanan digital bagi anak, monitoring pemakaian, dan prioritas jaringan saat kondisi trafik padat.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '300ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-yellow-600">⭐</div>
              <h3 class="text-xl font-bold text-gray-800">General Offer</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              General Offer adalah kategori penawaran umum yang mencakup seluruh promo atau paket yang tidak terikat pada segmen pengguna tertentu. Penawaran ini biasanya bersifat luas dan menyasar seluruh pengguna, baik pengguna prabayar maupun pascabayar. General Offer mencakup potongan harga paket internet, promosi musiman, penawaran bundling, serta program loyalitas. Inisiatif ini dirancang untuk meningkatkan engagement pengguna secara menyeluruh dan memberikan opsi yang lebih kompetitif dari sisi biaya maupun nilai layanan.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '400ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-red-600">🛡️</div>
              <h3 class="text-xl font-bold text-gray-800">Retention Offer</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Retention Offer adalah penawaran yang secara khusus ditujukan kepada pengguna dengan risiko churn, yakni pengguna yang berpotensi berhenti menggunakan layanan. Paket ini biasanya bersifat personalisasi, disesuaikan berdasarkan pola kebiasaan setiap pengguna, serta mencakup insentif seperti diskon eksklusif, tambahan kuota, atau upgrade layanan tanpa biaya tambahan. Tujuan strategis dari Retention Offer adalah mempertahankan pengguna bernilai tinggi, meminimalkan churn rate, dan menjaga profitabilitas jangka panjang melalui loyalty reinforcement.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '500ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-cyan-600">✈️</div>
              <h3 class="text-xl font-bold text-gray-800">Roaming Pass</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Roaming Pass adalah paket untuk pengguna tetap terhubung ketika berada di luar negeri tanpa khawatir mengenai biaya roaming yang tinggi. Paket ini biasanya mencakup kuota internet, menit telepon, dan SMS dengan tarif yang telah ditetapkan secara transparan. Roaming Pass dirancang untuk pengguna yang melakukan perjalanan internasional, baik untuk keperluan bisnis maupun pribadi, dan memastikan pengalaman komunikasi yang seamless di berbagai negara mitra jaringan.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '600ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-pink-600">📺</div>
              <h3 class="text-xl font-bold text-gray-800">Streaming Partner Pack</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Streaming Partner Pack adalah paket khusus untuk pengguna yang aktif menggunakan layanan streaming seperti YouTube, Netflix, Spotify, atau platform hiburan mitra lainnya. Paket ini memberikan kuota khusus streaming yang tidak memotong kuota utama, sehingga pengguna dapat menikmati video dan musik berkualitas tinggi secara lebih efisien. Selain itu, beberapa provider juga menawarkan akses premium atau masa uji coba gratis sebagai bagian dari kolaborasi dengan penyedia layanan streaming.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '700ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-orange-600">🎁</div>
              <h3 class="text-xl font-bold text-gray-800">Top-Up Promo</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Top-Up Promo adalah inisiatif insentif yang ditujukan untuk memberikan nilai tambah pada setiap transaksi pengisian pulsa atau pembelian kredit. Program ini biasanya menawarkan benefit seperti bonus kuota data, cashback, reward points, atau perpanjangan masa aktif yang secara langsung meningkatkan efisiensi biaya bagi pengguna. Dari perspektif layanan, Top-Up Promo berfungsi sebagai mekanisme penguatan engagement dan mendorong frekuensi transaksi, terutama pada periode momen promosi tertentu seperti musim liburan, event nasional, atau momentum penjualan khusus. Dengan pendekatan ini, pengguna memperoleh pengalaman yang lebih bernilai sekaligus fleksibilitas dalam mengelola kebutuhan komunikasinya.
            </p>
          </div>

          <div class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1" :style="{ transitionDelay: isOffersVisible ? '800ms' : '0ms' }">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-3xl text-purple-600">📞</div>
              <h3 class="text-xl font-bold text-gray-800">Voice Bundle</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">
              Voice Bundle adalah paket panggilan suara yang menawarkan kuota menit telepon lebih tinggi dengan tarif yang lebih ekonomis dibandingkan tarif reguler. Paket ini dirancang bagi pengguna yang masih intens menggunakan layanan panggilan suara, baik untuk kebutuhan bisnis maupun komunikasi sehari-hari. Voice Bundle juga sering kali mencakup kombinasi panggilan ke sesama operator, ke operator lain, serta ke nomor internasional, memberikan fleksibilitas penuh dan efisiensi biaya.
            </p>
          </div>
        </div>
      </div>


      <div 
        id="ctaSection" 
        class="max-w-4xl mx-auto transition-opacity duration-1000 transform"
        :class="{'opacity-100 translate-y-0': isCtaVisible, 'opacity-0 translate-y-10': !isCtaVisible}"
      >
        <div class="relative bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg border border-blue-300/30 rounded-3xl p-12 shadow-2xl text-center overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
          
          <div class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400 mb-6">
              Siap Menguji Kecerdasan Model Kami?
            </h3>
            <p class="text-blue-700/100 text-lg mb-8 font-light">
              Rasakan sendiri bagaimana AI kami memberikan rekomendasi yang paling akurat untuk bisnis Anda
            </p>
            
            <RouterLink
              to="/simulation"
              class="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-extrabold py-4 px-12 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 group">
              <span>UJI MODEL SEKARANG</span>
              <span class="group-hover:translate-x-1 transition duration-300">→</span>
            </RouterLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 1. Definisikan status reaktif untuk setiap section
const isBusinessVisible = ref(false);
const isOffersVisible = ref(false);
const isCtaVisible = ref(false);

let observers = [];

const setupIntersectionObserver = () => {
    // Threshold 0.1 berarti observer terpicu ketika 10% elemen terlihat.
    // Kita gunakan threshold ini untuk mendeteksi MASUK dan KELUAR dari viewport.
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const sections = [
        { ref: 'businessSection', state: isBusinessVisible },
        { ref: 'offersSection', state: isOffersVisible },
        { ref: 'ctaSection', state: isCtaVisible },
    ];

    sections.forEach(section => {
        const element = document.getElementById(section.ref);
        if (element) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // KETIKA MASUK VIEWPORT: Tampilkan (Picup animasi)
                        section.state.value = true;
                    } else {
                        // KETIKA KELUAR VIEWPORT: Sembunyikan kembali (Reset animasi)
                        section.state.value = false;
                    }
                });
            }, observerOptions);

            observer.observe(element);
            observers.push(observer);
        }
    });
};

onMounted(() => {
    setupIntersectionObserver();
});

onBeforeUnmount(() => {
    // Hapus observers saat komponen dilepas
    observers.forEach(observer => observer.disconnect());
});
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>