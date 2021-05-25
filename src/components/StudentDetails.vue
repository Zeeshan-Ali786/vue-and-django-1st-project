<template>
    <div v-if="student">
        <h4>{{student.first_name + ' ' + student.last_name}}</h4>
        <p><b>ID : </b>{{student.id}}</p>
        <p v-if="student.first_name"><b>First Name : </b>{{student.first_name}}</p>
        <p v-if="student.last_name"><b>Last Name : </b>{{student.last_name}}</p>
        <p v-if="student.father_name"><b>Father Name : </b>{{student.father_name}}</p>
        <p v-if="student.image"><b>Image : </b>{{student.image}}</p>
        <p v-if="student.date_of_birth"><b>Date_of_birth : </b>{{student.date_of_birth}}</p>
        <p v-if="student.gender"><b>Gender : </b>{{student.gender}}</p>
        <p v-if="student.email_address"><b>Email : </b>{{student.email_address}}</p>
        <br>
        <div v-if="student.batch">
            <p><b>Batch Details: </b></p>
            <p><b>Batch : </b>{{student.batch.batch}}<br>
            <b>Roll No : </b>{{student.batch.roll_no}}<br><b>Department : </b>{{student.batch.department}}</p>
        </div>
    </div>
</template>


<script>
export default {
    name:'StudentDetails',
    props:['student']
}
</script>