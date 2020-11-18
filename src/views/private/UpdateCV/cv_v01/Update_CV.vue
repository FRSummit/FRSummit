<template>
  <div class="update-cv">
    <div class="update-cv-inner">
      <div class="update-top-name-section">
        <button
          class="update-btn"
          @click="updateClickHandler('TOP_NAME_SECTION')"
          :class="topNameSection ? 'update-btn-close' : ''"
        >
          {{ topNameSectionBtnText }}
        </button>
        <button
          class="list-btn"
          @click="selectItemClickHandler('NAME_ITEM_SELECTION')"
          :class="topNameSectionlist ? 'update-btn-close' : ''"
        >
          {{ topNameSectionListBtn }}
        </button>
        <Step1Top />
        <UpdateStep1Top
          v-if="topNameSection"
          class="modal"
          v-on:childToParent="onChildClick"
        />
        <NameSectionList
          v-if="topNameSectionlist"
          class="list-modal"
          v-on:listToUpdate="listToUpdateClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Step1Top from "../../../../components/public/cv/cv_v01/Step1_Top";
import UpdateStep1Top from "../../../../components/private/UpdateCV/cv_v01/FormStep1_Top";
import NameSectionList from "../../../../components/private/UpdateCV/cv_v01/ListStep1_Top";

export default {
  name: "UpdateCV",
  components: {
    Step1Top,
    UpdateStep1Top,
    NameSectionList,
  },
  data() {
    return {
      topNameSectionBtnText: "Update",
      topNameSection: false,
      topNameSectionListBtn: "Select",
      topNameSectionlist: false,
    };
  },
  methods: {
    updateClickHandler(sectionName) {
      console.log(sectionName);
      if (this.topNameSection) {
        this.topNameSectionBtnText = "Update";
        this.topNameSection = false;
      } else {
        this.topNameSectionBtnText = "Close";
        this.topNameSection = true;
      }
    },
    selectItemClickHandler(selectFromList) {
      console.log(selectFromList);
      if (this.topNameSectionlist) {
        this.topNameSectionListBtn = "Select";
        this.topNameSectionlist = false;
      } else {
        this.topNameSectionListBtn = "Close";
        this.topNameSectionlist = true;
      }
    },
    onChildClick(value) {
      if (value) {
        this.topNameSectionBtnText = "Update";
        this.topNameSection = false;
      }
    },
    listToUpdateClick(value) {
      if (value) {
        this.topNameSectionListBtn = "Select";
        this.topNameSectionlist = false;
      }
    }
  },
};
</script>

<style scoped>
.update-cv {
  background: #272727a3;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #222222;
  font-family: Arial, Helvetica, sans-serif;
}
.update-cv-inner {
  background: #fffff4;
  width: 680px;
  margin: 40px auto;
  box-shadow: 0 1px 20px 4px #222222;
  padding: 60px 46px 50px 94px;
  /* overflow: hidden; */
  overflow: auto;
}
.update-top-name-section {
  position: relative;
  border: 1px solid #27272759;
  padding: 0 4px;
}
.update-btn,
.list-btn {
  position: absolute;
  top: 0;
  left: -80px;
  background-color: #272727;
  border-radius: 2px;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 14px;
  min-width: 80px;
}
.list-btn {
  top: 40px;
}
.update-btn-close {
  background-color: red !important;
}
/* Modal */
.modal {
  position: fixed;
  z-index: 1;
  padding: 20px 12px 0 0;
  left: 27%;
  top: 100px;
  width: 50%;
  max-width: 650px;
  overflow: auto;
  background-color: rgb(0 0 0 / 70%);
}
.list-modal {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  padding: 20px 12px 0 0;
  overflow: auto;
  background-color: rgb(0 0 0 / 85%);
}
</style>