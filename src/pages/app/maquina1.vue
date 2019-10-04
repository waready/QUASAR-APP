<template>
<div>
    <div class="q-pa-md" style="max-width: 500px;">
    <q-toggle v-model="visible" label="maquina 1" class="q-mb-md" />

    <q-slide-transition>
      <div v-show="visible">
        <img
          class="responsive"
          src="https://img.interempresas.net/fotos/1295820.jpeg"
        >
      </div>
    </q-slide-transition>
  </div>
  <div class="q-pa-md flex flex-center">
    <q-circular-progress
      indeterminate
      size="50px"
      color="lime"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="90px"
      :thickness="0.2"
      color="lime"
      center-color="grey-8"
      track-color="transparent"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="lime"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="50px"
      :thickness="0.22"
      color="lime"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="75px"
      :thickness="0.6"
      color="lime"
      center-color="grey-8"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="40px"
      :thickness="0.4"
      font-size="50px"
      color="lime"
      track-color="grey-3"
      center-color="grey-8"
      class="q-ma-md"
    />
  </div>
  <div class="q-pa-md" style="max-width: 350px">
  <q-list bordered separator>

    <q-slide-item >
      <template v-slot:left>
        <q-icon name="done" />
      </template>

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Only left action</q-item-section>
      </q-item>
    </q-slide-item>

    <q-slide-item >
      <template v-slot:right>
        <q-icon name="alarm" />
      </template>

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar3.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Only right action</q-item-section>
      </q-item>
    </q-slide-item>

    <q-slide-item >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>No actions</q-item-section>
      </q-item>
    </q-slide-item>

  </q-list>
</div>
  <template>
  <div class="q-pa-md">
    <q-infinite-scroll @load="onLoad" reverse>
      <template slot="loading">
        <div class="row justify-center q-my-md">
          <q-spinner color="primary" name="dots" size="40px" />
        </div>
      </template>

      <div v-for="(item, index) in items" :key="index" class="caption q-py-sm">
        <q-badge class="shadow-1">
          {{ items.length - index }}
        </q-badge>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
      </div>
    </q-infinite-scroll>
  </div>
</template>


</div>
</template>
<script>
export default {
  data () {
    return {
      visible: true,
      value: 71,
      items: [{}, {}, {}, {}, {}, {}, {}]
    }
  },
    methods: {
    onLoad (index, done) {
      // setTimeout(() => {
      //   if (this.items) {
      //     this.items.splice(0, 0, {}, {}, {}, {}, {}, {}, {})
      //     done()
      //   }
      // }, 2000)
    }
  }
}
</script>