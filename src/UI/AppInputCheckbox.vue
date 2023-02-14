<template>
  <input class="checkbox" type="checkbox" :id="checkboxId" />
  <label :for="checkboxId">{{ checkboxText }}</label>
</template>

<script>
export default {
  props: ["checkboxText", "checkboxId"],
};
</script>

<style lang="sass">
.checkbox
  position: absolute
  z-index: -1
  opacity: 0

.checkbox+label
  display: inline-flex
  align-items: center
  user-select: none
  cursor: pointer

.checkbox+label::before
  content: ''
  display: inline-block
  width: 1em
  height: 1em
  flex-shrink: 0
  flex-grow: 0
  border: 1px solid #6EBBD3
  background-color: #6EBBD3
  border-radius: 0.25em
  margin-right: 0.5em
  background-repeat: no-repeat
  background-position: center center
  background-size: 50% 50%

.checkbox:checked+label::before
  border-color: #6EBBD3
  background-color: #6EBBD3
  background-image: url("./checkbox.svg")
</style>
