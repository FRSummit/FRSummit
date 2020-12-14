<template>
  <section id="resume" class="resume">
    <!-- <div class="container" :data-aos="fade-up"> -->
    <div class="container">
      <div class="section-title">
        <h2>Resume</h2>
        <p>
          I am passionate about problem solving and goal oriented,
          self-motivated and committed to the successful outcome of the project.
          I always try to give my best support to get the best solution and help
          the team members to resolve the problems easily. I am willing to work
          hard and have a great desire to learn.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>{{ name }}</h4>
            <p>
              <em
                >Since June 2018, I have 2+ years of extensive hands on
                experience of website development using Java, Javascript
                frameworks and typescript. I also worked on various mobile apps
                using Java, C# and PWA.
              </em>
            </p>
            <ul>
              <li>
                West side of Fulbaria Polli Substation,<br />Fulbaria,
                Mymensingh,<br />Dhaka, Bangladesh
              </li>
              <li>+8801687858300</li>
              <li>www.frsummit1@gmail.com</li>
            </ul>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>BSc in Computer Science &amp; Engineering</h4>
            <h5>2014 - 2018</h5>
            <p><em>Southeast University, Dhaka, Bangladesh</em></p>
            <p>
              I had graduated from Southeast University. Before I start my
              university life I had heared to know about programming. After I
              admited here I also know many things about programming. In this
              stage I can say that programming is my life.
            </p>
          </div>
          <div class="resume-item">
            <h4>Higher Secondary Certificate</h4>
            <h5>2011 - 2012</h5>
            <p><em>Anandamohan College, Mymensingh</em></p>
            <p>
              I Completed my HSC study from Anandamohan college and SSC from
              Government Laboratory High School, Mymensingh
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>OOP Programmer</h4>
            <h5>November, 2020 - Present</h5>
            <p><em>Mononsoft Limited - JMI Group</em></p>
            <ul>
              <li>
                Developed marketing websites and live site advertisement
                (banner, variations, campaigns, culture production and audience
                tracking).
              </li>
              <li>
                Managed up to 3 projects or tasks at a given time while under
                pressure
              </li>
              <li>
                Recommended and consulted with clients &amp; designers on the
                most appropriate frontend design.
              </li>
              <li>
                Managed frontend and backend both project with API integration
                at the same time.
              </li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Software Engineer</h4>
            <h5>June, 2018 - October, 2020</h5>
            <p><em>Simplexhub Limited, Dhaka, Bangladesh</em></p>
            <ul>
              <li>
                Live site development &amp; maintenance using Oracle Maxymiser
                Tools.
              </li>
              <li>
                Lead the project's backend &amp; frontend development team and
                helped other with their difficulties.
              </li>
              <li>
                Live site development &amp; maintenance using Adobe Target
                Cloud.
              </li>
              <li>
                Live site development &amp; maintenance using Oracle Maxymiser X
                &amp; Web Tools.
              </li>
            </ul>
          </div>
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
      name: defaultData.name,
    };
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>