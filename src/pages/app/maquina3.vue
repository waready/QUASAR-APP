<template>
<div>
    <div class="q-pa-md" style="max-width: 500px;">
    <q-toggle v-model="visible" label="maquina 3" class="q-mb-md" />

    <q-slide-transition>
      <div v-show="visible">
        <img
          class="responsive"
          src="https://img.interempresas.net/fotos/1295820.jpeg"
        >
      </div>
    </q-slide-transition>
  </div>

  <div class="q-pa-md">
    <q-linear-progress :value="progress" :buffer="buffer" />

    <q-linear-progress :value="progress" :buffer="buffer" color="warning" class="q-mt-sm" />

    <q-linear-progress :value="progress" :buffer="buffer" color="secondary" class="q-mt-sm" />

    <q-linear-progress :value="progress" :buffer="buffer" color="accent" class="q-mt-sm" />

    <q-linear-progress :value="progress" :buffer="buffer" color="purple" track-color="orange" class="q-mt-sm" />

    <q-linear-progress :value="progress" :buffer="buffer" color="negative" class="q-mt-sm" />
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
      progress: 0.01,
      buffer: 0.01,
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
    },
      mounted () {
    this.interval = setInterval(() => {
      if (this.progress >= 1) {
        this.progress = 0.01
        this.buffer = 0.01
        return
      }

      this.progress = Math.min(1, this.buffer, this.progress + 0.1)
    }, 700 + Math.random() * 1000)

    this.bufferInterval = setInterval(() => {
      if (this.buffer < 1) {
        this.buffer = Math.min(1, this.buffer + Math.random() * 0.2)
      }
    }, 700)
  },

  beforeDestroy () {
    clearInterval(this.interval)
    clearInterval(this.bufferInterval)
  }
  }
}
</script>