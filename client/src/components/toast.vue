<script>
    export default {
        data() {
        return {
            text: ''
        }
        },
        methods: {
            showAlert() {
                // Use sweetalert2
                this.$swal('Hello Vue world!!!');
            },
        }
    }
</script>

<template>
    <!-- button used to trigger event -->
    <button @click="showAlert">Click me</button>
</template>
  
  