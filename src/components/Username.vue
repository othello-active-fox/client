<template>
    <div class="container" style="width:400px;">   
        <v-form
            ref="form"
            v-if="isCreate"
        >
            <v-text-field
            v-model="name"
            label="Name"
            required
            ></v-text-field>

            <v-btn
            @click="createUser"
            class="button"
            style="background:blue; color:white;"
            >
            create
            </v-btn>

        </v-form>
    </div>
</template>

<script>

export default {
    props: ['room'],
    data() {
        return {
            name: '',
            isCreate: true
        }
    },
    methods: {
        createUser(){
            this.$emit('username', {username: this.name, room: this.room})
            this.name = ''
        }
    }
}
</script>


<style>
</style>
