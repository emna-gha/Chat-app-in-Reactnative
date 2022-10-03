export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Vadim',
		imageUri: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.goodmorningimagesdownload.com%2Fwp-content%2Fuploads%2F2021%2F07%2FFacebook-Profile-Images-Wallpaper-Free.gif&imgrefurl=http%3A%2F%2Fwww.goodmorningimagesdownload.com%2Ffacebook-profile-images-download%2F&tbnid=-naZdYrh1A487M&vet=12ahUKEwiPy4mjtcH6AhUV76QKHYLHCvAQMygjegUIARCPAg..i&docid=pKedE66Nb5z5pM&w=564&h=705&q=facebook%20profile%20picture&ved=2ahUKEwiPy4mjtcH6AhUV76QKHYLHCvAQMygjegUIARCPAg',
	}, {
		id: 'u2',
		name: 'Lukas',
		imageUri: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.goodmorningimagesdownload.com%2Fwp-content%2Fuploads%2F2021%2F07%2FFacebook-Profile-Images-Wallpaper-Free.gif&imgrefurl=http%3A%2F%2Fwww.goodmorningimagesdownload.com%2Ffacebook-profile-images-download%2F&tbnid=-naZdYrh1A487M&vet=12ahUKEwiPy4mjtcH6AhUV76QKHYLHCvAQMygjegUIARCPAg..i&docid=pKedE66Nb5z5pM&w=564&h=705&q=facebook%20profile%20picture&ved=2ahUKEwiPy4mjtcH6AhUV76QKHYLHCvAQMygjegUIARCPAg',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you?',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for my job interview now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm5',
		content: 'How is it going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm6',
		content: 'It is going well. How about yours? Do you enjoy your job?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm7',
		content: 'Mobile dev is really interesting. Cannot wait to go through all the material.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}]
}