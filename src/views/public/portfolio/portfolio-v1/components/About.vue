<template>
  <section id="about" class="about">
    <!-- <div class="container" :data-aos="fade-up"> -->
    <div class="container">
      <div class="section-title">
        <h2>About</h2>
        <p>
          {{ aboutMe }}
        </p>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <img
            src="../../../../../assets/portfolio/portfolio-v1/img/profile-img.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Web, Mobile &amp; Desktop App Developer.</h3>
          <p class="font-italic">
            {{ aboutProfession }}
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="icofont-rounded-right"></i>
                  <strong>Birthday:</strong> {{ dob }}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>
                  <strong>Website:</strong> {{ website }}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>
                  <strong>Phone:</strong> {{ phone }}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>
                  <strong>City:</strong> {{ city }}
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>Age:</strong>
                  {{ age }}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>
                  <strong>Degree:</strong> {{ degree }}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>
                  <strong>Email:</strong> {{ email }}
                </li>
                <li>
                  <i class="icofont-rounded-right"></i>
                  <strong>Job:</strong> Full time / Part time
                </li>
              </ul>
            </div>
          </div>
          <p>{{ endAbout }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import defaultData from "../data";

export default {
  data() {
    return {
      aboutMe:
        "I am Fayazur Rahman Summit and working as a professional software programmer from June 2018. I started my programming life from my school level and when I got admitted into university in the department of CSE (Computer Science & Engineering) I got a proper guidance from my teachers. After my graduation, I started working with other senior developers from whome I got more inspiration and guidance about programming and development.",
      aboutProfession:
        "I like to develop mobile and web application using Java, C#, Python, Javascript etc. On the other hand I use Java to develop desktop application. I also like to work with 3D animations with blender and Adobe Photoshop.",
      city: defaultData.address.mym + ", " + defaultData.address.dha,
      dob: defaultData.dob,
      age: 28,
      degree: "BSc in CSE",
      email: defaultData.email,
      phone: defaultData.phone,
      website: defaultData.website,
      endAbout: "",
    };
  },
};
</script>

<style scoped>
li {
  text-align: left;
}
</style>