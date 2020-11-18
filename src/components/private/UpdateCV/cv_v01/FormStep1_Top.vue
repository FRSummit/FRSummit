<template>
  <div class="update-name-section">
    <p class="title-text">Update Name, Address &amp; Image</p>
    <span class="close-modal" @click="closeModal">&times;</span>
    <form @submit.prevent="onSubmit">
      <div class="form-innse-section">
        <label class="label">Name </label>
        <input class="input" type="text" v-model="name" id="name" />
      </div>
      <div class="form-innse-section">
        <label class="label" for="lname">Address </label>
        <textarea class="textarea" type="text" v-model="address" id="address" />
      </div>
      <div class="form-innse-section">
        <label class="label" for="lname">Email </label>
        <input class="input" type="text" v-model="email" id="email" />
      </div>
      <div class="form-innse-section">
        <label class="label" for="lname">Phone </label>
        <input class="input" type="text" v-model="phone" id="phone" />
      </div>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import TopNameAddressSectionModel from "../../../../models/cv/TopNameAddressSection";
const TopSection = new TopNameAddressSectionModel();

export default {
  data() {
    return {
      name: null,
      address: null,
      email: null,
      phone: null,
      sectionInfo: [],
      //   data: TopNameAddressSectionModel
    };
  },
  methods: {
    onSubmit() {
      console.log("Submitted");
      TopSection.name = this.name;
      TopSection.address = this.address;
      TopSection.email = this.email;
      TopSection.phone = this.phone;
      TopSection.isSelected = false;
      console.log(TopSection);

      firebase
        .database()
        .ref("TopNameAddressSection")
        .push({
          TopSection,
        })
        .then((data) => {
          console.log(data);
          (this.name = ""),
            (this.address = ""),
            (this.email = ""),
            (this.phone = "");
            this.closeModal()
        })
        .catch((error) => console.log(error));
    },
    closeModal() {
      this.$emit("childToParent", "close modal");
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
.close-modal {
  color: #dafff6;
  font-size: 28px;
  position: absolute;
  right: 20px;
  top: 16px;
  cursor: pointer;
}
.close-modal:hover {
  color: #8accbd;
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