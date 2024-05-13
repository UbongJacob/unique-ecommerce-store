<script setup lang="ts">
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { get, set } from "idb-keyval";
import { reactive, ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Button from "../ui/button/Button.vue";
import { Input } from "../ui/input";

const isSheet = ref(false);
const isSheetInitValue = ref(false);

const initialForm = {
  customerName: "",
  method: "",
  amount: 0,
};

const formValues = reactive(initialForm);

const onSubmit = async () => {
  const { amount, method, customerName } = formValues;
  if (!amount)
    return toast("Invalid amount", { type: "error", position: "top-left" });
  if (!method)
    return toast("Invalid method", { type: "error", position: "top-left" });
  if (!customerName)
    return toast("Invalid customer name", {
      type: "error",
      position: "top-left",
    });

  // const id = await dexieDB.transactions.add({
  //   amount,
  //   method,
  //   customerName,
  // });

  console.log("here");
  const currentTransactions = await get("transactionsx");

  console.log(currentTransactions);

  if (currentTransactions) {
    await set("transactionsx", [
      { amount, method, customerName },
      ...currentTransactions,
    ]);
  } else {
    await set("transactionsx", [{ amount, method, customerName }]);
  }
  formValues.amount = initialForm.amount;
  formValues.customerName = initialForm.customerName;
  formValues.method = initialForm.method;

  console.log(formValues);

  // toast("Added a new transaction with Id " + id);
  isSheet.value = false;
};

const handleChange = () => {
  if (isSheetInitValue.value === true) {
    isSheet.value = false;
    isSheetInitValue.value = false;
  } else isSheetInitValue.value = true;
};
</script>

<template>
  <Sheet @update:open="handleChange" :open="isSheet">
    <SheetTrigger class="my-5">
      <Button :onclick="() => (isSheet = true)"> Add new transaction </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Add new transaction?</SheetTitle>
        <SheetDescription>
          Fill the form below to add new transaction

          <form class="my-7 flex flex-col gap-y-5">
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="customerName">Customer name</Label>
              <Input
                id="customerName"
                v-model="formValues.customerName"
                placeholder="John doe"
                autocomplete="name"
              />
              <!-- <p>{{ errors?.amount }}</p> -->
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="method">Method</Label>
              <Select v-model="formValues.method">
                <SelectTrigger>
                  <SelectValue placeholder="Select a method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Method</SelectLabel>
                    <SelectItem value="cash"> Cash </SelectItem>
                    <SelectItem value="transfer"> Transfer </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <!-- <p>{{ errors?.method }}</p> -->
            </div>
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="amount">Amount</Label>
              <Input
                id="amount"
                v-model="formValues.amount"
                type="number"
                placeholder="Amount"
              />
              <!-- <p>{{ errors?.amount }}</p> -->
            </div>

            <Button :onclick="onSubmit" type="button">Submit</Button>
          </form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
