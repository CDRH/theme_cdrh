

# Accessibility Fixes

## Use `<ul>` for metadata arrays instead of plain text with linebreaks

In `/application/src/ColumnType/Value.php` and `/modules/FacetedBrowse/ColumnType/Value.php`, change this (~Line 97 or 98):

```php
        return implode('<br>', $content);
```

...to this:

``` php
        return $content ? "<ul><li>" . implode('</li><li>', $content) . "</li></ul>" : null;
```

_[Suggested to Omeka S team on 2026-06-12](https://github.com/omeka/omeka-s/issues/2514)_