<template>
  <div 
    class="card text-center group cursor-pointer"
    data-aos="fade-up"
    :data-aos-delay="delay"
  >
    <div class="mb-4 transform transition-transform duration-300 group-hover:scale-110">
      <div class="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
        <i :class="icon" class="text-3xl"></i>
      </div>
    </div>
    <h3 class="text-xl font-bold mb-3 text-gray-900">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: {
    type: String,
    default: 'bi bi-star-fill'
  },
  delay: {
    type: Number,
    default: 0
  }
});
</script>
