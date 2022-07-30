import type { AstroIntegration } from "astro";
import Options from "./options";

/**
 * It takes in an object of options, and returns an object that Astro can use to create a plugin
 * @param {Options} integrationOptions - Options = {}
 * @returns A function that returns an object.
 */
export default function createPlugin(
	integrationOptions: Options = {}
): AstroIntegration {
	const defaultOptions: Options = {
		url: "/",
		logger: 2,
	};

	const _options = Object.assign(defaultOptions, integrationOptions);

	_options.url = _options.url?.endsWith("/")
		? _options.url
		: `${_options.url}/`;

	return {
		name: "astro-short-urls",
		hooks: {
			"astro:build:done": async () => {
				// @TODO: Shorten URLs
			},
		},
	};
}
