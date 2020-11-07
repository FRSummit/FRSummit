<template>
    <div class="education-section">
    <p class="title">Education</p>
    <div class="description">
        <table>
                <tr>
                    <th class="degree">Degree</th>
                    <th class="institution">Institution/Board</th>
                    <th class="passint-year">Passing year</th>
                    <th class="group">Group</th>
                    <th class="result">Result</th>
                </tr>
                <tr v-for="(edu, i) in education" :key="i">
                    <td class="degree">{{ edu.degree }}</td>
                    <td class="institution">{{ edu.institutionOrBoard }}</td>
                    <td class="passint-year">{{ edu.passingYear }}</td>
                    <td class="group">{{ edu.group }}</td>
                    <td class="result">{{ edu.result }}</td>
                </tr>
        </table>
    </div>
    </div>
</template>

<script>
export default {
    name: 'education',
    data() {
        return {
            education: [
                {
                    degree: 'BSc in CSE',
                    institutionOrBoard: 'Southeast University',
                    passingYear: 'April 2018',
                    group: 'School of Science And Engineering',
                    result: 'CGPA: 2.93'
                },
                {
                    degree: 'HSC',
                    institutionOrBoard: 'Anandamohan College ',
                    passingYear: '2012',
                    group: 'Science',
                    result: 'GPA: 4.70'
                },
                {
                    degree: 'SSC',
                    institutionOrBoard: 'Govt. Laboratory High School, Mymensingh',
                    passingYear: '2010',
                    group: 'Science',
                    result: 'GPA: 5.00'
                },
            ]
        }
    }
}
</script>

<style scoped>
.education-section {
  text-align: left;
  overflow: hidden;
  margin-top: 10px;
}
.education-section .title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
.education-section .description {
  padding: 4px 0;
}
.education-section .description table {
    border: 2px solid #222222;
  border-collapse: collapse;
}
.education-section .description table th {
    font-size: 15px;
    font-weight: bold;
    border: 2px solid #222222;
}
.education-section .description table tr td {
    border: 2px solid #222222;
}
.education-section .description table tbody {
    font-size: 15px;
}
.education-section .description table tbody tr {
    border: 2px solid #222222;
}
.education-section .description table tbody tr td {
}
.education-section .description table .degree {
    width: 15%;
}
.education-section .description table .institution {
    width: 30%;
}
.education-section .description table .passing-year {
    width: 20%;
}
.education-section .description table .group {
    width: 25%;
}
.education-section .description table .result {
    width: 15%;
}
</style>