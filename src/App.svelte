<script>
	let donationAmount;
	async function getMsg() {
		const res = await fetch('/.netlify/functions/create-checkout.js');
		const data = await res.json()
		console.log(data)
	}

</script>

<main>
	<h1>Donate to New Life Ministries</h1>
	<form action="" on:submit|preventDefault={getMsg}>
		<input type="number" bind:value={donationAmount}>
		{#if !donationAmount}
		<button id='donateBtn'>Donate Now</button>
		{:else}
		<button id='donateBtn'>Donate ${donationAmount}</button>
		{/if}
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	#donateBtn {
		background-color: #80dd6b;
		color: white;
		cursor:pointer;
	}
</style>