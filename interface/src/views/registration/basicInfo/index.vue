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
      <router-link to="/reg/sell">
        <b-button variant="outline-info"> صفحه بعد </b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '../../../../layouts/Header';
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
      selContract: 'btnBuy',
      optContract: [
        {text: 'رهن و اجاره', value: 'btnRent'},
        {text: 'خرید', value: 'btnBuy'},
      ],
    };
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
  height: 50px;
  width: 200px;
  margin: 10% 75% 0 0;
}
@font-face {
  font-family: 'Vazir';
  src: url('../../../fonts/Vazir-Bold.eot');
  src: url('../../../fonts/Vazir-Bold.ttf');
  src: url('../../../fonts/Vazir-Bold.woff');
}

body {
  font-family: Vazir;
}
</style>
