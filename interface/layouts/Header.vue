<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-button
            variant="outline-info"
            to="/reg/basicInfo"
            class="marginRight"
            >ثبت آگهی جدید
          </b-button>
        </b-navbar-nav>

        <b-navbar-nav class="ms-auto">
          <b-nav-item to="/" class="marginRight">رهن و اجاره</b-nav-item>
          <b-nav-item class="marginRight">خرید</b-nav-item>
          <b-navbar-brand to="/">
            <img alt="LOGO" src="../public/home1.png" class="logoSize" />
          </b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.marginRight {
  margin-right: 60px;
}

.logoSize {
  height: 40px;
  width: 40px;
}
</style>
