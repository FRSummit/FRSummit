<template>
  <div class="skills-section">
    <p class="title">Skills</p>
    <div class="description">
      <p class="programming">
        <span>Programming: </span>C, C++, Java, Javascript
      </p>
      <p class="framework">
        <span>Framework: </span>Hibernate, Spring, Primefaces, Vue.js, React js,
        Nodejs, ASP.NET
      </p>
      <p class="database">
        <span>Database: </span>MySQL, MS SQL, Firebase, MongoDB.
      </p>
      <p class="graphics">
        <span>Graphics: </span>3D Modeling and Animation in Blender
      </p>
      <p class="other">
        <span>Other: </span>HTML5, CSS, jQuery, Adobe Photoshop, Git, Postman,
        Google app script, XML, XAML, JSON, SQL, Monaca, Vuetify, Materialize
        css, Thymeleaf, Onsen UI, Xamarin, Jekyll.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
};
</script>

<style scoped>
.skills-section {
  text-align: left;
  overflow: hidden;
  margin-top: 10px;
}
.skills-section p {
  margin: 0;
}
.skills-section .title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
.skills-section p span {
  font-weight: bold;
}
.skills-section .description {
  padding: 4px 0;
}
.skills-section .programming {
  font-size: 15px;
  padding-bottom: 2px;
}
.skills-section .framework {
  font-size: 15px;
  padding-bottom: 2px;
}
.skills-section .database {
  font-size: 15px;
  padding-bottom: 2px;
}
.skills-section .graphics {
  font-size: 15px;
  padding-bottom: 2px;
}
.skills-section .other {
  font-size: 15px;
}
</style>