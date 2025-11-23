<template>
  <header class="fixed top-0 left-0 w-full backdrop-blur-xl bg-gradient-to-b from-blue-900/40 to-blue-900/20 border-b border-blue-400/20 shadow-lg z-50">
    <nav class="max-w-8xl mx-auto flex items-center justify-between py-4 px-6">

      <!-- Logo -->
      <RouterLink to="/home" class="flex items-center gap-2 hover:opacity-80 transition duration-300">
        <img 
          src="/images/SmartTelco_logo.png"
          alt="SmartTelco Logo"
          class="h-10 w-auto object-contain"
        />
      </RouterLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-2">
        <RouterLink 
          to="/home" 
          class="px-6 py-2 rounded-full text-blue-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          Home
        </RouterLink>
        
        <RouterLink 
          to="/simulation" 
          class="px-6 py-2 rounded-full text-blue-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          Simulation
        </RouterLink>
        
        <RouterLink 
          to="/about" 
          class="px-6 py-2 rounded-full text-blue-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          About Us
        </RouterLink>

        <template v-if="!isLoggedIn">
          <RouterLink 
            to="/login" 
            class="px-6 py-2 rounded-full text-blue-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
          >
            Login
          </RouterLink>
          
          <RouterLink 
            to="/register" 
            class="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold hover:from-yellow-300 hover:to-orange-300 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Register
          </RouterLink>
        </template>

        <template v-else>
          <button 
            @click="logoutUser" 
            class="px-6 py-2 rounded-full text-red-500 font-semibold hover:bg-red-500/30 hover:text-red-100 transition duration-300 border border-transparent hover:border-red-400/50"
          >
            Logout
          </button>
        </template>
      </div>

      <!-- Smooth Spring Burger Button -->
      <button 
        @click="toggleMenu"
        class="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
      >
        <!-- Line 1 -->
        <span
          :class="[
            'burger-line',
            mobileOpen ? 'top-line-open' : 'top-line-close'
          ]"
        ></span>

        <!-- Line 2 -->
        <span
          :class="[
            'burger-line',
            mobileOpen ? 'mid-line-open' : 'mid-line-close'
          ]"
        ></span>

        <!-- Line 3 -->
        <span
          :class="[
            'burger-line',
            mobileOpen ? 'bot-line-open' : 'bot-line-close'
          ]"
        ></span>
      </button>

    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden backdrop-blur-xl bg-blue-900/40 border-t border-blue-400/20 animate-slideDown"
    >
      <div class="flex flex-col py-4 px-6 space-y-2">

        <RouterLink 
          to="/home" 
          @click="closeMenu" 
          class="px-4 py-3 rounded-lg text-blue-100 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          Home
        </RouterLink>
        
        <RouterLink 
          to="/simulation" 
          @click="closeMenu" 
          class="px-4 py-3 rounded-lg text-blue-100 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          Simulation
        </RouterLink>
        
        <RouterLink 
          to="/about" 
          @click="closeMenu" 
          class="px-4 py-3 rounded-lg text-blue-100 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          About Us
        </RouterLink>

        <template v-if="!isLoggedIn">
          <RouterLink 
            to="/login" 
            @click="closeMenu" 
            class="px-4 py-3 rounded-lg text-blue-100 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
          >
            Login
          </RouterLink>
          
          <RouterLink 
            to="/register" 
            @click="closeMenu" 
            class="px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold hover:from-yellow-300 hover:to-orange-300 transition duration-300 text-center"
          >
            Register
          </RouterLink>
        </template>

        <template v-else>
          <button 
            @click="logoutUser" 
            class="px-4 py-3 rounded-lg text-red-300 font-semibold hover:bg-red-500/30 hover:text-red-100 transition duration-300 border border-transparent hover:border-red-400/50 text-left"
          >
            Logout
          </button>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { getUser, clearUser } from "../utils/storage";

const router = useRouter();
const isLoggedIn = ref(false);
const mobileOpen = ref(false);

onMounted(() => {
  isLoggedIn.value = !!getUser();
});

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value;
}

function closeMenu() {
  mobileOpen.value = false;
}

function logoutUser() {
  clearUser();
  isLoggedIn.value = false;
  router.push("/login");
  closeMenu();
}
</script>

<style scoped>
/* SPRING PHYSICS ANIMATION */
.burger-line {
  @apply absolute h-[3px] w-7 bg-blue-200 rounded-full;
  transition: transform 0.45s cubic-bezier(0.22, 1.61, 0.36, 1),
              opacity 0.3s ease,
              top 0.3s cubic-bezier(0.22, 1.61, 0.36, 1);
}

/* CLOSED STATE POSITIONS */
.top-line-close { top: 8px; }
.mid-line-close { top: 17px; }
.bot-line-close { top: 26px; }

/* OPEN STATE — WITH SPRING EFFECT */
.top-line-open {
  top: 17px;
  transform: rotate(45deg) scale(1.05);
}
.mid-line-open {
  opacity: 0;
  transform: scale(0.5);
}
.bot-line-open {
  top: 17px;
  transform: rotate(-45deg) scale(1.05);
}

/* SlideDown Animation for mobile menu */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slideDown {
  animation: slideDown 0.25s ease-out;
}
</style>