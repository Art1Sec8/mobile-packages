Package.describe({
  name: "mdg:reload-on-resume",
  summary: "On Cordova, only allow the app to reload when the app is resumed.",
  version: '1.0.1',
  git: "https://github.com/meteor/mobile-packages"
});

Package.on_use(function (api) {
  api.versionsFrom("0.9.2");
  api.use(['reload', 'reactive-var'], 'web');
  api.add_files("reload-on-resume.js", 'web.cordova');
  api.add_files("browser.js", 'web.browser');
});