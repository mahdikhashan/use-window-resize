import { ref, onMounted, onUnmounted } from 'vue'
import _ from "lodash"

export function useWindowResize( debounceLimit = 10 ) {

  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const handleResize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', _.debounce(handleResize, debounceLimit))
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width,
    height
  }

}