<template>
    <div>
        <h2>Student Edit</h2>
        <v-row>
            <v-col cols="10" offset-md="1">
                <v-form>
                    <v-text-field  label="First Name" placeholder="First Name" :counter="15" v-model="localStudent.first_name" required></v-text-field>
                    <v-text-field  label="Lat Name" placeholder="First Name" :counter="15"  v-model="localStudent.last_name" required></v-text-field>
                    <v-text-field  label="Father Name" placeholder="First Name" :counter="15"  v-model="localStudent.father_name" required></v-text-field>
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
        onSubmit(){
            console.log("submit")
        },
    }
}
</script>



<style scoped>

</style>