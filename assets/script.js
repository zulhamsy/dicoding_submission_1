const POPULAR_NFT = [
	{
		name: 'A Spacesuit',
		desc: 'First and exclusive NFT from A Bathing Ape',
		img: './assets/img/spacesuit.png',
		price: '4.5 ETH'
	},
	{
		name: 'Angry Bitcoin',
		desc: '#2 Collection from A Bathing Ape with bitcoin detail',
		img: './assets/img/angry-bitcoin.png',
		price: '2.5 BTC'
	},
	{
		name: 'Space Police #3',
		desc: 'Most wanted NFT from A Bathing Ape X Police Watch',
		img: './assets/img/space-police.png',
		price: '7.5 ETH'
	}
]

const ALL_COLLECTION = [
	{
		name: 'Hansip Collection',
		desc: 'Koleksi NFT Hansip Ape yang tidak ada duanya',
		img: './assets/img/hansip-collection.png',
		price: '2.5 ETH'
	},
	{
		name: 'Cyborg Navy Collection',
		desc: 'Koleksi NFT Robot Pelaut yang laris manis di pasaran',
		img: './assets/img/cyborg-collection.png',
		price: '1.25 ETH'
	},
	{
		name: 'Cyberpunk 2077',
		desc: 'Terinspirasi dari Cyberpunk 2077, koleksi NFT terdepan',
		img: './assets/img/cyberpunk-collection.png',
		price: '2.65 ETH'
	},
	{
		name: 'Ewh!',
		desc: 'Ewh! NFT banci tapi ga dibenci',
		img: './assets/img/ewh-collection.png',
		price: '1.2 ETH'
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

function createSmallCard(payload) {
	const CARD = document.createElement('div')
	CARD.className = 'card-sm'
	CARD.innerHTML = `
		<img src="${payload.img}" alt="${payload.name}">
		<h3>${payload.name}</h3>
		<p>${payload.desc}</p>
		<div class="action">
			<p>${payload.price}</p>
		</div>
	`

	CARD_CONTAINER[1].appendChild(CARD)
}

for(let i = 0; i < POPULAR_NFT.length; i++) {
	createCard(POPULAR_NFT[i])
}

for(let i = 0; i < ALL_COLLECTION.length; i++) {
	createSmallCard(ALL_COLLECTION[i])
}