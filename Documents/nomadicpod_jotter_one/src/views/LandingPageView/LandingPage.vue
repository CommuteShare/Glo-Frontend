<template>
  <div class="tw-w-full " style=" background-color: #FCF7F7;">
    <NavBar/>
    <div class="main-layout">
<div class="hero-section  tw-px-5 lg:tw-px-40 ">
  <div class="overlay"></div>
  <div class="centered-text">
    <p class="bold-txt">Powering <span style="color: #FF0000">Mobility</span> at Your Fingertips</p>
    <p class="sub-txt">The easiest way to book trips, access various modes of transport, plan and embark on your journeys, all from one platform.</p>
  </div>
</div>
      <SecondSection/>
      <Third-Section/>
      <FourthSection/>
      <LastSection/>
    </div>



  </div>
</template>

<script>
  import NavBar from "@/components/reuseables/NavBar.vue";
  import SecondSection from "@/views/LandingPageView/SecondSection.vue";
  import ThirdSection from "@/views/LandingPageView/ThirdSection.vue";
  import FourthSection from "@/views/LandingPageView/FourthSection.vue";
  import LastSection from "@/views/LandingPageView/LastSection.vue";

  export default {
    name: 'LandingPage',

    components: {
      LastSection,
      FourthSection,
      ThirdSection,
      SecondSection,
      NavBar,
    },
  }
</script>

<style scoped lang="scss">
.main-layout{
  overflow-y: clip;
}
.hero-section{
  background-image: url("@/assets/homePage/hero-img.png");
  object-fit: cover;
  background-size: 100%;
  //padding-top: 100px;
  //padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 92vh;
  max-height: 92vh;
  object-fit: cover;
  background-size: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  @media (max-width: 1920px) {
  }
}
.centered-text {
  position: relative;
  z-index: 1;
  width: 65.94rem;
}
.bold-txt{
  font-family: Raleway,sans-serif;
  font-size: 64px;
  font-weight: 900;
  line-height: 86px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #FFFFFF;
}
.sub-txt{
  font-family: Open Sans,sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  color: #FFE0E0;
  width: 868px;
  margin-top: 30px;
  padding-left: 150px;
}
</style>
