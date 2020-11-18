<template>
  <div class="list-name-sectiom">
    <span class="close-modal" @click="closeModal">&times;</span>
    <div
      class="list-name-sectiom-inner"
      v-for="(info, key) in sectionInfo"
      :key="key"
    >
      <div class="attribute-section">
        <p class="name attribute">{{ info.TopSection.name }}</p>
        <p class="attribute">Address: {{ info.TopSection.address }}</p>
        <p class="attribute">Email: {{ info.TopSection.email }}</p>
        <p class="attribute">Phone: {{ info.TopSection.phone }}</p>
      </div>
      <div class="event-section">
        <a
          v-if="!info.TopSection.isSelected"
          href="#"
          class="delete-btn"
          @click="selectThis(key)"
          >Select</a
        >
        <a
          v-if="info.TopSection.isSelected"
          href="#"
          class="delete-btn"
          @click="deSelectThis(key)"
          :class="info.TopSection.isSelected ? 'red-text' : ''"
          >Deselect</a
        >
        <a href="#" class="delete-btn" @click="deleteInfo(key)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import TopNameAddressSectionModel from "../../../../models/cv/TopNameAddressSection";
let TopSection = new TopNameAddressSectionModel();

export default {
  data() {
    return {
      sectionInfo: [],
    };
  },
  created() {
    firebase
      .database()
      .ref("TopNameAddressSection")
      .on("value", (snapshot) => {
        this.sectionInfo = snapshot.val();
      });
  },
  methods: {
    selectThis(id) {
      firebase
        .database()
        .ref("TopNameAddressSection/" + id)
        .once("value", (res) => {
          console.log(res.val().TopSection);
          TopSection = res.val().TopSection;
          TopSection.isSelected = true;
          console.log(TopSection);

          firebase
            .database()
            .ref("TopNameAddressSection/" + id + "/TopSection")
            .update(TopSection);
        });
    },
    deSelectThis(id) {
      firebase
        .database()
        .ref("TopNameAddressSection/" + id)
        .once("value", (res) => {
          console.log(res.val().TopSection);
          TopSection = res.val().TopSection;
          TopSection.isSelected = false;
          console.log(TopSection);

          firebase
            .database()
            .ref("TopNameAddressSection/" + id + "/TopSection")
            .update(TopSection);
        });
    },
    deleteInfo(id) {
      firebase
        .database()
        .ref("TopNameAddressSection/" + id)
        .remove();
      this.$emit("listToUpdate", "close modal");
    },
    closeModal() {
      this.$emit("listToUpdate", "close modal");
    },
  },
};
</script>

<style scoped>
.list-name-sectiom-inner {
  border: 1px solid #dafff6;
  margin: 10px;
  padding: 2px 10px;
}
.close-modal {
  color: #dafff6;
  font-size: 28px;
  position: absolute;
  right: 20px;
  top: 0px;
  cursor: pointer;
}
.close-modal:hover {
  color: #8accbd;
}
.attribute-section {
  display: inline-block;
  width: 80%;
  text-align: left;
  vertical-align: middle;
}
.attribute {
  margin: 0;
  color: #dafff6;
  font-size: 16px;
}
.name {
  font-size: 20px;
  font-weight: bold;
}
.event-section {
  display: inline-block;
  width: 20%;
  vertical-align: middle;
}
.event-section a {
  margin: 2px 0;
  color: red;
  font-size: 16px;
  text-decoration: none;
  border: 2px solid red;
  border-radius: 4px;
  padding: 4px 10px;
  font-weight: bold;
  display: block;
  width: 100%;
}
.event-section a:first-child {
  color: rgb(0, 255, 0);
  border: 2px solid rgb(0, 255, 0);
}
.red-text {
    color: red !important;
}
</style>