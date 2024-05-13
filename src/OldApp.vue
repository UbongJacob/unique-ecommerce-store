<script setup lang="ts">
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import AddTransactionSheet from "./components/custom/AddTransactionSheet.vue";

// import { liveQuery } from "dexie";
// import { useObservable } from "@vueuse/rxjs";
// import { ICartDB, dexieDB } from "./dexie/db";
// import Button from "./components/ui/button/Button.vue";

// const transactions = useObservable<ICartDB[]>(
//   // @ts-ignore
//   liveQuery(() => dexieDB.transactions.toArray())
// );

// const handleDeleteAll = async () => {
//   console.log("delete start");
//   const result = await dexieDB.transactions.where("id").notEqual(-1).delete();
//   console.log({ deleteResult: result });
// };
</script>

<template>
  <div class="container p-10 max-w-7xl mx-auto">
    <!-- <div class="flex items-center justify-between">
      <Button :onclick="handleDeleteAll" variant="destructive">
        Delete all
      </Button>

      <AddTransactionSheet />
    </div>
    <Table class="w-full border shadow-xl">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]"> Id </TableHead>
          <TableHead>Customer name</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right"> Amount </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="transaction in transactions" :key="transaction.id">
          <TableCell class="font-medium">
            {{ transaction?.id }}
          </TableCell>
          <TableCell>{{ transaction?.customerName }}</TableCell>
          <TableCell>{{ transaction?.method }}</TableCell>
          <TableCell class="text-right">
            {{ transaction?.amount }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table> -->
  </div>
</template>
