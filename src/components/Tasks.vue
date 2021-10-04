<template>
  <div class="hello">
    <div>
      <b-button @click="newTask">Создать</b-button>
      <create-task v-if="createTask"></create-task>
      <b-table striped hover :items="getTasks" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CreateTask from './CreateTask'

export default {
  name: 'Tasks',
  components: { CreateTask },
  props: {
    msg: String
  },
  data () {
    return {
      tasks: [],
      fields: [
        {
          key: 'title',
          label: 'Заголовок'
        },
        {
          key: 'text',
          label: 'Описание'
        },
        {
          key: 'author.name',
          label: 'Автор'
        },
        {
          key: 'executor.name',
          label: 'Исполнитель'
        },
        {
          key: 'status.name',
          label: 'Статус'
        },
        {
          key: 'created_at',
          label: 'Дата создания',
          sortable: true
        }
      ],
      createTask: false
    }
  },
  computed: {
    ...mapGetters([
      'getTasks'
    ])
  },
  created () {
    // const number = 2
    // const status = 'good'
    // this.$store.commit('SET_TASKS', this.tasks)
    // this.$store.commit('CHANGE_STATUS', { number, status })
    this.$store.dispatch('getTasks')
    // this.tasks = this.$store.getters.getTasks
    // this.$store.getters.getTasks()
  },
  methods: {
    newTask () {
      this.createTask = true
      // this.$router.push('/account/personal')
    }
  }
}
</script>

<style scoped>
  .task-card {
    margin: 20px 50px;
    max-width: 20rem;
  }
  table {
    width: 80%;
    margin: 0 auto;
  }
</style>
