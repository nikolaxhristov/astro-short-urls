export default interface Options {
	[key: string]: any;

	/**
	 * URL to use as a base.
	 * @default "/"
	 */
	url?: string;

	/**
	 * Logger level.
	 * Default: 2
	 */
	logger?: number;
}
