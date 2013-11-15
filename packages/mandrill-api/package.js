Package.describe("Mandrill package");

Package.on_use(function (api) {
	api.add_files(['mandrill.js'], 'server');
	if(api.export)
	api.export('mandrillAPI');
});

Npm.depends({
"mandrill-api": "1.0.37"
});