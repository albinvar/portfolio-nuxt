<template>
  <div>
<!--    <ul>-->
<!--      <li v-for="color of colors" :key="color" @click="$colorMode.preference = color">-->
<!--        <component-->
<!--          class='hidden'-->
<!--          :is="`icon-${color}`"-->
<!--          @click="$colorMode.preference = color"-->
<!--          :class="getClasses(color)"-->
<!--        />-->
<!--      </li>-->
<!--    </ul>-->
<!--    <ColorScheme placeholder="..." tag="span">-->
<!--      Color mode: <b>{{ $colorMode.preference }}</b>-->
<!--      <span v-if="$colorMode.preference === 'system'"-->
<!--      >(<i>{{ $colorMode.value }}</i> mode detected)</span-->
<!--      >-->
<!--    </ColorScheme>-->
    <div v-if='$colorMode.preference === `system`'>
      <component class='w-6 h-6 text-green-400 rounded-md  inline-flex items-center justify-center' :is="`icon-system`" @click="$colorMode.preference = 'dark'" :class="getClasses('dark')" />
    </div>
    <div v-else-if='$colorMode.preference === `light`'>
      <component class='w-6 h-6 text-gray-700 rounded-md hover:text-gray-500 hover:bg-gray-100' :is="`icon-light`" @click="$colorMode.preference = 'system'" :class="getClasses('system')" />
    </div>
    <div v-else-if='$colorMode.preference === `dark`'>
      <component class='w-6 h-6 text-green-300 rounded-md inline-flex items-center justify-center' :is="`icon-dark`" @click="$colorMode.preference = 'light'" :class="getClasses('light')" />
    </div>


  </div>
</template>

<script>
import IconSystem from '~/assets/icons/system.svg?inline'
import IconLight from '~/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    IconSystem,
    IconLight,
    IconDark,
  },
  data() {
    return {
      colors: ['system', 'light', 'dark']
    }
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>
