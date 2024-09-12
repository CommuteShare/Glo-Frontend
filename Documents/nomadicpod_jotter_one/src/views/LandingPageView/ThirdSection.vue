<script>
export default {
  name: "ThirdSection"
}

</script>

<template>
<div class="parent tw-px-5 lg:tw-px-40">
<p class="bold-txt">Explore Nigeria with Ease:Safe and Comfortable Intercity Travel</p>
  <p class="sub-txt tw-my-5">We take the stress out of exploring Nigeria's vibrant cities and cultural gems.
    Our comfortable and reliable intercity travel solutions connect you to breathtaking destinations seamlessly. Whether
    you're a seasoned traveler or a curious explorer, we offer a variety of options to suit your needs and budget.
    Relax and enjoy the journey while we handle the logistics.
  </p>

  <div class="btn-container">
    <v-btn
        color="#000000" width="181px" height="72px" class="btn" >Book a Trip Today</v-btn></div>



</div>
</template>

<style scoped lang="scss">
.parent{
  background: #AD0000;
  min-height: fit-content;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bold-txt{
  font-family: Raleway,sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 54.36px;
  text-align: center;
  color: #FEFAF1;
  width: 631px;
}
.sub-txt{
  font-family: Raleway,sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27.54px;
  text-align: center;
  color: #FEFAF1;
  width: 845px;
}
.btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}
.btn{
  font-family: Raleway,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #FFFFFF;
  text-transform: none;
  border-radius: 10px;
}
</style>