<template>
  <div class="messageModal">
    <div class="alert success" v-if="messageProps == 'Email sent successfully!'">
      <i class="closebtn fa-solid fa-xmark" @click="Hide()"></i>
      <strong>{{ messageProps }}</strong>
    </div>
    <!-- <div v-else-if="messageProps == ''">
    </div> -->
    <div class="alert" v-else>
      <i class="closebtn fa-solid fa-xmark" @click="Hide()"></i>
      <strong>{{ messageProps }}</strong>
    </div>
  </div>
</template>

<script>

export default {
    name: "messagePopup",
    props: ["messageProps"],
    setup(props, context)
    {
      const Hide = () => {
        context.emit('hide-item');
      }
      return {Hide}
    }
};
</script>

<style scoped>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  opacity: 1;
  transition: opacity 0.6s;
  margin-bottom: 15px;
}
.alert.success {background-color: #04AA6D;}
.closebtn{
  font-size: inherit;
  padding-right: 5px;
}
.closebtn:hover {
  color: black;
  cursor: pointer;
}
.messageModal{
    position: absolute;
    top: 10px;
    right: 20px;
}
</style>