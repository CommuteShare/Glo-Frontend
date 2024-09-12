<script>
import IconsHub from "@/components/reuseables/IconsHub.vue";

export default {
  name: "LastSection",
  components: {IconsHub}
}
</script>

<template>
<div class="parent tw-mt-36">
  <p class="bold-txt">How It Works</p>

  <div class="main-box tw-my-10">
  <div class="tw-mx-14">
    <img class="icons" src="@/assets/homePage/buildings-icon.svg" alt="icon">
    <p class="sub-txt tw-my-7">Select your City</p>
  </div>
<IconsHub name="arrow-right"/>
    <div class="tw-mx-14">
      <img class="icons" src="@/assets/homePage/car-icon.svg" alt="icon">
      <p class="sub-txt tw-my-7">Choose your Transport</p>
    </div>
    <IconsHub name="arrow-right"/>
    <div class="tw-mx-14">
      <img class="icons" src="@/assets/homePage/ticket-icon.svg" alt="icon">
      <p class="sub-txt tw-my-7">Book your Ticket</p>
    </div>
    <IconsHub name="arrow-right"/>
    <div class="tw-mx-14">
      <img class="icons" src="@/assets/homePage/shuttle-van-icon.svg" alt="icon">
      <p class="sub-txt tw-my-7">Travel with Ease</p>
    </div>


</div>
</div>
</template>

<style scoped lang="scss">
.main-box{
  display: flex;
  justify-content: center;
  align-items: center;
}
.bold-txt{
  font-family: Raleway,sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 56px;
  text-align: center;
  color: #000000;
}
.icons{
  padding: 30px;
  background: #AD0000;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-left: 20px;
}

.sub-txt{
  font-family: Raleway,sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  color: #000000;
}
</style>