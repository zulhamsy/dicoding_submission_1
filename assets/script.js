const POPULAR_NFT = [
	{
		name: 'A Spacesuit 2',
		desc: 'First and exclusive NFT from A Bathing Ape',
		img: './assets/img/spacesuit.png',
		price: '4.5 ETH'
	}
]

const CARD_CONTAINER = document.getElementsByClassName('card-container')

function createCard(payload) {
	const CARD = document.createElement('div')
	CARD.className = 'card'
	CARD.innerHTML = `
		<img src="${payload.img}" alt="${payload.name}">
		<h3>${payload.name}</h3>
		<p>${payload.desc}</p>
		<div class="action">
			<p>${payload.price}</p>
			<button class="btn-action">Buy</button>
		</div>
	`

	CARD_CONTAINER[0].appendChild(CARD)
}

createCard(POPULAR_NFT[0])