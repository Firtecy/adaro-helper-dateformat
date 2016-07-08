'use strict';

// Load the MomentJS Library
var moment = require('moment');

module.exports = function (dust /*, options*/) {

    // options are optional.
    // dust is a private instance, provided by Adaro.

    dust.helpers.formatDate = function(chunk, context, bodies, params) {

        // Retrieve the date value from the template parameters.
        var date = context.resolve(params.date);

        // Retrieve the format string from the template parameters.
        var format = context.resolve(params.format);

        if (!date) {
            return chunk.write('');
        }

        // Parse the date object using MomentJS
        var m = moment(new Date(date));

        // Format the string
        var output = m.format(format);

        // Write the final value out to the template
        return chunk.write(output);
    };
};
