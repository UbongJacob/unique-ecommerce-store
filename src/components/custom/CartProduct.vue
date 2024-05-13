<script setup lang="ts">
import { ICartItem } from "@/types";
import { formatNumber } from "@/utilities";

interface Props {
  data: ICartItem;
}

const productProp = defineProps<Props>();

const handleIncrease = () => {};

const handleDecrease = () => {};

const handleRemove = () => {};

const handleInputChange = (e: InputEvent) => {
  console.log({ e });

  // @ts-ignore
  //   const inputValue = useHelpers.formatNumber(e.target.value);

  //   const valueInStock = productProp.data?.in_stock;

  //   if (cartStore.isItemOncart(productProp.data?.product_id)) {
  //     cartStore.cartGetter[cartItemIndex].cart_Item_quantity = inputValue;
  //   }

  //   if (valueInStock) {
  //     if (inputValue > valueInStock) {
  //       if (cartStore.isItemOncart(productProp.data?.product_id)) {
  //         cartStore.cartGetter[cartItemIndex].cart_Item_quantity = valueInStock;
  //         cartStore.cartGetter[cartItemIndex].isClientModified = true;
  //       }
  //     }
  //   }
};

// const cartItemIndex = cartStore.getCartIndex(productProp.data?.product_id);
const cartItemIndex = 1;
console.log(cartItemIndex);
</script>

<template>
  <div class="mb-6 border-b pb-6 last:mb-0 last:border-b-0 last:pb-0">
    <div class="group flex-col sm:flex-row flex gap-x-4 w-full">
      <figure
        class="h-14 w-14 mx-auto sm:mx-0 flex-shrink-0 bg-gray-300 md:h-20 md:w-20"
      >
        <img
          :src="productProp.data.featured_image ?? ''"
          class="object-fit h-full w-full object-center"
          :alt="productProp.data.name"
        />
      </figure>
      <div class="flex-grow-1">
        <h2 class="text-sm font-bold group-hover:text-orange-400 md:text-base">
          {{ productProp.data.name }}
        </h2>

        <p class="text-sm text-neutral-400">
          In stock : {{ productProp.data.in_stock.toString() }}
        </p>
        <p class="font-mono text-sm">
          <span class="font-sans">₦ </span>
          {{ productProp.data.discount_price }}
        </p>
      </div>
      <div class="w-24 md:w-40 flex-shrink-0 text-right ml-auto">
        <figure class="font-mono text-sm md:text-lg">
          <span class="font-sans">₦</span>
          {{
            (
              formatNumber(productProp.data.discount_price) *
              productProp.data.cart_Item_quantity
            ).toLocaleString()
          }}
        </figure>
      </div>
    </div>
    <div class="mt-3 flex-wrap-reverse gap-5 flex items-center justify-between">
      <button
        @click="handleRemove"
        class="flex items-center justify-center gap-2 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-red-600"
      >
        <Icon name="fe:close" size="1.1rem"></Icon>
        <span>Remove</span>
      </button>
      <div
        class="flex items-stretch rounded-lg border hover:border-sky-400 focus:border-sky-400 overflow-hidden"
      >
        <button
          @click="handleDecrease"
          class="flex h-10 w-10 items-center justify-center hover:bg-sky-400"
        >
          &#x2212;
        </button>
        <input
          type="number"
          :value="0"
          :oninput="handleInputChange"
          class="w-20 border border-y-0 p-2 text-center outline-none"
        />
        <button
          @click="handleIncrease"
          class="flex h-10 w-10 items-center justify-center hover:bg-sky-400"
        >
          &#x2b;
        </button>
      </div>
    </div>
  </div>
</template>
