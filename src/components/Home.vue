<template>
  <div v-if="products">
    <slider :products="this.slides" />
    <hr />
    <div class="flex justify-between">
      <div class="mt-14">
        <search-component @search="searchHandler" />
        <category-component
          v-for="(item, index) in categories"
          :key="index"
          :label="item"
          :id="index"
          :isChecked="isChecked(index)"
          @remove-selected-filter="removeSelectedFilter"
          :modelValue="item"
          v-model="filter.filterCollection[index]"
          @filter="filterHandler"
        />
      </div>
      <div class="flex flex-wrap">
        <div v-for="product in products" :key="product.id" class="w-1/4 p-2">
          <div class="flex flex-col items-baseline">
            <div
              class="flex justify-center items-center overflow-hidden m-3 h-44"
              v-if="product.thumbnail"
            >
              <img :src="product.thumbnail" alt="" width="200" height="200" />
            </div>
            <div class="h-46 flex flex-col justify-between">
              <p class="text-xl p-5 text-center text-teal-900 font-semibold">
                {{ product.title }}
              </p>
              <p class="px-3 text-center text-pink-900 font-mono">
                Price : {{ product.price }} $
              </p>
              <p class="p-3 text-center text-violet-900 font-serif">
                Discount Percentage :{{ product.discountPercentage }} %
              </p>
              <router-link :to="{ name: 'Detail', params: { id: product.id } }">
                <div class="flex justify-center">
                  <button
                    class="border border-cyan-700 text-slate-900 p-2 rounded
                     hover:bg-cyan-700 hover:text-white"
                  >
                    Click for details
                  </button>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-component class="mt-5"/>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import axios from "axios";
import FooterComponent from "@/components/FooterComponent.vue";
import searchComponent from "@/components/searchComponent.vue";
import categoryComponent from "@/components/categoryComponent.vue";

export default {
  components: {
    Slider,
    FooterComponent,
    searchComponent,
    categoryComponent,
  },
  mounted() {
    axios.get("https://dummyjson.com/products").then((response) => {
      this.products = response.data.products;
      this.slides = response.data.products;
    });
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      this.categories = response.data;
    });
  },
  data() {
    return {
      products: [],
      categories: [],
      filter: {
        filterCollection: {},
      },
      slides: [],
    };
  },
  methods: {
    filterHandler(data) {
      console.log(data);
      if (data === "") {
        axios.get("https://dummyjson.com/products").then((response) => {
          this.products = response.data.products;
        });
      } else {
        axios
          .get(`https://dummyjson.com/products/category/${data}`)
          .then((response) => {
            console.log(response);
            this.products = response.data.products;
          });
      }
    },
    searchHandler(text) {
      axios
        .get(`https://dummyjson.com/products/search?q=${text}`)
        .then((response) => {
          this.products = response.data.products;
        });
    },
    removeSelectedFilter(index) {
      delete this.filter.filterCollection[index];
    },
    isChecked(index) {
      return !!this.filter.filterCollection[index];
    },
  },
};
</script>

<style></style>
