const { PUBLIC_API, API_VERSION } = process.env;

class Notification {
	#apiKey;

	constructor(opts = {}) {
		this.#apiKey = opts.apiKey;
	}

	trigger(eventName, data) {
		return fetch(`${PUBLIC_API}/${API_VERSION}/notification/mail`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'vhm-api-key': this.#apiKey,
			},
			body: JSON.stringify({
				eventName,
				data,
			}),
		});
	}
}

export default Notification;
