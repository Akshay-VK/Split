<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		
	</div>

	<nav>
		<ul>
			<li>
				<a href="{base}/" class="text-sky-50 hover:text-sky-500 bold">Home</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/Akshay-VK" class="text-sky-50 hover:text-sky-500">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: var(color-bg-0);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		//fill: var(--background);
	}

	ul {
		position: relative;
		padding: 1rem;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		//background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
