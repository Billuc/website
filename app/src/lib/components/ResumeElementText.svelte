<script lang="ts">
	export let title: string;
	export let dates: string;
	export let description: string;
</script>

<div class="resume-element-text">
	<div class="title">{title}</div>
	<div class="dates">{dates}</div>
	<div class="description">{description}</div>
</div>

<style>
    .resume-element-text {
        padding: 0.5rem 0;
    }

	.title {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.dates {
		font-size: 1rem;
	}

	.description {
		font-size: 1.25rem;
		margin-top: 0.3rem;
	}
</style>
