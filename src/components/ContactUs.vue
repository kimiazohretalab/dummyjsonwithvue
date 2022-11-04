<template>
  <div class="flex justify-center items-center flex-col min-h-screen">
    <h1 class="text-2xl text-center">Contact Us</h1>
    <form action="mailto:kimiazohretalab1379@gmail.com" class="mt-20">
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" /><br />
      <label for="email">email:</label><br />
      <input type="email" id="email" name="email" /><br />
      <label for="message">your message:</label><br />
      <textarea name="message" id="message" cols="30" rows="5"></textarea>
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
    @apply border border-blue-300;
}
textarea {
    @apply border border-blue-300;
}
button {
    @apply bg-blue-400 rounded px-5 py-2;
}
</style>
