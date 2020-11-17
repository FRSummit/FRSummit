<template>
  <div class="update-name-section">
    <p class="title-text">Update Name, Address &amp; Image</p>
    <form @submit.prevent="onSubmit">
      <div class="form-innse-section">
        <label class="label">Name </label>
        <input class="input" type="text" v-model="info1" id="info1" />
      </div>
      <div class="form-innse-section">
        <label class="label" for="lname">Address </label>
        <textarea class="textarea" type="text" v-model="info2" id="info2" />
      </div>
      <div class="form-innse-section">
        <label class="label" for="lname">Email </label>
        <input class="input" type="text" v-model="info3" id="info3" />
      </div>
      <div class="form-innse-section">
        <label class="label" for="lname">Phone </label>
        <input class="input" type="text" v-model="info4" id="info4" />
      </div>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info1: null,
      info2: null,
      info3: null,
      info4: null,
      info5: null,
      info6: null,
      info7: null,
      leagueInfo: [],
    };
  },
  methods: {
    onSubmit() {
      console.log("SUbmitted");
    },
  },
};
</script>

<style scoped>
.update-name-section {
  background: #a8fda8;
  position: absolute;
  top: 0;
  right: -502px;
  z-index: 10;
  width: 500px;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.update-name-section .title-text {
  color: #dafff6;
  font-weight: bold;
  margin-bottom: 20px;
}
.update-name-section .form-innse-section {
  margin-bottom: 10px;
}
.update-name-section .form-innse-section:last-child {
  margin-bottom: 0px;
}
.update-name-section .label {
  display: inline-block;
  width: 20%;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 0;
  color: #dafff6;
  vertical-align: middle;
}
.update-name-section .input,
.update-name-section .textarea {
  display: inline-block;
  width: 80%;
  border-radius: 6px;
  border: 2px solid #dafff6;
  color: #dafff6;
  padding: 6px 14px;
  vertical-align: middle;
}
.update-name-section .textarea {
  height: 80px;
}
.update-name-section .btn-section {
  width: 100%;
  text-align: center;
  margin: 10px 0;
}
.update-name-section button {
  border: 2px solid #272727;
  border-radius: 6px;
  background: #272727;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 10px;
}
.delete-btn {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  border: 1px solid #272727;
  border-radius: 4px;
  background-color: red;
  width: 15%;
  vertical-align: middle;
}
</style>