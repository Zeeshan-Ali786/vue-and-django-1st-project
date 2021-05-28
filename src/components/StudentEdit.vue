<template>
    <div>
        <h2>Student Edit</h2>
        <v-row>
            <v-col cols="10" offset-md="1">
                <v-form>
                    <v-text-field  label="First Name" placeholder="First Name" :counter="15" v-model="localStudent.first_name" ></v-text-field>
                    <v-text-field  label="Lat Name" placeholder="Last Name" :counter="15"  v-model="localStudent.last_name" ></v-text-field>
                    <v-text-field  label="Father Name" placeholder="Father Name" :counter="15"  v-model="localStudent.father_name" ></v-text-field>
                    <!-- <v-file-input chips accept="image/*" label="Image"  v-model="localStudent.image"></v-file-input> -->
                    <v-menu :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field  v-model="localStudent.date_of_birth" clearable label="Date of Birth" v-bind="attrs" v-on="on" 
                                            prepend-icon="mdi-calendar">
                            </v-text-field>
                        </template>
                        <v-date-picker  v-model="localStudent.date_of_birth">{{localStudent.date_of_birth}}</v-date-picker>
                    </v-menu>
                    
                    <v-text-field  v-model="localStudent.gender" label="Gender" value="gender"></v-text-field> 
                    <v-text-field v-model="localStudent.email_address" label="Email" placeholder="Email"></v-text-field>
                    <v-row>
                            <v-col cols="6" offset-md="6" :style="{'text-align':'right'}">
                                <v-btn color="primary" type="button" elevation="2" @click="onSubmit">Submit</v-btn>
                            </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name:'StudentEdit',
    props:['student'],
    data(){
        return{
            localStudent:{...this.student} 
        }
    },
    watch:{
        student: function(newVal, oldVal){
            if(newVal !== oldVal){
                this.localStudent = {...this.student}
            }
        }
    },
    methods:{
        // onSubmit(){
        //     fetch(`http://127.0.0.1:8000/demo/students/${this.student.id}/`,{
        //     method:'PUT',
        //     headers:{
        //         'Content-Type':'application/json', 
        //         'Authorization':'Token 9e39e947a631b99ca7b701f97ded35971ccddb15'
        //     },
        //     boby: JSON.stringify({first_name: this.localStudent.first_name, last_name: this.localStudent.last_name, 
        //                            father_name: this.localStudent.father_name, date_of_birth:this.localStudent.date_of_birth,
        //                            gender: this.localStudent.gender, email_address:this.localStudent.email_address,
        //                            })
        //     })
        //     .then(resp => resp.json())
        //     .then( () => {
        //         this.$emit('update')
        //     })
        //     .catch( error=> console.log(error))
        // },
    }
}
</script>



<style scoped>

</style>