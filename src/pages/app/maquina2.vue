<template>
<div>
    <div class="q-pa-md" style="max-width: 500px;">
    <q-toggle v-model="visible" label="maquina 2" class="q-mb-md" />

    <q-slide-transition>
      <div v-show="visible">
        <img
          class="responsive"
          src="https://img.interempresas.net/fotos/1295820.jpeg"
        >
      </div>
    </q-slide-transition>
  </div>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-linear-progress dark style="height: 10px" :value="progress1" color="warning" />

    <q-linear-progress dark stripe rounded style="height: 20px" :value="progress2" color="red" class="q-mt-sm" />

    <q-linear-progress dark rounded indeterminate color="secondary" class="q-mt-sm" />

    <q-linear-progress dark query color="cyan" class="q-mt-sm" />
  </div>

  <div class="q-pa-md" style="max-width: 350px">
  <q-list bordered separator>

    <q-slide-item>
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

    <q-slide-item>
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

    <q-slide-item>
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
      progress1: 1,
      progress2: 0.4,
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