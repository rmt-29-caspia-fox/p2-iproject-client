<script>
  export default {
    props: ["primaryButtonName"],
  }
</script>
<template>
    <button
      class="w-full px-4 py-2 tracking-wide text-white bg-black"
    >
    {{ primaryButtonName }}
    </button>
</template>