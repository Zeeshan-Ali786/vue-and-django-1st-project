<template>
    <div class="item">
        <h4 @click="$emit('student_clicked', Name.id)">{{Name.first_name + ' ' + Name.last_name}}</h4>
        <h4>
            <!-- <font-awesome-icon icon="trash" @click="$emit('student_delete', Name.id)"/> -->  
            <!-- <font-awesome-icon icon="edit"  @click="$emit('student_edit', Name.id)"/> -->
            <v-icon color="blue darken-2" @click="$emit('student_edit', Name.id)">mdi-account-edit</v-icon>  &nbsp;
            <v-icon color="red darken-2" @click="$emit('student_delete', Name.id)">mdi-delete</v-icon>
        </h4>
    </div>
</template>


<script>
export default {
    name:'StudentList',
    data(){
        return{
            
        }
    },
    props:['Name']
}
</script>

<style scoped>
h4{
    cursor: pointer;
    padding: 8px;
}
.item{
    padding: 0rem 1rem;
    display: flex;
    justify-content: space-between;
}
</style>