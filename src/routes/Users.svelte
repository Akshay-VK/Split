<script>
	import { getContext } from 'svelte';

	let data = getContext('data');
	let nameinput = '';

	function addname() {
		let escape = false;
		if (nameinput == '') {
			escape = true;
		}
		for (let i = 0; i < $data.length; i++) {
			//console.log($data[i]);
			if (nameinput.localeCompare($data[i]) == 0) {
				alert('Already added.');
				escape = true;
			}
		}
		if (escape == true) {
			nameinput = '';
			return;
		}
		data.update((/** @type {string[]} */ n) => n.concat(nameinput));
		nameinput = '';
	}
    /**
	 * @param {string} item
	 */
    function removename(item){
        data.update((/** @type {string[]} */ dat)=>dat.filter((_v)=>_v!=item));
        console.log($data)
    }
</script>

{#if $data.length != 0}
	<div class="bg-slate-900 rounded-xl p-4 pt-4 pb-4 w-full">
		{#each $data as item}
			<div class="w-full grid grid-cols-6 grid-flow-row-dense">
				<a class="p-4 font-bold text-2xl col-span-5">{item}</a>
                <button
                    on:click={()=>removename(item)}
					class="p-4 col-span-1 bg-slate-900 text-red-500 hover:text-slate-50 hover:bg-red-500 rounded-3xl font-semibold text-xl"
					>Remove</button
				>
			</div>
		{/each}
	</div>
	<br />
{/if}
<div class="w-full grid grid-cols-6 grid-flow-row-dense gap-4">
	<input
		bind:value={nameinput}
		class="p-4 font-bold text-2xl col-span-5 rounded-3xl w-full bg-slate-900"
		placeholder="Add name.."
	/><button
		on:click={() => addname()}
		class="p-4 col-span-1 bg-slate-900 text-green-500 hover:text-slate-50 hover:bg-green-500 rounded-3xl font-semibold text-xl"
		>Add</button
	>
</div>

<style>
</style>
