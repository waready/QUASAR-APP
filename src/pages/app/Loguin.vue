<template>
    <q-page class="flex flex-center">
        <div class="q-pa-md">
            <div class="q-gutter-y-md column" style="">
            <div class="q-pa-md">
                <q-parallax :height="220" :speed="0">
                    <template v-slot:media>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </template>
                    <h3 class="text-green">LOGIN</h3>
                </q-parallax>
            </div>
            <q-input color="teal" outlined v-model="text" label="Label">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>

            <q-input color="orange" standout bottom-slots v-model="text" label="Label" counter clearable>
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="favorite" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-input>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      text: '',

      readonly: false,
      disable: false
    }
  }
}
</script>
