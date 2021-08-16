const config = {
	branches: ["main"],

	ci: false,

	debug: true,

	plugins: [
		[
			"@semantic-release/commit-analyzer",
			{
				parserOpts: {
					noteKeywords: [
						"BREAKING CHANGE",
						"BREAKING CHANGES",
						"BREAKING",
					],
				},
			},
		],
		[
			"@semantic-release/release-notes-generator",
			{
				parserOpts: {
					noteKeywords: [
						"BREAKING CHANGE",
						"BREAKING CHANGES",
						"BREAKING",
					],
				},
				writerOpts: {
					commitsSort: ["subject", "scope"],
				},
			},
		],
		"@semantic-release/changelog",
		[
			"@semantic-release/npm",
			{
				npmPublish: true,
				tarballDir: "dist",
			},
		],
		"@semantic-release/git",
	],
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
