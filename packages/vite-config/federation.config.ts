// Add new microfrontends package names here...
const mfs = ["zinkee-auth"];

// Remotes
export const federationRemotes = mfs.map((mf) => {
	const urlKey = `${mf.toUpperCase().replace("-", "_")}_APP_URL`;
	const portKey = `${mf.toUpperCase().replace("-", "_")}_APP_PORT`;

	const port = process.env[portKey] ? Number(process.env[portKey]) : undefined;
	const url = `${process.env[urlKey]}${
		port ? `:${port}` : ""
	}/assets/remoteEntry.js`;

	return { [mf]: url };
});

// Shared libs
export const federationSharedLibs = [
	"react",
	"react-dom",
	"react-hook-form",
	"react-router-dom",
	"i18next",
	"react-i18next",
];
