<template>
  <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper">
    <swiper-slide
      ><img
        :src="this.product1.thumbnail"
        alt=""
        @click="singleProduct(this.product1.id)"
      />
      <p class="p-10">{{ this.product1.description }}</p>
    </swiper-slide>
    <swiper-slide
      ><img
        :src="this.product2.thumbnail"
        alt=""
        @click="singleProduct(this.product2.id)"
      />
      <p class="p-10">{{ this.product2.description }}</p>
    </swiper-slide>
    <swiper-slide
      ><img
        :src="this.product3.thumbnail"
        alt=""
        @click="singleProduct(this.product3.id)"
      />
      <p class="p-10">{{ this.product3.description }}</p>
    </swiper-slide>
    <swiper-slide
      ><img
        :src="this.product4.thumbnail"
        alt=""
        @click="singleProduct(this.product4.id)"
      />
      <p class="p-10">{{ this.product4.description }}</p>
    </swiper-slide>
    <swiper-slide
      ><img
        :src="this.product5.thumbnail"
        alt=""
        @click="singleProduct(this.product5.id)"
      />
      <p class="p-10">{{ this.product5.description }}</p>
    </swiper-slide>
    <swiper-slide
      ><img
        :src="this.product6.thumbnail"
        alt=""
        @click="singleProduct(this.product6.id)"
      />
      <p class="p-10">{{ this.product6.description }}</p>
    </swiper-slide>
    <swiper-slide
      ><img
        :src="this.product7.thumbnail"
        alt=""
        @click="singleProduct(this.product7.id)"
      />
      <p class="p-10">{{ this.product7.description }}</p>
    </swiper-slide>
    <swiper-slide
      ><img
        :src="this.product8.thumbnail"
        alt=""
        @click="singleProduct(this.product8.id)"
      />
      <p class="p-10">{{ this.product8.description }}</p>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    return {
      onSwiper,
    };
  },
  props: {
    products: {
      type: Array,
      default: [],
    },
  },
  watch: {
    products(Val) {
      this.product1 = Val[0];
      this.product2 = Val[1];
      this.product3 = Val[2];
      this.product4 = Val[3];
      this.product5 = Val[4];
      this.product6 = Val[5];
      this.product7 = Val[6];
      this.product8 = Val[7];
    },
  },
  data() {
    return {
      product1: [],
      product2: [],
      product3: [],
      product4: [],
      product5: [],
      product6: [],
      product7: [],
      product8: [],
    };
  },
  methods: {
    singleProduct(data) {
      this.$router.push({ name: "Detail", params: { id: data } });
    },
  },
};
</script>
<style scoped>
.swiper-slide {
  @apply flex justify-center items-center p-10;
}
</style>
