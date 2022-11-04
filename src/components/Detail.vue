<template>
  <div class="flex flex-col justify-center items-center p-10">
    <img
      v-if="product.images"
      :src="product.images[1]"
      alt=""
      width="300"
      height="300"
      class="p-5"
    />
    <img
      v-else
      :src="product.thumbnail"
      alt="Broken-Image"
      width="300"
      height="300"
      class="p-5"
    />
    <p class="text-2xl py-5 font-semibold text-teal-900">
      Product Title : {{ product.title }}
    </p>
    <p class="text-lg py-3 font-semibold text-violet-700">
      Product Description : {{ product.description }}
    </p>
    <p class="text-lg py-3 font-semibold text-rose-900">
      Product Brand : {{ product.brand }}
    </p>
    <p class="text-lg py-3 font-mono text-gray-500">
      Product Price : {{ product.price }}$
    </p>
    <p class="text-lg py-3 font-serif text-amber-600">
      Product Stock : {{ product.stock }}
    </p>
    <p class="text-lg py-3 font-serif text-red-400">
      Product Rating : {{ product.rating }}
    </p>
    <p class="text-lg py-3 font-serif text-lime-700">
      Product Category : {{ product.category }}
    </p>
    <p class="text-lg py-3 font-serif text-cyan-700">
      Product DiscountPercentage : {{ product.discountPercentage }}%
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get(`https://dummyjson.com/products/${this.productId}`)
      .then((response) => {
        this.product = response.data;
      });
  },
  data() {
    return {
      productId: this.$route.params.id,
      product: [],
    };
  },
};
</script>

<style></style>
