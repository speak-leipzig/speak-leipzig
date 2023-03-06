<script setup>
import { validatePhoneNumber } from '~~/utils/validation';
const {createItems} = useDirectusItems()

const props = defineProps({
  offer: {
    type: String,
    required: true
  }
})

const dialog = useState('dialog',() => false)
const accepted = useState('accepted',() => false)
const ages = ['0-17', '18-29', '30-54', '54+']
const level = ['a0', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2']

const form = $ref({
  offer: props.offer,
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  age: '',
  level: ''
})

function submit() {
  const items = new Array(1).fill(form)
  console.log(items)
  if (form.last_name === '') return
  if (!validatePhoneNumber(form.phone)) {
    form.phone = ''
    return
  }
  createItems({collection:'registrations', items})
  accepted.value = true
  dialog.value = false
}

</script>

<template>
  <v-row justify="center">
    <v-snackbar
      v-model="accepted"
      location="center"
      :timeout="2000"
      elevation="24"
      color="success"
    >
      {{ $t('registration_accepted') }}
    </v-snackbar>
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="purple blob"
          variant="outlined"
          class="mx-5"
          v-bind="props"
        >
          {{ $t('register') }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ $t('register') }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  v-model="form.first_name"
                  :label="$t('first_name')"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  v-model="form.last_name"
                  :label="$t('last_name') + ' *'"
                  required
                  :rules="[
                    v => !!v || $t('required'),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  :label="$t('email')"
                  type="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.phone"
                  :label="$t('phone') + ' *'"
                  type="phone"
                  required
                  :rules="[
                    v => !!v || $t('required'),
                    v => (v && validatePhoneNumber(v)) || $t('phone_invalid') + ': +49...'
                  ]"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="form.age"
                  :items="ages"
                  :label="$t('age')"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="form.level"
                  :items="level"
                  :label="$t('level')"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>* {{ $t('required') }}</small>
        </v-card-text>
        <v-card-actions class="my-3">
          <v-spacer></v-spacer>
          <v-btn
            color="purple"
            variant="outlined"
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>{{ $t('cancel') }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="purple blob"
            variant="outlined"
            @click="submit()"
          >
            <v-icon>mdi-check</v-icon>{{ $t('submit') }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>