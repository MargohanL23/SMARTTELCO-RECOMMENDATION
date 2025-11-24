<template>
  <footer class="mt-0 py-6 w-full backdrop-blur-xl bg-gradient-to-b from-blue-900/40 to-blue-900/20 border-b border-blue-400/20 shadow-lg z-50">

    <div class="flex justify-center mb-4">
      <img
        src="/images/SmartTelco_logo.png"
        alt="SmartTelco Logo"
        class="h-10 w-auto object-contain"
      />
    </div>

    <div class="flex justify-center space-x-8 text-sm font-semibold mb-4">
      <RouterLink
        to="/home"
        class="hover:opacity-80"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/simulation"
        class="hover:opacity-80"
      >
        Simulation
      </RouterLink>

      <RouterLink
        to="/about"
        class="hover:opacity-80"
      >
        About Us
      </RouterLink>
    </div>

    <div class="flex justify-center space-x-6 mb-6 text-xl">

      <a href="#" class="hover:opacity-70 transition">
        <i class="bx bxl-facebook-circle"></i>
      </a>

      <a href="#" class="hover:opacity-70 transition">
        <i class="bx bxl-instagram"></i>
      </a>

      <a href="#" class="hover:opacity-70 transition">
        <i class="bx bxl-twitter"></i>
      </a>

      <a href="#" class="hover:opacity-70 transition">
        <i class="bx bxl-github"></i>
      </a>

      <a href="#" class="hover:opacity-70 transition">
        <i class="bx bxl-youtube"></i>
      </a>

    </div>

    <p class="text-center text-sm font-bold">
      SmartTelco © {{ new Date().getFullYear() }} — All Rights Reserved
    </p>

  </footer>
</template>

<script setup>
</script>