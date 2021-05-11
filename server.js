'use strict';

var kraken = require('kraken-js'),
    app = require('express')(),
    options = {
        onconfig: function (config, next) {
            config.get('view engines:js:renderer:arguments').push(app);

            next(null, config);
        }
        /* more options are documented in the README */
    },
    port = process.env.PORT || 8000;

app.use(kraken(options));

app.listen(port, function (err) {
    console.log(
        '[%s] Listening on http://localhost:%d',
        app.settings.env,
        port
    );
});
