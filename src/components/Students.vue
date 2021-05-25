<template>
    <div class="layout">
        <div>
            <h1>List of Students</h1>
            <br>
                <StudentList v-for="student in students"
                :key="student.id" 
                :style="{'cursor':'pointer'}" 
                :Name="student"
                @student_clicked="StudentClicked($event)"/>
        </div>
        <div>
            <h1>Student Details</h1>
             <br>
            <StudentDetails :student="selected_student"/>
            <!-- <h4 v-for="student in students" :key="student.id">
                    <b>{{student.id}} : </b> {{student.first_name + ' ' + student.last_name}}<br><b>Father Name: </b>{{student.father_name}}
            </h4> -->
            <br>
        </div>
    </div>
</template>

<script>
import StudentList from "./StudentList.vue";
import StudentDetails from "./StudentDetails.vue";

export default {
    name:'Students',
    data(){
        return{
            students:['New1','New2'],
            selected_student:null
        }
    },
    created(){
        fetch('http://127.0.0.1:8000/demo/students',{
            method:'Get',
            headers:{
                'Authorization':'Token 9e39e947a631b99ca7b701f97ded35971ccddb15'
            }
        }).then(resp => resp.json())
        .then(resp => this.students = resp)
        .catch(error => console.log(error))
    },
    components:{
        StudentList,
        StudentDetails
    },
    methods:{
        StudentClicked(student_id){
            // console.log("Student Clicked",student_id)
            this.selected_student = this.students.find(student => student.id === student_id);
        }
    }
}
</script>


<style scoped>
.layout{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-top:1rem;
}
h1{
    
}
</style>