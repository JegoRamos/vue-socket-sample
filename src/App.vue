<template>
	<v-app>
		<v-app-bar app>
			<v-toolbar-title class="headline text-uppercase">
				<span>SAMPLE</span>
				<span class="font-weight-light">TEST SOCKET</span>
			</v-toolbar-title>
		</v-app-bar>

		<v-content>
			<Welcome />
		</v-content>
	</v-app>
</template>

<script>
	import Welcome from './components/Welcome'

	export default {
		name: 'App',
		components: {
			Welcome
		},
		data: () => ({
			//
		})
	}
</script>
