<template>
  <div class="splash-screen fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-1000" 
       :class="{ 'opacity-0 invisible': isLoaded }"
       style="background-color: #902809ff;">
    
    <div class="text-center p-10">
      
      <img
        :src="logoPath"
        alt="SmartTelco Logo"
        class="mx-auto w-32 md:w-48 mb-8 logo-animation"
      />
      
      <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-wider" 
          style="color: #c7dee07b;">
        Selamat Datang di SmartTelco
      </h1>

      <p class="text-lg md:text-xl font-medium text-gray-400 max-w-xl mx-auto mb-10">
        Masa depan Rekomendasi Telco ada pada layanan yang cerdas dan personal.
      </p>

      <div class="loader-dot-container">
        <div class="loader-dot" style="background-color: #d5cecf86;"></div>
        <div class="loader-dot" style="background-color: #d5cecf86;"></div>
        <div class="loader-dot" style="background-color: #d5cecf86;"></div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'SplashScreen',
  props: {
    // Properti untuk mengontrol kapan screen menghilang
    duration: {
      type: Number,
      default: 2000, // Durasi default 2 detik
    },
    // Properti untuk memilih logo (HP atau Website)
    useMobileLogo: {
        type: Boolean,
        default: false,
    }
  },
  setup(props) {
    const isLoaded = ref(false);
    
    // Pilih path logo yang tepat
    const logoPath = props.useMobileLogo 
        ? '/images/3D_Mobile_Logo_SmartTelco.png' 
        : '/images/logo_smarttelco.png';

    onMounted(() => {
      // Setelah komponen dipasang, tunggu durasi yang ditentukan lalu sembunyikan
      setTimeout(() => {
        isLoaded.value = true;
      }, props.duration);
    });

    return { isLoaded, logoPath };
  }
}
</script>

<style scoped>
/* --- ANIMASI CSS UNTUK LOADER --- */
.splash-screen {
  opacity: 1;
  visibility: visible;
}
.splash-screen.opacity-0 {
    opacity: 0;
    pointer-events: none; /* KRUSIAL: Agar tidak menghalangi klik */
}

/* Loader Dots */
.loader-dot-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}
.loader-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  animation: bounce 1.4s infinite ease-in-out both;
}
.loader-dot:nth-child(1) {
  animation-delay: -0.32s;
}
.loader-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}

/* Animasi Slogan (Opsional) */
.logo-animation {
    animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>