<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import img from '$lib/images/luc.webp';

	function scrollTo(identifier: string) {
		document.getElementById(identifier)?.scrollIntoView(true);
	}
</script>

<div class="navigation-drawer">
	<div class="drawer-header">
		<button on:click={() => scrollTo('profile-header')}>
			<img src={img} alt="" class="logo" />
		</button>
	</div>

	<div class="drawer-body">
		<button on:click={() => scrollTo('resume')}>
			<span class="vertical-text">Experiences</span>
		</button>
		<button on:click={() => scrollTo('projects')}>
			<span class="vertical-text">Projects</span>
		</button>
	</div>

	<div class="drawer-footer">
		<a href="https://github.com/Billuc" class="grow-on-hover">
			<Fa icon={faGithub} class="red-text" /></a
		>
		<a href="https://www.linkedin.com/in/luc-billaud/" class="grow-on-hover">
			<Fa icon={faLinkedin} class="red-text" /></a
		>
	</div>

	<div class="border" />
</div>

<style>
	.navigation-drawer {
		position: fixed;
		top: 0;
		left: 0;

		width: var(--nav-drawer-width);
		height: 100%;
		padding: 0.5rem 5px 0.5rem 0;
		box-sizing: border-box;

		background: var(--background);

		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: center;
	}

	button {
		cursor: pointer;
		background: transparent;
		border: 0;
		color: var(--second-text);
	}

	.vertical-text {
		writing-mode: vertical-lr;
	}

	.drawer-header {
		text-align: center;
	}

	.logo {
		width: 66%;
		height: auto;
		border-radius: 50%;
	}

	.drawer-body {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}

	.drawer-body button {
		text-transform: uppercase;
		transform: rotate(180deg);
		margin-bottom: 0.5rem;
		color: var(--red);
	}

	.drawer-footer {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		align-items: baseline;

		width: 100%;
	}

	.grow-on-hover {
		transform: scale(1);
		transition: transform 0.5s ease-out;
	}

	.grow-on-hover:hover {
		transform: scale(1.3);
	}

	.navigation-drawer .border {
		position: absolute;
		top: 0;
		right: 0;

		width: 5px;
		height: 100%;

		background: var(--red);
		background: linear-gradient(0deg, var(--second-background) -50%, var(--red) 100%);
	}
</style>
