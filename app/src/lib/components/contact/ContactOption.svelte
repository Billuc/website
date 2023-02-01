<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;
	export let title: string;
	export let link: string;
	export let iconColor: string;
</script>

<div class="contact-option">
	<a href={link}>
		<div class="icon" style={'color: ' + iconColor}><Fa {icon} /></div>
		<div class="title">{title}</div>
	</a>
</div>

<style>
	.contact-option {
		margin: 0.1rem 0 0.1rem 0.1rem;
	}

	.contact-option > a {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;

		color: black;
	}

	.icon {
		font-size: 32px;
		transform: scale(1);
		transition: transform 0.5s ease-out;
	}

	.icon:hover {
		transform: scale(1.3);
	}

	.title {
		margin-left: 1rem;
	}
</style>
