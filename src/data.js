import { v4 as uuidv4 } from 'uuid';

function chillHop() {
	return [
		{
			name: 'Runaway',
			artist: 'Blue Wednesday, Magnus Klausen',
			cover:
				'https://d9nqml74o2sdi.cloudfront.net/c84f15bf-2c0e-4c3a-91e4-22ec1652cab3.5a6f1789-4b71-453f-9360-8a7dde3f604d',
			color: ['#F6B78B', '#933242'],
			id: uuidv4(),
			active: true,
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=12135',
		},
		{
			name: 'Kinsfolk',
			artist: 'Aarigod',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
			color: ['#B0CA72', '#59723B'],
			id: uuidv4(),
			active: false,
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=12997',
		},
		{
			name: 'Toofpick',
			artist: 'Blue Wednesday, Shopan',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
			color: ['#B9A7DB', '#5463B7'],
			id: uuidv4(),
			active: false,
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=11227',
		},
		{
			name: 'sopha',
			artist: 'Plusma, Von Wegen',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg',
			color: ['#DDC1C8', '#9D9DC1'],
			id: uuidv4(),
			active: false,
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9061',
		},
	];
}

export default chillHop;
