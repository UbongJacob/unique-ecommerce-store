<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getProducts } from "@/api/products.api";

const { isPending, isError, data, error } = useQuery({
  queryKey: ["Products"],
  queryFn: getProducts,
});

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
</script>
<template>
  <div class="container py-5 px-3 sm:px-4 md:px-5 2xl:px-0">
    <div class="flex items-center justify-between gap-10 flex-wrap">
      <h1 class="font-semibold text-xl md:text-2xl lg:text-3xl">
        Product list
      </h1>

      <Button>Checkout</Button>
    </div>

    <div v-if="isPending">Loading...</div>
    <div v-else-if="isError">Sorry an error occured {{ error }}</div>

    <ul
      v-else
      class="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <li
        class="h-full flex flex-col"
        v-for="(product, index) in data?.data?.data"
        :key="index"
      >
        <Card
          class="h-full overflow-hidden flex flex-col cursor-pointer hover:bg-blue-50 transition-all duration-300"
        >
          <div>
            <img
              :src="product?.featured_image ?? ''"
              class="w-full aspect-square object-contain bg-white"
            />
          </div>
          <CardHeader>
            <CardTitle class="text-base">{{ product.name }}</CardTitle>
            <CardDescription>{{ product.category_name }}</CardDescription>
          </CardHeader>

          <CardContent class="flex-1 flex flex-col justify-end">
            <Button class="mt-auto">Add to cart</Button>
          </CardContent>
        </Card>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>
