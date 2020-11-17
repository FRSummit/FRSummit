<template>
  <div class="experience-section">
    <p class="title">Experience</p>
    <div class="description">
      <div
        class="farm-work-details"
        v-for="(exp, i) in software_company"
        :key="i"
      >
        <div class="farm-name">
          <img
            src="../../../../assets/images/square_bullet.png"
            alt="square bullet"
          />
          <p class="name-sec">
            <span class="name">{{ exp.name_location }}</span>
            <span class="divider"> - </span>
            <span class="designation">{{ exp.designation }}</span>
            <span class="period"> ( {{ exp.period }} )</span>
          </p>
        </div>
        <div class="notable-work">
          <p class="notable-work-text">
            <img src="../../../../assets/images/arrow_bullet.png" />Notable Work
          </p>
          <ul class="task" v-for="(task, j) in exp.notable_work" :key="j">
            <p class="task-name">
              <img src="../../../../assets/images/circle_bullet.png" /> {{ task.task_name }}
            </p>
            <li class="role">
              <span class="role-text">Role</span>
              <span class="role-details">: {{ task.role }}</span>
            </li>
            <li class="tools">
              <span class="tools-text">Tools</span>
              <span class="tools-details">: {{ task.tools }}</span>
            </li>
            <li class="details">
              <span class="details-text">Details</span>
              <span class="details-details">: {{ task.details }}</span>
            </li>
            <li class="achievement">
              <span class="achievement-text">Achievement</span>
              <span class="achievement-details">: {{ task.achievement }}</span>
            </li>
            <li class="repository">
              <span class="repository-text">Repository</span>
              <span class="repository-url">: {{ task.repository }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experience",
  data() {
    return {
      software_company: [
        {
          name_location: "Simplexhub Limited, Dhaka",
          designation: "Software Developer",
          period: "June 2018 – October 2020",
          notable_work: [
            {
              task_name: "Human Resource Management System",
              role: "Development lead.",
              tools:
                "Java, Spring boot, Thymeleaf, MySQL, HTML, CSS, JS, jQuery.",
              details:
                "A custom configurable HRM system which was developed for Simplexhub Ltd and later some super shops use this web application.",
              achievement: "Need to create",
              repository: "url",
            },
            {
              task_name: "Jetstar Reservation (Live)",
              role: "Development lead.",
              tools:
                "Java, Spring boot, Thymeleaf, MySQL, HTML, CSS, JS, jQuery.",
              details:
                "A custom configurable HRM system which was developed for Simplexhub Ltd and later some super shops use this web application.",
              achievement: "Need to create",
              repository: "url",
            },
          ],
        },
        {
          name_location: "Mononsoft Limited, Dhaka",
          designation: "Software Engineer (OOP - Java)",
          period: "November 2020 – Present",
          notable_work: [
            {
              task_name: "Human Resource Management System",
              role: "Development lead.",
              tools:
                "Java, Spring boot, Thymeleaf, MySQL, HTML, CSS, JS, jQuery.",
              details:
                "A custom configurable HRM system which was developed for Simplexhub Ltd and later some super shops use this web application.",
              achievement: "Need to create",
              repository: "url",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience-section {
  text-align: left;
  overflow: hidden;
  margin-top: 10px;
}
.experience-section .title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
.experience-section .description {
  padding: 4px 0;
  font-size: 15px;
}
/* .experience-section .description .farm-work-details {
  margin-bottom: 20px;
} */
.experience-section .description .farm-work-details:last-child {
  margin-bottom: 0;
}
.experience-section .description .farm-work-details .farm-name {
  margin: 0;
}
.experience-section .description .farm-work-details .farm-name img {
  width: 12px;
  margin-right: 10px;
  display: inline-block;
}
.experience-section .description .farm-work-details .farm-name .name-sec {
  margin: 0;
  display: inline-block;
}
.experience-section .description .farm-work-details .farm-name .name-sec .name {
  font-weight: bold;
}
.experience-section
  .description
  .farm-work-details
  .farm-name
  .name-sec
  .divider {
}
.experience-section
  .description
  .farm-work-details
  .farm-name
  .name-sec
  .designation {
}
.experience-section
  .description
  .farm-work-details
  .farm-name
  .name-sec
  .period {
}
.experience-section .description .farm-work-details .notable-work {
  margin-left: 24px;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .notable-work-text {
  font-weight: bold;
  margin: 4px 0;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .notable-work-text
  img {
  width: 10px;
  margin-right: 10px;
}
.experience-section .description .farm-work-details .notable-work .task {
  margin: 0 0 10px 22px;
  padding: 0;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .task-name {
  font-weight: bold;
  margin: 0;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .task-name
  img {
  width: 6px;
  margin-right: 10px;
  vertical-align: middle;
}
.experience-section .description .farm-work-details .notable-work .task li {
  list-style-type: none;
  margin: 4px 0 4px 20px;
}
.experience-section .description .farm-work-details .notable-work .task .role {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .role
  .role-text {
  text-decoration: underline;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .role
  .role-details {
}
.experience-section .description .farm-work-details .notable-work .task .tools {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .tools
  .tools-text {
  text-decoration: underline;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .tools
  .tools-details {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .details {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .details
  .details.text {
  text-decoration: underline;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .details
  .details-details {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .achievement {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .achievement
  .achievement-text {
  text-decoration: underline;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .achievement
  .achievement-details {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .repository {
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .repository
  .repository-text {
  text-decoration: underline;
}
.experience-section
  .description
  .farm-work-details
  .notable-work
  .task
  .repository
  .repository-url {
}
</style>