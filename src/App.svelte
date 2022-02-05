<script>
	let donationAmount;

	async function sendDonation() {
		const product = {
			price: donationAmount * 100,
			title: 'Donation',
			description: `A donation amount of ${donationAmount} made out to New Life Ministries.`
		}
		const response = await fetch('/.netlify/functions/create-checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(product)
        });

        const body = await response.json();
        window.location = body.url;
	}

</script>

<main>
	<h1>Donate to New Life Ministries</h1>
	<form action="" on:submit|preventDefault={sendDonation}>
		<input type="number"  bind:value={donationAmount}>
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