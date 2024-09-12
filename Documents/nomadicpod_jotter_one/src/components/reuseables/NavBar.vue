<template>
  <v-app-bar height="auto" elevation="0" fixed :color="bg === 'white' ? 'white' : 'transparent'"
             style="background: inherit !important;" :class="[icon !== 'menu' ? 'appBar-none' : 'appBar']"
             :style="{ background: bg }" class=" tw-z-40">
    <page-layout>
      <template #Content>
        <div class="tw-flex tw-w-full tw-flex-col">
          <div class="
              tw-hidden
              lg:tw-flex
              tw-w-full tw-items-center tw-py-5 tw-justify-between lg:tw-px-40
            ">
            <!-- web starts here -->

            <div class="tw-flex tw-items-center tw-justify-start">

            </div>
            <div class="tw-flex tw-flex-row tw-items-center tw-text-red-500" style="height: 40px">
              <v-tabs v-model="currentTab" slider-color="#AD0000" >


                <v-tab to="" style="color: #E84C3D!important;">About</v-tab>
                <v-tab to="" style="color: #E84C3D!important;">F.A.Qs</v-tab>
                <v-tab to="" style="color: #E84C3D!important;">Contact Us</v-tab>

              </v-tabs>

            </div>

            <div class="tw-w-auto tw-flex tw-flex-row tw-items-center">
              <router-link to="" class="appBar-title tw-w-auto tw-mr-5" style="color: #ffffff">Log in
              </router-link>
              <div class="appBar-title signup tw-cursor-pointer">Book Trip
              </div>
            </div>
          </div>

          <!-- web ends here -->



          <!--Mobile starts here -->
          <div class="
              lg:tw-hidden tw-w-full tw-flex tw-flex-col tw-h-auto tw-bg-white md:tw-bg-transparent tw-py-3">
            <div class="tw-flex tw-w-full tw-justify-between tw-items-center tw-px-5 small-screen" >
              <img class="tw-cursor-pointer " :src="logo" width="160
               " height="40" alt="" @click="routeToHome" />
              <v-icon v-if="icon === 'menu'" @click="toggelIcon" class="tw-cursor-pointer">mdi-menu</v-icon>
              <v-icon v-else  @click="toggelIcon" class="tw-cursor-pointer">mdi-window-close</v-icon>
            </div>


            <v-expand-transition>
              <div class=" tw-flex tw-flex-col tw-w-full tw-px-5 lg:tw-px-40 "
                   style="background: #F7FAFF; max-height: 90vh ; overflow: scroll; margin-top: 20px;
                  " v-if="icon === 'x'" :class="[icon === 'x' ? 'anim' : '']">
                <v-tabs class="tw-w-full " vertical v-model="currentTab" slider-color="#004aad" >

                  <v-tab @click="closeToggle" to="">About</v-tab>
                  <v-tab @click="closeToggle" to="">F.A.Qs</v-tab>
                  <v-tab @click="closeToggle" to="">Contact Us</v-tab>


                  <router-link to="/register-as" class="appBar-title tw-ml-5 tw-my-5" style="color: #004aac">Get Started
                  </router-link>
                  <v-divider color="#80A4D6" class="tw-w-56"></v-divider>
                  <div class="appBar-title signup-mobile tw-cursor-pointer tw-my-5">Book Trip
                  </div>



                </v-tabs>
              </div>
            </v-expand-transition>
          </div>
        </div>
      </template>
    </page-layout>
  </v-app-bar>
</template>

<script>
import PageLayout from "@/components/reuseables/PageLayout";
export default {
  name: "NavBar",
  components: {
    PageLayout,
  },

  data() {
    return {
      shouldHideSlider: false,
      discount: null,
      icon: "menu",
      menus: ["About", "Blog", "Developer", "F.A.Qs", "Contact", "Book Trip"],
      bg: "transparent",
      currentTab: "Blog",
    };
  },
  // watch: {
  //   "$route.name": {
  //     handler: function (val) {
  //       if (val === "About") {
  //         this.currentTab = "About";
  //       } else if (val === "Blog") {
  //         this.currentTab = "Blog";
  //       } else if (val === "Contact") {
  //         this.currentTab = "Contact"
  //         ;
  //       }
  //     },
  //     immediate: true,
  //   },
  // },
  computed: {},
  methods: {



    toggelIcon() {
      if (this.icon === "menu") {
        this.icon = "x";
      } else {
        this.icon = "menu";
      }
    },
    closeToggle() {
      this.icon = "menu";
    },
    routeToHome() {
      console.log("joo")
      if (this.$route.name !== "HomePage")
        this.$router.push({
          name: "HomePage"
        });
    },
    // routeToNpod(){
    //   window.open(process.env.VUE_APP_NPOD_URL,"_blank")
    //
    // },


    changeColor() {
      if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
      ) {
        this.bg = "white";
      } else {
        this.bg = "transparent";
      }
    },
  },
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
}
</script>

<style scoped lang="scss">
::v-deep .v-tab {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500 !important;
  font-size: 14px !important;
  line-height: 24px;
  color: #FFFFFF !important;
  text-transform: none;
  letter-spacing: 0 !important;
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 100% !important;
    justify-content: left;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }
}

::v-deep .theme--light.v-tabs>.v-tabs-bar {
  background-color: transparent !important;
}



//.mobile-nav-line{
//  @media (max-width: 1024px) {
//    width: 200px;
//    height: 2px;
//    opacity: 50%;
//    margin-left: 20px;
//    background-color: #80A4D6;
//  }
//}
//
//.ipad {
//  z-index: 10;
//  padding-right: 10rem !important;
//  padding-left: 10rem !important;
//
//  @media screen and (min-width: 768px) and (max-width: 1264px) {
//    padding: 0.5rem 1rem !important;
//  }
//
//  @media screen and (max-width: 768px) {
//    padding: 10px !important;
//  }
//
//}

.v-toolbar__content {
  padding: 4px 0 !important;
}
::v-deep .v-toolbar__content, .v-toolbar__extension {
  padding: 0!important;
}


.small-screen {
  @media screen and (max-width: 370px) {
    padding: 0 0.5rem;
  }
}

.appBar-title {
  font-family: "Raleway", serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
  text-transform: none !important;
  text-align: left;
  color: #FFFFFF;
}

.anim {
  transition: 5s;
  transition-timing-function: ease-in-out;
  transform: translateY(0);
  opacity: 1;
  animation: infinite;
}

.item-css:hover {
  height: 76px;
  background: rgba(124, 176, 246, 0.05);
  width: 100%;
}

.appBar-title.signup{
  font-family: Raleway,sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  background: #AD0000;
  border-radius: 10px;
  color: #ffffff;
  padding: 14px 14px 14px 1.5rem;
  width: 7rem !important;
  margin-left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 46px!important;
}
::v-deep .v-btn__content {
  font-family: Raleway, sans-serif !important;
}


.custom-menu .v-menu{
  max-width: 30px !important;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 2s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 2s ease;
}



</style>