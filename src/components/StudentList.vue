<template>
    <div>
        <h4 @click="$emit('student_clicked', Name.id)">{{Name.first_name + ' ' + Name.last_name}}</h4>
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
}
</style>