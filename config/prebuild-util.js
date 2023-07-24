try {
    console.log('\x1b[36m%s\x1b[0m', `Pre build actions inititated . . .`, "\x1b[0m");
    const fs = require('fs');
    const helpers = require('./helpers');
    let config = require(helpers.root(`src/app/base/config.js`)).Config.portal;
    const overrideBaseCSS = config && config.themeCustomizations && config.themeCustomizations.overrideBaseCSS;
    if (overrideBaseCSS) {
        const baseCSSPath = config.themeCustomizations && config.themeCustomizations.baseCSSPath ? config.themeCustomizations.baseCSSPath : '';
        if (baseCSSPath && baseCSSPath.length > 0) {
            let themepath = helpers.root(baseCSSPath);
            fs.readdir(themepath, (err, files) => {
                files.forEach(file => {
                    fs.copyFile(themepath + file, helpers.root("src/app/scss/" + file), (err) => {
                        if (err) console.log("\x1B[31m", "Unable to load theme file", "\x1b[0m", err);
                        else console.log('\x1b[33m%s\x1b[0m', 'Theme file loaded . . .', "\x1b[0m");
                    });
                });
            });
        }
    }
} catch (error) {
    console.log('\x1b[33m%s\x1b[0m', "Please check config/Theme path", "\x1b[0m");
} finally {
    console.log('\x1b[36m%s\x1b[0m', `Pre build actions executed . . .`, "\x1b[0m");
}
