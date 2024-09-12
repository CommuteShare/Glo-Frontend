<script>
export default {
  name: "SecondSection"
}

</script>

<template>
<div class="parent tw-my-24 tw-px-5 lg:tw-px-40">
<p class="header">Our Services</p>
  <p class="bold-txt tw-mt-5">We Offer a Specific Array of Services</p>
  <p class="bold-txt">Designed to give you comfort</p>

  <div class="tw-flex tw-justify-center tw-align-middle tw-mt-20">

    <div class="content tw-mr-20">
     <img class="icon-container" src="@/assets/homePage/calendar-icon.svg" alt="A calender icon">
      <p class="sub-head-txt ">Seamless Booking</p>
      <p class="paragraph tw-my-5">Say goodbye to long queues and complicated booking processes. With a few
        clicks, you can reserve your seat and be on your way to the next destination.</p>
    </div>

    <div class="content">
      <img class="icon-container" src="@/assets/homePage/calendar-icon.svg" alt="A calender icon">
      <p class="sub-head-txt">Seamless Booking</p>
      <p class="paragraph tw-my-5">Say goodbye to long queues and complicated booking processes. With a few
        clicks, you can reserve your seat and be on your way to the next destination.</p>
    </div>

  </div>

  <div class="third-content">
  <div class="content">
    <img class="icon-container" src="@/assets/homePage/calendar-icon.svg" alt="A calender icon">
    <p class="sub-head-txt">Seamless Booking</p>
    <p class="paragraph tw-my-5">Say goodbye to long queues and complicated booking processes. With a few
      clicks, you can reserve your seat and be on your way to the next destination.</p>
  </div>
</div>
 <div class="btn-container">
   <v-btn
       color="#AD0000" width="181px" height="72px" class="btn" >Book a Trip Today</v-btn></div>

</div>
</template>

<style scoped lang="scss">
.parent{
  //background-color: #FCF7F7;
  display: block;
  align-items: center;
  justify-content: center;
}
.header{
  font-family: Roboto,sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #AD0000;
  margin-bottom: 120px;
}
.bold-txt{
  font-family: Raleway,sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  color: #0C0910;
}
.content{
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.sub-head-txt{
  font-family: Raleway,sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 31.2px;
  text-align: center;
  color: #0C0910;
  width: 600px;
}
.paragraph{
  font-family: Raleway,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #344053;
  width: 550px;

}
.icon-container{
  background: #F2E1E1;
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 20px;
}
.third-content{
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
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