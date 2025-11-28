<template>
  <SplashScreen 
    :duration="2500" 
    :useMobileLogo="true" 
    v-if="!appLoaded" 
  />

  <div v-else class="min-h-screen bg-gradient-to-br from-white-900 to-purple-900 py-10 px-0">
    <Header />
    
    <main class="pt-10 px-0 max-w-10xl mx-auto">
      <RouterView />
    </main>
  </div>
  
  <Footer v-if="appLoaded" />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue'; 
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// Path sudah diperbaiki dari error sebelumnya
import SplashScreen from './views/SplashScreen.vue'; 


// Deklarasi state untuk mengontrol kapan konten utama dimuat
const appLoaded = ref(false);
const splashDuration = 2500; 

// Ketika komponen terpasang, atur timer untuk menyembunyikan splash screen
onMounted(() => {
  setTimeout(() => {
    appLoaded.value = true;
  }, splashDuration);
});
</script>