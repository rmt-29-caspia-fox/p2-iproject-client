<script>
    export default {
        props: ['buttonName', 'buttonClass', 'buttonType'],
        data(){
            return {

            }
        },
        methods: {
            // showAlert() {
            //     this.$swal('Success');
            // },
        }
    }
</script>

<template>
    <button :type="buttonType" :class="buttonClass"  >{{buttonName}}</button>
</template>