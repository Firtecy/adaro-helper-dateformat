Adaro @formatDate Helper [Deprecated]
=====================================

**Notice:** This module is no longer being maintained.

Small adaro helper to format dates in your kraken js app

How to use
----------

In your dust templates, like so:

```
{@formatDate date="{date}" format="{format}" /}
```

Or:

```
{@formatDate date="Fri Dec 10 1948 00:00:00 GMT+0100 (CET)" format="DD.MM.YYYY" /}
```

And rendered with a context like this:

```
dust.render('template', {date: 'Fri Dec 10 1948 00:00:00 GMT+0100 (CET)', format: 'DD.MM.YYYY' }, function (err, out) {
    if (err) {
        console.error(err);
    } else {
        console.log(out);
    }
});
```

Will give output `10.12.1948`

Date formats supported
----------------------

* For 'date': All formats the javascript date constructor accepts ;-)
* For 'format': All formats the moment js library supports
