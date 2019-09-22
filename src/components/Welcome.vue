<template>
	<v-container>
		<v-layout row wrap justify-center>
			<v-flex xs12 sm8>
				<v-form @submit.prevent>
					<v-text-field v-model="name" label></v-text-field>
					<v-btn @click="submit" color="green white--text mb-3">SAVE</v-btn>
				</v-form>
				<v-card>
					<v-card-title class="justify-center">LIVE</v-card-title>
					<v-card-text>
						<v-list>
							<v-list-item v-for="user in users" :key="user._id">{{ user.name }}</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	export default {
		data() {
			return {
				name: '',
				users: []
			}
		},
		sockets: {
			connect() {
				console.log('socket connected')
			},
			fetchUsers(users) {
				// this.fetchUsers()
				console.log('listener', users)
				this.users = users
			}
		},
		computed: {
			...mapGetters(['getUsers'])
		},
		methods: {
			...mapActions(['fetchUsers', 'addUser']),
			async submit() {
				const user = { name: this.name }
				this.users.push(user)
				this.$socket.emit('addUser', user)
			}
		}
	}
</script>