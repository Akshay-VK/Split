<script>
	import { getContext } from 'svelte';

	let payments = getContext('payments');
	let data = getContext('data');

	let amt = 0;
	let from = '';

	function handleSubmit() {
		console.log(from + ' paid ' + amt);
		payments.update((/** @type {{ from: string; amt: number;}[]} */ s) => s.concat({ from, amt }));
		console.log($payments);
	}
    /**
	 * @param {string} item
	 */
     function removename(item){
        payments.update((/** @type {string[]} */ dat)=>dat.filter((_v)=>_v!=item));
        console.log($payments)
    }
</script>

<div>
	<form on:submit|preventDefault={handleSubmit} class="grid grid-flow-col grid-cols-6 p-4 gap-4">
		<select bind:value={from} class="bg-slate-900 rounded-xl p-4 pt-4 pb-4 w-full col-span-2">
			{#each $data as item}
				<option value={item} class="p-4 font-bold text-2xl rounded-xl bg-slate-900 hover:bg-slate-800 transition-color duration-200">{item}</option>
			{/each}
		</select>
		<div class="text-2xl font-bold p-2 w-8 text-center align-middle col-span-1">paid</div>
		<input
			bind:value={amt}
			type="number"
			disabled={!from}
			class="p-2 font-bold text-2xl rounded-3xl w-full bg-slate-900 col-span-2"
		/>

		<button
			disabled={!from}
			type="submit"
			class="p-4 col-div-1 bg-slate-900 text-green-500 hover:text-slate-50 hover:bg-green-500 rounded-3xl font-semibold text-xl col-span-1 transition-colors duration-200"
		>
			➕
		</button>
	</form>
    {#if $payments.length != 0}
	<div class="bg-slate-900 rounded-xl p-4 pt-4 w-full">
		{#each $payments as item}
			<div class="w-full grid grid-cols-6 grid-flow-row-dense bg-slate-900 hover:bg-slate-800 rounded-3xl p-2">
				<div class="p-4 font-bold text-2xl col-span-5">{item.from} paid <i>{item.amt}</i></div>
                <button
                    on:click={()=>removename(item)}
					class="p-4 col-span-1 bg-slate-900 bg-opacity-0 hover:bg-opacity-100 text-red-500 hover:text-slate-50 hover:bg-red-500 rounded-3xl font-semibold text-xl  transition-colors duration-200"
					>Remove</button
				>
			</div>
		{/each}
	</div>
	<br />
{/if}

</div>

<style>
</style>
