<template>
  <div id="app">
    {{ version }}
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<script>
import {onMounted} from 'vue'
import {useStore} from 'vuex'
import {provideVersion} from './version'

export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout'
    },
  },
  setup() {
    const {dispatch} = useStore()

    provideVersion()

    onMounted(() => {
      dispatch('onSetYear', new Date().getFullYear())
    })
  },
}
</script>
