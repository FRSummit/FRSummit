<template>
  <section id="skills" class="skills section-bg">
    <!-- <div class="container" :data-aos="fade-up"> -->
    <div class="container">
      <div class="section-title">
        <h2>Skills</h2>
        <p>
          From the begining of my prrgramming life I always tried to increase my
          skills and also tried to learn new things. As a result I had learn
          many things from my college, university and professional life. Some of
          them from my senior brothers and maximum of them in professional.
        </p>
      </div>

      <div class="row skills-content">
        <div class="col-lg-6">
          <!-- <div class="progress">
            <span class="skill">HTML <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">CSS <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">JavaScript <i class="val">75%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div> -->

          <div class="progress" v-for="(skill, i) in left_skills" :key="i">
            <span class="skill"
              >{{ skill.name }} <i class="val">{{ skill.val }}%</i></span
            >
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="skill.valueNow"
                :aria-valuemin="skill.valueMin"
                :aria-valuemax="skill.valueMax"
              ></div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <!-- <div class="progress">
            <span class="skill">PHP <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">WordPress/CMS <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Photoshop <i class="val">55%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div> -->

          <div class="progress" v-for="(skill, i) in right_skills" :key="i">
            <span class="skill"
              >{{ skill.name }} <i class="val">{{ skill.val }}%</i></span
            >
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="skill.valueNow"
                :aria-valuemin="skill.valueMin"
                :aria-valuemax="skill.valueMax"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      left_skills: [
        {
          name: "C",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "C++",
          val: 70,
          valueNow: 70,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Java",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Python",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "C#",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Javascript",
          val: 95,
          valueNow: 95,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "jQuery",
          val: 95,
          valueNow: 95,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Hibernate",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Spring Boot/MVC",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Primefaces",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Flask",
          val: 70,
          valueNow: 70,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "ASP.NET Core",
          val: 70,
          valueNow: 70,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Xamarin",
          val: 65,
          valueNow: 65,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Google app script",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "MySQL",
          val: 90,
          valueNow: 90,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "MSSQL",
          val: 85,
          valueNow: 85,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Firebase",
          val: 85,
          valueNow: 85,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Mongodb",
          val: 75,
          valueNow: 75,
          valueMin: 0,
          valueMax: 100,
        },
      ],
      right_skills: [
        {
          name: "HTML",
          val: 100,
          valueNow: 100,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "CSS",
          val: 100,
          valueNow: 100,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Vuejs",
          val: 85,
          valueNow: 85,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Reactjs",
          val: 70,
          valueNow: 70,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Nodejs",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Vuetify",
          val: 85,
          valueNow: 85,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "XML",
          val: 90,
          valueNow: 90,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "XAML",
          val: 75,
          valueNow: 75,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Materialize css",
          val: 85,
          valueNow: 85,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Thymeleaf",
          val: 85,
          valueNow: 85,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Wordpress",
          val: 75,
          valueNow: 75,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Onsen UI",
          val: 90,
          valueNow: 90,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "JSON",
          val: 100,
          valueNow: 100,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "SQL",
          val: 75,
          valueNow: 75,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Monaca",
          val: 75,
          valueNow: 75,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Jekyll",
          val: 80,
          valueNow: 80,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "3D Modeling and Animation in Blender",
          val: 70,
          valueNow: 70,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Make Human 3D Modeling",
          val: 65,
          valueNow: 65,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Adobe Photoshop",
          val: 70,
          valueNow: 70,
          valueMin: 0,
          valueMax: 100,
        },
        {
          name: "Git",
          val: 95,
          valueNow: 95,
          valueMin: 0,
          valueMax: 100,
        },
      ],
    };
  },
};
</script>