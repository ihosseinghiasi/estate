<template>
  <div class="BasicInfo">
    <Header />
    <div class="float-right , advertisementType">
      <div class="segment">
        <div class="icons">
          <img src="../../../../public/apartment.png" alt="رهن یا خرید" />
        </div>
        <div class="buttonsArea">
          <b-form-group v-slot="{ariaDescribedby}">
            <b-form-radio-group
              class="buttons"
              id="btn-radios-1"
              v-model="selHomeUse"
              :options="optHomeUse"
              :aria-describedby="ariaDescribedby"
              button-variant="outline-info"
              size="Default"
              name="radio-btn-outline"
              buttons
            ></b-form-radio-group>
          </b-form-group>
        </div>
      </div>

      <div class="segment">
        <div class="icons">
          <img src="../../../../public/home.png" alt="نوع ساختمان" />
        </div>
        <div class="buttonsArea">
          <b-form-group v-slot="{ariaDescribedby}">
            <b-form-radio-group
              class="buttons"
              id="btn-radios-2"
              v-model="selBuldingType"
              :options="opnBuldingType"
              :aria-describedby="ariaDescribedby"
              button-variant="outline-info"
              size="Default"
              name="radio-btn-outline"
              buttons
            ></b-form-radio-group>
          </b-form-group>
        </div>
      </div>

      <div class="segment">
        <div class="icons">
          <img src="../../../../public/contract.png" alt="رهن" />
        </div>
        <div class="buttonsArea">
          <b-form-group v-slot="{ariaDescribedby}">
            <b-form-radio-group
              class="buttons"
              id="btn-radios-2"
              v-model="selContract"
              :options="optContract"
              :aria-describedby="ariaDescribedby"
              button-variant="outline-info"
              size="medium"
              name="radio-btn-outline"
              buttons
            ></b-form-radio-group>
          </b-form-group>
        </div>
      </div>
    </div>
    <div class="BasicInfoDirectionArea">
      <b-button variant="outline-info" @click="checkType"> صفحه بعد </b-button>
      <b-button class="exitButton" variant="light" to="/"> خروج </b-button>
    </div>
  </div>
</template>

<script>
import Header from '../../../../layouts/HeaderWithoutButton';
export default {
  name: 'BasicInfo',
  components: {Header},
  data() {
    return {
      selHomeUse: 'btnResidential',
      optHomeUse: [
        {text: 'اداری', value: 'btnOfficial'},
        {text: 'تجاری', value: 'btnCommercial'},
        {text: 'مسکونی', value: 'btnResidential'},
      ],
      selBuldingType: 'btnapartment',
      opnBuldingType: [
        {text: 'ویلایی', value: 'btnvilaei'},
        {text: 'برج', value: 'btnTower'},
        {text: 'آپارتمانی', value: 'btnapartment'},
      ],
      selContract: 'btnSell',
      optContract: [
        {text: 'رهن و اجاره', value: 'btnRent'},
        {text: 'خرید', value: 'btnSell'},
      ],
    };
  },
  methods: {
    checkType() {
      if (this.selContract == 'btnRent') {
        this.$router.push('/reg/rent');
      } else {
        this.$router.push('/reg/sell');
      }
    },
  },
};
</script>
<style>
.advertisementType {
  position: relative;
  height: 33vh;
  margin-top: 8%;
}

.segment {
  display: inline-flex;
  position: relative;
  height: 100%;
  width: 250px;
  margin: 0 7% 0 7%;
  border: lightgray 2px solid;
  border-radius: 10px;
}

.icons {
  position: absolute;
  margin: 10% 32% 0% 28%;
  height: 40%;
  width: 40%;
}

img {
  position: relative;
  height: 100%;
  width: auto;
}

.buttonsArea {
  position: absolute;
  height: 30%;
  width: 100%;
  margin-top: 60%;
}

input[type='radio'] {
  display: none;
}

.buttons {
  margin: 0 9%;
}

.BasicInfoDirectionArea {
  position: relative;
  height: 80px;
  width: 200px;
  margin: 10% 0 0 40px;
}

.exitButton {
  margin-left: 10px;
  color: red;
}

@font-face {
  font-family: 'Yekan';
  src: url('../../../fonts/Vazir-Medium.eot');
  src: url('../../../fonts/Vazir-Medium.ttf');
  src: url('../../../fonts/Vazir-Medium.woff');
}

body {
  font-family: Vazir;
}
</style>
