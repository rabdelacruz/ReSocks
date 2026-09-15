<template>
  <div 
    class="card relative overflow-visible transform transition-all duration-300 hover:-translate-y-2"
    :class="badge ? 'border-primary-600 border-3' : ''"
    data-aos="zoom-in"
    :data-aos-delay="delay"
  >
    <!-- Top Badge -->
    <div v-if="badge" class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
      <span class="px-4 py-2 rounded-full text-white font-semibold text-sm whitespace-nowrap"
            :class="badge.type === 'popular' ? 'bg-primary-600' : 'bg-green-600'">
        {{ badge.text }}
      </span>
    </div>
    
    <div class="text-center mb-4">
      <div class="mb-3">
        <i :class="icon" class="text-6xl text-primary-600"></i>
      </div>
      <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
      <div class="mb-2">
        <span class="text-5xl font-bold text-primary-600">€{{ price }}</span>
        <span v-if="period" class="text-gray-600 ml-1">/{{ period }}</span>
      </div>
      <!-- Monthly Price & Discount -->
      <div v-if="monthlyPrice || discount" class="mb-3">
        <span v-if="monthlyPrice" class="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm mr-1">
          {{ monthlyPrice }}
        </span>
        <span v-if="discount" class="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm">
          {{ discount }}
        </span>
      </div>
    </div>

    <ul class="space-y-3 mb-6">
      <li v-for="(feature, idx) in features" :key="idx" class="flex items-start" :class="{ invisible: !getFeatureText(feature) }">
        <i 
          :class="isHighlight(feature) ? 'bi bi-star-fill text-primary-600' : 'bi bi-check-circle-fill text-green-500'" 
          class="mr-2 flex-shrink-0 mt-0.5"
        ></i>
        <span :class="isHighlight(feature) ? 'text-primary-700 font-bold' : 'text-gray-700'">{{ getFeatureText(feature) }}</span>
      </li>
    </ul>

    <button 
      @click="$emit('select')"
      class="w-full py-3 rounded-lg font-semibold transition-all duration-300"
      :class="featured 
        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'"
    >
      {{ locale === 'zh' ? '立即购买' : 'Buy Now' }}
    </button>
  </div>
</template>

<script setup>

const { locale } = useI18n();

defineProps({
  title: String,
  price: String,
  period: String,
  icon: String,
  monthlyPrice: String,
  discount: String,
  badge: Object,
  features: Array,
  featured: Boolean,
  delay: {
    type: Number,
    default: 0
  }
});

defineEmits(['select']);

const isHighlight = (feature) => typeof feature === 'object' && feature !== null && feature.highlight;
const getFeatureText = (feature) => typeof feature === 'object' && feature !== null ? feature.text : feature;
</script>
