<script>
	import { getContext } from 'svelte';

	let payments = getContext('payments');
	let data = getContext('data');

	/** @type {any} */
	let map = {};
	/** @type {{ a: string;b:string;amt: number;}[]} */
	let split = [];

	let showsplit = true;

	function splitt() {
		//initialising entries to 0
		for (let i = 0; i < $data.length; i++) {
			let index = '' + $data[i];
			map[index] = {};
			for (let j = 0; j < $data.length; j++) {
				if (i != j) {
					map[index]['' + $data[j]] = 0;
				}
			}
		}
		let n = $data.length;
		console.log(map);
		/*
        Each sub name/sub-key's value is how much that person has to pay to the key
        {
            a:{
                b:5
            },
            b:{
                a:10
            }
        }
        This means that b should pay a 5 and a should pay b 10.
        */
		for (let i = 0; i < $payments.length; i++) {
			let k = Object.keys(map[$payments[i].from]);
			let v = $payments[i].amt;
			for (let j = 0; j < k.length; j++) {
				map[$payments[i].from][k[j]] += v / n;
			}
		}
		console.log(map);
		/*
        Create a array []
        Iterate as above and on each step, add to the array {a:first,b:second:amt:amt}
        amt is the difference of occurences at map[first][second] and map[second][first]
        Therefore this check has to be made if the given pair has been iterated upon before or no
        */

		let k = Object.keys(map);
		for (let i = 0; i < k.length; i++) {
			let k2 = Object.keys(map[k[i]]);
			for (let j = 0; j < k2.length; j++) {
				// map[$payments[i].from][k[j]]+=v/n;

				/** @type {string} */
				let a = k[i];
				/** @type {number} */
				let to_a = map[k[i]][k2[j]];
				/** @type {string} */
				let b = k2[j];
				/** @type {number} */
				let to_b = map[b][a];
				/** @type {{ a:string;b:string;amt:number}} */
				let obj = {
					a: a,
					b: b,
					//what a must give to b
					amt: to_b - to_a
				};
				//the opposite that we should check for
				/** @type {{ a:string;b:string;amt:number}} */
				let opp = {
					a: b,
					b: a,
					amt: to_a - to_b
				};
				if (split.filter((e) => e.a == b && e.b == a).length > 0) {
					continue;
				} else {
					split.push(obj);
				}
			}
		}
		console.log(split);
		showsplit = false;
	}
</script>

{#if showsplit == true}
	<button
		on:click={splitt}
		class="p-8 bg-slate-900 text-green-500 hover:text-slate-50 hover:bg-green-500 rounded-3xl font-bold text-2xl transition-colors duration-200 w-full"
		>S P L I T</button
	>
{:else}
	<div class="bg-slate-900 rounded-xl p-4 pt-4 w-full">
		{#each split as item}
			{#if item.amt > 0}
				<div
					class="w-full grid grid-cols-6 grid-flow-row-dense bg-slate-900 hover:bg-slate-800 rounded-3xl p-2"
				>
					<div class="p-4 font-bold text-2xl col-span-5">
						<i class="text-white text-3xl">{item.a}</i> must pay <i class="text-white text-3xl">{item.amt}</i> to <i class="text-white text-3xl">{item.b}.</i>
					</div>
				</div>
			{:else if item.amt < 0}
				<div
					class="w-full grid grid-cols-6 grid-flow-row-dense bg-slate-900 hover:bg-slate-800 rounded-3xl p-2"
				>
					<div class="p-4 font-bold text-2xl col-span-5">
						<i class="text-white text-3xl">{item.b}</i> must pay <i class="text-white text-3xl">{-item.amt}</i> to <i class="text-white text-3xl">{item.a}.</i>
					</div>
				</div>
			{/if}
		{/each}
	</div>
{/if}

<style>
</style>
