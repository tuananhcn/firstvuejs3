<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" style="width: 200px" />
    </div>
    <div class="invoice__header--title">
      <p></p>
      <p class="invoice__header--title1">INVOICE</p>
      <p></p>
    </div>
    <div class="invoice__header--item">
      <div>
        <p style="font-weight: bold">Customer information:</p>
        <p>Customer Name: {{ customerProps.name }}</p>
        <p>Email: {{ customerProps.email }}</p>
        <p>Invoice date: {{ customerProps.date }}</p>
        <p>Customer address: {{ customerProps.address }}</p>
        <p>City: {{ customerProps.city }}</p>
        <p>Country: {{ customerProps.country }}</p>
        <p>State: {{ customerProps.state }}</p>
        <p>Zipcode: {{ customerProps.zipCode }}</p>
      </div>
      <div>
        <div class="invoice__header--item1">
          <p>Invoice#</p>
          <span>#{{ customerProps.invoiceNumber }}</span>
        </div>
        <div class="invoice__header--item1">
          <p>Company Name:</p>
          <span>{{ companyProps.name }}</span>
        </div>
        <div class="invoice__header--item1">
          <p>City</p>
          <span>{{ companyProps.city }}</span>
        </div>
        <div class="invoice__header--item1">
          <p>Zipcode:</p>
          <span>{{ companyProps.zipCode }}</span>
        </div>
        <div class="invoice__header--item1">
          <p>Country</p>
          <span>{{ companyProps.country }}</span>
        </div>
        <div class="invoice__header--item1">
          <p>State</p>
          <span>{{ companyProps.state }}</span>
        </div>
      </div>
    </div>
    <div class="table py1">
      <div class="table--heading3">
        <p>#</p>
        <p>Item</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Amount</p>
      </div>
      <div class="table--items3" v-for="(itemBill, index) in itemBillProps" :key="index">
        <p>{{ index + 1 }}</p>
        <p>{{ itemBill.Item }}</p>
        <p>{{ itemBill.Price }}</p>
        <p>{{ itemBill.Quantity }}</p>
        <p>{{ itemBill.amount() }}</p>
      </div>
    </div>
    <div class="test">
      <div class="invoice__subtotal">
        <div>
          <h2>Thank you for your business</h2>
        </div>
        <div>
          <div class="invoice__subtotal--item1">
            <p>Sub Total</p>
            <span> ${{ subtotal }}</span>
          </div>
          <div class="invoice__subtotal--item1">
            <p>Tax({{ (tax * 100).toPrecision(3) }}%)</p>
            <span>${{ tax * subtotal }}</span>
          </div>
          <div class="invoice__subtotal--item1">
            <p v-if="settingFeature.paymentDate != '' && isChecked[0]">
              Payment date: {{ settingFeature.paymentDate }}
            </p>
          </div>
        </div>
      </div>
      <div class="invoice__total">
        <div>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        <div>
          <div class="grand__total">
            <div class="grand__total--items">
              <p>Grand Total</p>
              <span>${{ (subtotal - tax * subtotal).toPrecision(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="setting">
      <h3 style="font-size:36px;text-align: center;z-index: 3;">Feature</h3>
      <div class="setting__
      MessageModal1">
        <p>Payment date</p>
        <label class="switch">
          <input type="checkbox" v-model="isChecked[0]" />
          <span class="slider"></span>
        </label>
        <div class="settingTextInput" v-if="isChecked[0]">
          <input v-model="settingFeature.paymentDate" type="date" />
        </div>
      </div>
      <!-- <div class="setting__2">
        <p>Số tiền thanh toán</p>
        <label class="switch">
          <input type="checkbox" v-model="isChecked[1]" />
          <span class="slider"></span>
        </label>
        <div class="settingTextInput" v-if="isChecked[1]">
          <input type="number" v-model="settingFeature.soTienThanhToan" placeholder="Số tiền thanh toán" />
        </div>
      </div> -->
      <div class="setting__3">
        <p>Tax</p>
        <div class="settingNumberInput">
          <input type="number" v-model="tax" min="0" max="1" step="0.01" />
        </div>
      </div>
      <div class="setting__4">
        <p>Send to customer</p>
        <button @click="sendPdf()" class="btn__setting">
          <i class="fa-solid fa-envelope" style="color: #ffffff"></i>
        </button>
      </div>
    </div>
    <button id="setting" @click="showSetting()">
      <i class="fa-solid fa-gear fa-rotate-90" style="color: #fff"></i>
    </button>
  </div>
  <MessagePopup @hide-item="isShowedModal = false; MessagePopup = ''" v-if="isShowedModal" :messageProps="MessagePopup" />
</template>

<script>
import { computed, ref, watch, inject } from "vue";
import MessagePopup from "./messagePopup.vue";
export default {
  name: "invoiceTemplate",
  props: ["customerProps", "companyProps", "itemBillProps"],
  setup(props, context) {
    const subtotal = computed(() => {
      let subTotal = 0;
      props.itemBillProps.forEach((itemBill) => {
        subTotal += itemBill.amount();
      });
      return subTotal;
    });
    const SeverURL = inject('SeverURL')
    const settingFeature = ref({
      paymentDate: "",
      soTienThanhToan: 0,
    });
    // const checkboxs = document.querySelectorAll("input[type=checkbox]");
    // checkboxs.forEach((checkbox, index) => {
    //     console.log(index);
    //   checkbox.addEventListener("change", () => {
    //     // isChecked[index] = !isChecked[index];
    //     // if (!isChecked[index]) {
    //     //   if (index == 0) settingFeature.value.paymentDate = "";
    //     //   else settingFeature.value.soTienThanhToan = 0;
    //     // }
    //   });
    // });
    const tax = ref(0.13);
    const isShowedModal = ref(false);
    const isChecked = ref([false, false]);
    const MessagePopup = ref("");
    const showSetting = () => {
      let setting = document.getElementsByClassName("setting")[0];
      // console.log(setting[0]);
      if (setting.style.opacity == 0)
        setting.style.opacity = 1;
      else
        setting.style.opacity = 0;
    };
    const sendPdf = () => {
      const invoiceData = {
        customer: {
          name: props.customerProps.name,
          email: props.customerProps.email,
          Invoicedate: props.customerProps.date,
          address: props.customerProps.address,
          city: props.customerProps.city,
          country: props.customerProps.country,
          state: props.customerProps.state,
          zipcode: props.customerProps.zipCode,
          invoiceNumber: props.customerProps.invoiceNumber
        },
        company: {
          name: props.companyProps.name,
          city: props.companyProps.city,
          zipCode: props.companyProps.zipCode,
          country: props.companyProps.country,
          state: props.companyProps.state,
        },
        itemBill: props.itemBillProps,
        others:
        {
          subToTal: subtotal.value,
          tax: tax.value,
          paymentDate: settingFeature.value.paymentDate,
          imgURL: `${SeverURL}/src/assets/logo.png`
        }
      };
      fetch(`${SeverURL}/invoices/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'ngrok-skip-browser-warning':"any",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(invoiceData),
      }).then((response) => response.text())
        .then((text) => {
          isShowedModal.value = true;
          MessagePopup.value = text;
          console.log(MessagePopup)
        })
        .catch((error) => console.error(error));
    };
    watch(isChecked.value, (newVal, oldVal) => {
      if (!newVal[0])
        settingFeature.value.paymentDate = '';
    });
    return {
      subtotal,
      tax,
      showSetting,
      settingFeature,
      isChecked,
      sendPdf,
      isShowedModal,
      MessagePopup
    };
  },
  components: { MessagePopup }
};
</script>
<style></style>
<style scoped>
.container {
  margin: 0 auto auto auto;
  color: black;
  min-height: 100%;
  background: #f1f1f1;
  border: solid #6c5ce7 20px;
  min-width: 745px;
}

/* *{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
} */
.checkbtn {
  display: none;
  font-size: 30px;
  color: white;
  float: right;
  cursor: pointer;
  line-height: 80px;
  margin-right: 40px;
}

#check {
  display: none;
}

.logo {
  padding-top: 40px;
  padding-left: 25px;
  height: 60px;
  padding-bottom: 15px;
}

table {
  background: #f1f1f1;
  margin-top: 20px;
  margin-bottom: 30px;
}

.invoice {
  background: white;
  color: black;
}

.logo {
  /* margin-top: 15px; */
  margin-left: 20px;
}

.invoice__header--title {
  background-color: #fca120;
  display: grid;
  grid-template-columns: 65% 1fr 1fr;
  /* height: 50px; */
  margin-top: 50px;
}

.invoice__header--title1 {
  font-size: 36px;
  padding: 0 45px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  background-color: #f1f1f1;
}

div.setting {
  background-color: #926c4d;
  color: #a3e452;
  background-image: url('https://c4.wallpaperflare.com/wallpaper/724/163/767/minecraft-dirt-grass-diamonds-wallpaper-preview.jpg');
  background-size: cover;
  user-select: none;
  font-size: 22px;
  font-weight: normal;
  height: 400px;
  width: 300px;
  position: fixed;
  bottom: 135px;
  right: 60px;
  border-radius: 5px;
  transition: opacity 0.2s ease;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  /* visibility: hidden; */
  opacity: 0;
  font-family: Minecraft !important;
  border: 3px solid #ef7c2a7c;
  display: grid;
  row-gap: 10px;
}

.setting::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #fca120, #6c5ce7);
  opacity: .4;
}
.setting__, .setting__2, .setting__3, .setting__4{
  z-index: 3;
}
.invoice__header--item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 45px;
  font-size: 20px;
}

.invoice__header--item1 {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.invoice__header--item h2 {
  margin: 20px 0;
}
.settingNumberInput > input{
  background-color: #fca120;
  color: #fff;
  font-size: 16px;
  border: 1px solid #6c5ce7;
}
.settingTextInput > input{
  background-color: #fca120;
  color: #fff;
  font-size: 16px;
  border: 1px solid #6c5ce7;
}
.settingNumberInput > input:focus, .settingTextInput > input:focus{
  outline: none;
}
.settingNumberInput {
  width: 70%;
}

.table--heading3 {
  display: grid;
  grid-template-columns: 1fr 400px 1fr 1fr 1fr;
  background-color: black;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
}

.table--items3 {
  display: grid;
  grid-template-columns: 1fr 400px 1fr 1fr 1fr;
  padding: 10px 0 10px 13px;
  border: solid #000 1px;
}

.invoice__subtotal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 250px;
  padding: 20px 50px 10px 50px;
  /* margin-top: auto;
  margin-bottom: auto; */
}

/* .test{
  position: absolute;
  bottom: 10px;
} */
.invoice__total {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 250px;
  padding: 20px 50px 10px 50px;
  margin-bottom: 10px;
}

.invoice__subtotal--item1 {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  justify-self: center;
}

.grand__total--items {
  background-color: #fca120;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}

button#setting {
  position: fixed;
  right: 60px;
  width: 60px;
  height: 60px;
  bottom: 60px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  background-color: #6c5ce7;
  border-radius: 100%;
  user-select: none;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

input:checked+.slider {
  background-color: #6c5ce7;
}

button#setting:hover {
  scale: 1.1;
  background-color: #4c38e4;
}

.btn__setting {
  background: none;
  border: none;
  background-color: #6c5ce7;
  padding: 15px 20px;
  cursor: pointer;
}

.btn__setting:hover {
  box-shadow: 0.4rem 0.4rem 0 #000;
  transform: translate(-0.4rem, -0.4rem);
}

.btn__setting:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}

input[type="date"],
input[type="number"] {
  height: 34px;
  width: 100%;
}

.settingTextInput {
  display: inline-block;
  margin-left: 80px;
  margin-top: 10px;
  width: 50%;
}

@media print {

  .setting,
  button#setting {
    visibility: hidden;
  }
}</style>
