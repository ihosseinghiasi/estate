<template>
  <div id="rentDetails">
    <Header />
    <div class="rightToLeft">
      <div class="homeDetails">
        <div class="d-flex flex-row">
          <div class="col-4 dualSpace">
            <label for="meter">متراژ</label>
            <b-form-input
              id="meter"
              v-model="txtmeter"
              placeholder="متراژ"
            ></b-form-input>
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="col-4 dualSpace">
            <label for="rooms">تعداد اتاق</label>
            <b-form-spinbutton id="rooms" v-model="spnrooms" min="0" max="20">
            </b-form-spinbutton>
          </div>
        </div>
        <div style="margin-right: 20px; margin-top: 5px">
          <label for="ageOfHome">سن بنا</label>
          <div class="d-flex flex-row">
            <div class="col-4">
              <b-form-input
                id="ageOfHome"
                v-model="text"
                placeholder="سن بنا"
              ></b-form-input>
            </div>
            <div style="margin-right: 10px">
              <b-form-checkbox
                v-model="chkAge"
                name="check-button"
                button-variant="outline-info"
                button
              >
                نو ساز
              </b-form-checkbox>
            </div>
          </div>
        </div>
        <div style="margin-right: 20px; margin-top: 5px">
          <label for="ageOfHome">رهن</label>
          <div class="d-flex flex-row">
            <div class="col-5">
              <b-form-input
                id="ageOfHome"
                v-model="txtMortgage"
                placeholder="رهن به تومان"
              ></b-form-input>
            </div>
            <div style="margin-right: 10px">
              <b-form-checkbox
                v-model="chkAge"
                name="check-button"
                button-variant="outline-info"
                button
              >
                توافقی
              </b-form-checkbox>
            </div>
            <div style="margin-right: 10px">
              <b-form-checkbox
                v-model="chkFullMortage"
                name="check-button"
                button-variant="outline-info"
                button
              >
                رهن کامل
              </b-form-checkbox>
            </div>
          </div>
          <label style="margin-bottom: 0"> {{ txtMortgage }} </label>
        </div>
        <div style="margin-right: 20px; margin-top: 5px; margin-bottom: 10px">
          <label for="ageOfHome">اجاره</label>
          <div class="d-flex flex-row">
            <div class="col-5">
              <b-form-input
                id="ageOfHome"
                v-model="txtRent"
                placeholder="اجاره"
              ></b-form-input>
            </div>
          </div>
          <label style="margin-top: 10px; margin-bottom: 0">
            {{ txtRent }}
          </label>
        </div>
      </div>
    </div>

    <div class="rightToLeft">
      <div class="homeDetails">
        <div class="d-flex flex-row">
          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkElevator"
              name="check-button"
              button-variant="outline-info"
              button
            >
              آسانسور
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkParking"
              name="check-button"
              button-variant="outline-info"
              button
            >
              پارکینگ
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkRemoteDoor"
              name="check-button"
              button-variant="outline-info"
              button
            >
              درب ریموت
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkStore"
              name="check-button"
              button-variant="outline-info"
              button
            >
              انباری
            </b-form-checkbox>
          </div>
        </div>

        <div class="d-flex flex-row">
          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkLabi"
              name="check-button"
              button-variant="outline-info"
              button
            >
              لابی
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkSecurity"
              name="check-button"
              button-variant="outline-info"
              button
            >
              نگهبان
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkGym"
              name="check-button"
              button-variant="outline-info"
              button
            >
              سالن ورزشی
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkCentralAntenna"
              name="check-button"
              button-variant="outline-info"
              button
            >
              آنتن مرکزی
            </b-form-checkbox>
          </div>
        </div>

        <div class="d-flex flex-row">
          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkBalcony"
              name="check-button"
              button-variant="outline-info"
              button
            >
              بالکن
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkSwimming"
              name="check-button"
              button-variant="outline-info"
              button
            >
              استخر
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkSauna"
              name="check-button"
              button-variant="outline-info"
              button
            >
              سونا
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkًRoofGarden"
              name="check-button"
              button-variant="outline-info"
              button
            >
              روف گاردن
            </b-form-checkbox>
          </div>
        </div>

        <div class="d-flex flex-row">
          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkJacuzzi"
              name="check-button"
              button-variant="outline-info"
              button
            >
              جکوزی
            </b-form-checkbox>
          </div>

          <div class="checkBoxArange">
            <b-form-checkbox
              v-model="chkConference"
              name="check-button"
              button-variant="outline-info"
              button
            >
              سالن کنفرانس
            </b-form-checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="notice">
      <div class="icon">
        <img src="../../../../public/informative.png" alt="توضیحات" />
      </div>
      <div class="necessary">
        <h5>اطلاعات ضروری</h5>
      </div>
      <div class="supplementary">
        <h5>اطلاعات تکمیلی</h5>
      </div>
    </div>

    <div class="rentDirectionArea">
      <router-link to="/reg/location">
        <b-button variant="outline-info"> صفحه بعد </b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '../../../../layouts/Header';
export default {
  el: '#rentDetails',
  name: 'Rent',
  components: {Header},
  data() {
    return {
      rooms: 1,
      checkedAge: false,
      txtMortgage: '',
      txtRent: '',
      txtmeter: '',
      spnrooms: '',
    };
  },
};
</script>

<style>
.rightToLeft {
  position: relative;
  direction: rtl;
  text-align: right;
  width: 500px;
  float: right;
}

.notice {
  position: relative;
  direction: rtl;
  text-align: right;
  float: left;
  height: 285px;
  width: 300px;
  margin: 25px 0 0 33px;
  padding: 12px 12px 0 0;
  border: 2px lightgray solid;
  border-radius: 10px;
}

.dualSpace {
  margin: 8px 20px;
}

.homeDetails {
  margin: 25px 33px 0 0;
  padding-bottom: 10px;
  border-radius: 10px;
  border: 2px lightgray solid;
}

.checkBoxArange {
  margin: 20px 29px 0 0;
}

.icon {
  position: absolute;
  margin: 5% 30% 0 30%;
  height: 30%;
  width: 40%;
}

.necessary {
  margin: 50% 20% 0 20%;
  height: 40px;
  width: 60%;
  text-align: center;
}

.supplementary {
  margin: 10% 20% 0 20%;
  height: 40px;
  width: 60%;
  text-align: center;
}

.rentDirectionArea {
  position: relative;
  height: 50px;
  width: 200px;
  margin: 33% 75% 0 0;
}

input[type='checkbox'] {
  display: none;
}
</style>
