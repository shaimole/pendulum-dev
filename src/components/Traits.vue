<template>
 <div>
    <b-row class="justify-content-md-center"  align-h="start" >
      <b-col>
          <b-button :disabled="noCreate" v-b-toggle.traitspositive>Positive Eigenschaften</b-button>
          <b-sidebar id="traitspositive" :title="'Positive Eigenschaften verbleibende Punkte: ' + remainingPoints" bg-variant="dark"  text-variant="light" shadow>
          <div class="px-3 py-2">
            <b-list-group>
                <b-list-group-item v-for="trait in getTraits.positive" :key="trait.name" :id="trait.name" :active="isTraitSelected(trait)">
                    <div :class="getClass(trait)">
                        <nobr @click="toggleTrait(trait)">{{trait.name}}</nobr>
                        <b-badge :variant="getPillVariant(trait)" pill>{{trait.cost}}</b-badge>
                        <font-awesome-icon icon="question" v-b-toggle="trait.name" />
                    </div>
                </b-list-group-item>
            </b-list-group>
          </div>
          </b-sidebar>
          <b-sidebar  v-for="trait in getTraits.positive" :key="trait.name" :id="trait.name" bg-variant="dark" :title="trait.name" right shadow>
            <div class="px-3 py-2">
            <InfoBox :data="trait"/>
            </div>
          </b-sidebar>
      </b-col>
      <b-col>
        <b-button :disabled="noCreate" v-b-toggle.traitsneutral>Neutrale Eigenschaften</b-button>
        <b-sidebar id="traitsneutral" :title="'Neutrale Eigenschaften verbleibende Punkte: ' + remainingPoints" bg-variant="dark"  text-variant="light" shadow>
          <div class="px-3 py-2">
            <b-list-group>
                <b-list-group-item v-for="trait in getTraits.neutral" :key="trait.name" :id="trait.name" :active="isTraitSelected(trait)">
                    <div :class="getClass(trait)">
                        <nobr @click="toggleTrait(trait)">{{trait.name}}</nobr>
                        <b-badge :variant="getPillVariant(trait)" pill>{{trait.cost}}</b-badge>
                        <font-awesome-icon icon="question" v-b-toggle="trait.name" />
                    </div>
                </b-list-group-item>
            </b-list-group>
          </div>
        </b-sidebar>
        <b-sidebar  v-for="trait in getTraits.neutral" :key="trait.name" :id="trait.name" bg-variant="dark" :title="trait.name" right shadow>
            <div class="px-3 py-2">
            <InfoBox :data="trait"/>
            </div>
        </b-sidebar>
      </b-col>
      <b-col>
        <b-button :disabled="noCreate" v-b-toggle.traitsnegative >Negtaive Eigenschaften</b-button>
        <b-sidebar id="traitsnegative" :title="'Negative Eigenschaften verbleibende Punkte: ' + remainingPoints" bg-variant="dark"  text-variant="light" shadow>
          <div class="px-3 py-2">
            <b-list-group>
                <b-list-group-item v-for="trait in getTraits.negative" :key="trait.name" :id="trait.name" :active="isTraitSelected(trait)">
                    <div :class="getClass(trait)">
                        <nobr @click="toggleTrait(trait)">{{trait.name}}</nobr>
                        <b-badge :variant="getPillVariant(trait)" pill>{{trait.cost * -1}}</b-badge>
                        <font-awesome-icon icon="question" v-b-toggle="trait.name" />
                    </div>
                </b-list-group-item>
            </b-list-group>
          </div>
        </b-sidebar>
        <b-sidebar  v-for="trait in getTraits.negative" :key="trait.name" :id="trait.name" bg-variant="dark" :title="trait.name" right shadow>
            <div class="px-3 py-2">
            <InfoBox :data="trait"/>
            </div>
        </b-sidebar>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
         <b-list-group>
                <b-list-group-item v-for="trait in getCharTraits.positive" :key="trait.name" :id="trait.name" >
                    <div :class="getClass(trait)">
                        {{trait.name}}
                        <font-awesome-icon icon="question" v-b-toggle="trait.name" />
                    </div>
                </b-list-group-item>
            </b-list-group>
      </b-col>
      <b-col>
         <b-list-group>
                <b-list-group-item v-for="trait in getCharTraits.neutral" :key="trait.name" :id="trait.name" >
                    <div :class="getClass(trait)">
                        {{trait.name}}
                        <font-awesome-icon icon="question" v-b-toggle="trait.name" />
                    </div>
                </b-list-group-item>
            </b-list-group>
      </b-col>
      <b-col>
         <b-list-group>
                <b-list-group-item v-for="trait in getCharTraits.negative" :key="trait.name" :id="trait.name">
                    <div :class="getClass(trait)">
                        {{trait.name}}
                        <font-awesome-icon icon="question" v-b-toggle="trait.name" />
                    </div>
                </b-list-group-item>
            </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    noCreate: Boolean
  },
  computed: {
    ...mapGetters([
      'getTraits',
      'getTotalAttributesCost',
      'getChar',
      'getCharTraits'
    ]),
    remainingPoints () {
      return 80 - this.getTotalAttributesCost
    }

  },
  methods: {
    getPillVariant (trait) {
      if (trait.cost === 0) {
        return 'secondary'
      }
      if (trait.cost > 0) {
        return 'danger'
      }
      return 'success'
    },
    isTraitNotPossible (trait) {
      return this.remainingPoints < trait.cost
    },
    getClass (trait) {
      if (this.isTraitNotPossible(trait)) {
        return 'inactive'
      }
      return ''
    },
    toggleTrait (trait) {
      if (this.isTraitSelected(trait) && this.remainingPoints >= trait.cost * -1) {
        this.removeTrait({ traitName: trait.name })
      } else if (!this.isTraitNotPossible(trait)) {
        this.addTrait({ traitName: trait.name })
      }
    },
    isTraitSelected (trait) {
      const charTraits = this.getCharTraits
      return Boolean(charTraits.positive.find(element => element.name === trait.name) ||
      charTraits.neutral.find(element => element.name === trait.name) ||
      charTraits.negative.find(element => element.name === trait.name))
    },
    ...mapActions([
      'addTrait',
      'removeTrait'
    ])
  }
}
</script>
<style scoped>
nobr:hover {
  cursor: pointer;
}
svg:hover {
  cursor: pointer;
}

.inactive {
    opacity: 0.5;
}
svg {
    float: right;
    margin-right: 1em;
}
span {
    float:right;
}
.list-group-item {
     background-color: inherit
}
.b-sidebar-outer >>> .display-3 {
    font-size: 2em;
}

.list-group-item {
    text-align: left;
}
.list-group-item.active {
    background-color: #61892F;
    border-color: inherit;
}
.info {
    text-align: right;
}
</style>
