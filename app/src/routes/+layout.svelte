<script>
	import '$lib/styles/global.css';

	import NavigationDrawer from '$lib/components/layout/NavigationDrawer.svelte';
</script>

<NavigationDrawer />

<div class="container">
	<slot />
</div>

<style>
	.container {
		padding-left: var(--nav-drawer-width);
		width: 80%;
		margin: auto;
	}
</style>
