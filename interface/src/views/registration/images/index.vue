<template>
  <div id="Images">
    <Header />
    <div class="imageTitle">
      <h5>. . . افزودن تصویر</h5>
    </div>
    <div class="containerOfUpload">
      <div class="uploadArea">
        <file-pond
          name="test"
          ref="pond"
          label-idle=" . . . کلیک کنید و یا تصویر را قرار دهید"
          max-files="8"
          max-file-size="900KB"
          v-bind:allow-multiple="true"
          accepted-file-types="image/jpeg, image/png"
          server="/api"
          v-bind:files="myFiles"
          v-on:init="handleFilePondInit"
        />
      </div>
      <div class="imageComment">
        <p>
          افزودن تصویر، نرخ نمایش آگهی شما را 5 تا 7 برابر بیشتر می‌کند. برای
          رسیدن به نتیجه مطلوب ، آگهی را به همراه تصاویر مناسب و با کیفیت ارسال
          کنید
        </p>
      </div>
    </div>

    <div class="locationFinishArea">
      <b-button variant="outline-info" to="/"> ثبت نهایی </b-button>
      <b-button class="exitButton" variant="light" to="/"> خروج </b-button>
    </div>
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
);

import Header from '../../../../layouts/HeaderWithoutButton';

export default {
  name: 'Images',
  components: {Header, FilePond},
  data: function () {
    return {myFiles: []};
  },
  methods: {
    handleFilePondInit: function () {
      console.log('FilePond has initialized');

      // FilePond instance methods are available on `this.$refs.pond`
    },
  },
};
</script>

<style>
.uploadArea {
  display: block;
  width: 100%;
  cursor: pointer;
  border: 2px solid lightgray;
  border-radius: 10px;
}

.imageComment {
  margin: 25px 5px 0 0;
  width: 98%;
  text-align: right;
}

.imageTitle {
  margin: 50px 0 0 30%;
  width: 40%;
  text-align: right;
}

.locationFinishArea {
  position: fixed;
  height: 50px;
  width: 200px;
  margin: 380px 0 0 40px;
}

.containerOfUpload {
  position: absolute;
  width: 40%;
  height: auto;
  margin: 25px 0 0 30%;
}
</style>
