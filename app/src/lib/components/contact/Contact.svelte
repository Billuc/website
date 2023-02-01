<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import ContactOption from './ContactOption.svelte';

	export let fullHeight: boolean = false;
</script>

<div id="contact" class:full-height={fullHeight}>
	<div class="contact-title blue-text">Contact</div>

	<div class="contact-options">
        <ContactOption icon={faGithub} link="https://github.com/Billuc" title="Github" iconColor="black" />
        <ContactOption icon={faLinkedin} link="https://www.linkedin.com/in/luc-billaud/" title="LinkedIn" iconColor="#0a66c2" />
        <ContactOption icon={faEnvelope} link="mailto:luc.billaud.pro@gmail.com" title="luc.billaud.pro@gmail.com" iconColor="var(--red)" />
	</div>
</div>

<style>
    #contact {
        margin-bottom: 2rem;
    }

	.contact-title {
		font-size: 2.5rem;
		text-align: center;
		margin: 3rem 0 2rem;
	}

    .contact-options {
        width: min(90%, 500px);
        margin: auto;

        background-color: var(--second-background);
        padding: 0.75rem;
        border-radius: 0.25rem;

        box-shadow: 0px 15px 10px -5px black;
    }
</style>
