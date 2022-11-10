<script>
  export default {
    props: ["secondaryButtonName"],
  }
</script>
<template>
    <button
      class="w-full mt-4 px-4 py-2 tracking-wide text-black border-black border-2"
    >
    {{ secondaryButtonName }}
    </button>
</template>