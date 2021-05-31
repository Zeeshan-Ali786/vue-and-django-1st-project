<template>
    <v-row class="text-center">
        <v-col cols="6">
            <v-card elevation="5" :style="{'margin' : '1rem 1rem' , 'padding' : '1rem'}">
            <v-card-text :style="{'font-size': '30px' , 'font-weight': '400' , 'color': 'steelblue'}">
                List of Students
            </v-card-text>
                <div class="layout">
                    <div>
                        <br>
                            <StudentList v-for="student in students"
                            :key="student.id" 
                            :style="{'cursor':'pointer'}" 
                            :Name="student"
                            @student_clicked="StudentClicked($event)"
                            @student_delete="StudentDeleted($event)"
                            @student_edit="StudentEdited($event)"
                            />
                    </div><br><br>
                    <v-row>
                            <v-col cols="6" offset-md="6" :style="{'text-align':'right'}">
                                <v-btn color="primary" type="button" elevation="2" @click="NewStudent()">Add Student</v-btn>
                            </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-col>
            <v-col cols="6">

            <v-card elevation="5" :style="{'margin' : '1rem 1rem' , 'padding' : '1rem'}">
                <v-card-text :style="{'font-size': '30px' , 'font-weight': '400' , 'color': 'darkgray',}">
                        Student Details
                    </v-card-text>
                <div>
                    <br>
                    <StudentDetails v-if="selected_student" :student="selected_student"/>
                    <br>
                    <StudentEdit v-if="selected_edit" :student="selected_edit" @update="update()"/>
                </div>
            </v-card>
         </v-col>
    </v-row>

</template>

<script>
import StudentList from "./StudentList.vue";
import StudentDetails from "./StudentDetails.vue";
import StudentEdit from "./StudentEdit.vue";

export default {
    name:'Students',
    data(){
        return{
            students:['New1','New2'],
            selected_student:null,
            selected_edit:null
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
        StudentDetails,
        StudentEdit
    },
    methods:{
        StudentClicked(student_id){
            // console.log("Student Clicked",student_id)
            this.selected_edit = null;
            this.selected_student = this.students.find(student => student.id === student_id);
        },
        StudentDeleted(student_id){
            fetch(`http://127.0.0.1:8000/demo/students/${student_id}/`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json', 
                'Authorization':'Token 9e39e947a631b99ca7b701f97ded35971ccddb15'
            }
            })
            .then( () => {
                this.students = this.students.filter(student => student.id !== student_id)
            })
            .catch( error=> console.log(error))
        },
        StudentEdited(student_id){
            this.selected_student = null;
            this.selected_edit = this.students.find(student => student.id === student_id);
            
        },
        update(){
            this.getStudent();
        },
        getStudent(){
             fetch('http://127.0.0.1:8000/demo/students',{
            method:'Get',
            headers:{
                'Authorization':'Token 9e39e947a631b99ca7b701f97ded35971ccddb15'
            }
        }).then(resp => resp.json())
        .then(resp => {
            this.students = resp;
            if(this.selected_student){
                this.selected_student = this.students.find(student => student.id === this.selected_student.id);
            }
        })
        .catch(error => console.log(error))
        },
        NewStudent(){
            this.selected_student = null;
            this.selected_edit = {first_name:'',last_name:'',father_name:'',date_of_birth:'',gender:false,email_address:''};
        }
    }
}
</script>


<style scoped>
.layout{
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    text-align: center;
    margin-top:1rem;
}
</style>