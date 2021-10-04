<template>
    <div>
      <b-label>Заголовок</b-label>
      <b-input></b-input>
      <b-label>Описание</b-label>
      <b-form-textarea></b-form-textarea>
      <b-label>Исполнитель</b-label>
      <b-select>
        <b-select-option>1</b-select-option>
        <b-select-option>1</b-select-option>
        <b-select-option>1</b-select-option>
      </b-select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CreateTask',
  computed: {
    ...mapGetters([
      'getExecutors'
    ])
  },
  created () {
    this.$store.dispatch('getExecutors')
  }
}
</script>

<style scoped>

</style>
