<template>
  <div class="item">
    <div class="item1">
      <input
        type="text"
        list="options"
        name="Item"
        placeholder="Item"
        v-model="itemBillProps.Item"
      >
      <datalist id="options">
        <option v-for="product in products" :key="product.id">{{ product.title }}</option>
      </datalist>
    </div>
    <div class="item2">
      <input
        name="Description"
        type="text"
        placeholder="Description"
        v-model="itemBillProps.Description"
      />
    </div>
    <div class="item3">
      <input
        v-model="itemBillProps.Quantity"
        min="0"
        step="1"
        name="Quantity"
        type="number"
        placeholder="Quantity"
      />
    </div>
    <div class="item4">
      <input
        v-model="itemBillProps.Price"
        min="0"
        step="0.5"
        name="Price"
        type="number"
        placeholder="Price"
      />
    </div>
    <div class="Amount">
      <span>Amount</span>
      <div>{{ itemBillProps.amount() }}$</div>
    </div>
    <div class="removebutton">
      <button @click="deleteItem" type="button" class="remove">
        <i
          class="fa-solid fa-circle-xmark"  
          :style="[
            'color: #4ea4dc',
            itemBillProps.id === 1 ? 'display:none' : '',
          ]"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Item",
  props: ["itemBillProps"],
  setup(props, context) {
    // const amount = ref({
    //     Quantity: '',
    //     Price: ''
    // })
    // const Price = ref(0);
    // const Quantity = ref(0); 
    const products = ref([])
    const getProducts = async() =>{
        const res = await axios.get(`http://localhost:4000/user/products`);
        products.value = res.data;
        console.log(products.value);
    }
   
    getProducts();
    const deleteItem = () => {
      context.emit("delete-item", props.itemBillProps.id);
    };
    // conse isVisible = () => {return false;}
    return { deleteItem, products };
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-shadow: 0 0 0 1px #6b7177;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #ffffff;
  transition: width 0.4s ease-in-out;
}
.item1 {
  width: 25%;
  display: inline-block;
  padding: 0 10px;
}
.item2 {
  width: 75%;
  display: inline-block;
  padding: 0 10px;
}
.item3 {
  width: 25%;
  display: inline-block;
  padding: 0 10px;
}
.item4 {
  width: 25%;
  display: inline-block;
  padding: 0 10px;
}
.Amount {
  align-self: center;
  width: 25%;
}
.fa-solid {
  font-size: 23px;
  /* padding */
}
.removebutton {
  width: 25%;
  align-self: center;
}
.remove {
  border: none;
  cursor: pointer;
  background-color: #fff;
}
</style>