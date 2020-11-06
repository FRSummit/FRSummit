<template>
  <div class="personal-details-section">
    <p class="title">Personal Details</p>
    <div class="description">
      <p class="full-name">
        <span>Full name: </span>Fayazur Rahman Summit
      </p>
      <p class="gender">
        <span>Gender: </span>Male
      </p>
      <p class="permanent-address">
        <span>Permanent address: </span> West side of Polli sub-station, Fulbaria, Mymensingh 2216.
      </p>
      <p class="interest">
        <span>Interest: </span>Problem Solving, Android App development, AI, Travelling, Cycling, Coffee.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal_details",
};
</script>

<style scoped>
.personal-details-section {
  text-align: left;
  overflow: hidden;
  margin-top: 10px;
}
.personal-details-section {
    margin: 0;
}
.personal-details-section .title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
.personal-details-section .description {
  padding: 4px 0;
}
.personal-details-section .description p {
    margin: 0;
  font-size: 15px;
  padding-bottom: 2px;
}
.personal-details-section .description p span {
  font-weight: bold;
}
</style>