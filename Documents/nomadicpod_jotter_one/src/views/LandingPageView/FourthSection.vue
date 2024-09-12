<script>
export default {
  name: "FourthSection"
}
</script>

<template>
<div class="parent">
<p class="main-header tw-my-32">Why Choose Us</p>
  <p class="bold-txt tw-my-5">Why Are We Considered the Best</p>

  <div class="tw-flex main-box tw-my-16">
    <div class="left-side tw-mr-20">
<div class="tw-flex">
  <img class="icons" src="@/assets/homePage/buildings-icon.svg" alt="icon">
  <div>
  <p class="sub-head-txt">Select your Cities</p>
  <p class="sub-txt tw-my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  </div>

    <div class="tw-flex tw-my-10">
      <img class="icons" src="@/assets/homePage/car-icon.svg" alt="icon">
      <div>
      <p class="sub-head-txt">Choose your Transport</p>
      <p class="sub-txt tw-my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>


    <div class="tw-flex tw-my-10">
      <img class="icons" src="@/assets/homePage/ticket-icon.svg" alt="icon">
      <div>
      <p class="sub-head-txt">Book your Ticket</p>
      <p class="sub-txt tw-my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>


    <div class="tw-flex tw-my-10">
      <img class="icons" src="@/assets/homePage/shuttle-van-icon.svg" alt="icon">
      <div>
      <p class="sub-head-txt">Travel with Ease</p>
      <p class="sub-txt tw-my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
    </div>

    <div class="right-side">
<img src="@/assets/homePage/traveller-img.png" alt="A male traveller">
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
.left-side{

}
.main-header{
  font-family: Roboto,sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #AD0000;
}
.bold-txt{
  font-family: Raleway,sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  color: #0C0910;

}
.sub-head-txt{
  font-family: Raleway,sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
  color: #000000;
}
.sub-txt{
  font-family: Raleway,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: #000000;
  width: 468px;
}
.icons{
  padding: 30px;
  background: #AD0000;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 30px;

}
</style>