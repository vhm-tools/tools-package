import Notification from './notification';

class EcoSystemTools {
	#nom;

	constructor(opts = {}) {
		if (!this.validate(opts)) {
			throw new Error('Missing API Key');
		}

		this.#nom = new Notification(opts);
	}

	validate(opts) {
		if (!opts.apiKey) {
			return false;
		}

		return true;
	}

	trigger(eventName, data) {
		return this.#nom.trigger(eventName, data);
	}
}

export default EcoSystemTools;
