

# Accessibility Fixes

## Use `<ul>` for metadata arrays instead of plain text with linebreaks

In `/application/src/ColumnType/Value.php` and `/modules/FacetedBrowse/ColumnType/Value.php`, change this:

```php
        // Get the values.
        $values = $resource->value($propertyTerm, ['all' => true]);
        if ($maxValues) {
            $values = array_slice($values, 0, $maxValues);
        }

        // Prepare the content.
        $content = [];
        foreach ($values as $value) {
            $content[] = $value->asHtml();
        }

        return implode('<br>', $content);
```

...to this:

``` php
        // Get the values.
        $values = $resource->value($propertyTerm, ['all' => true]);
        if ($maxValues) {
            $values = array_slice($values, 0, $maxValues);
        }

        if (!$values) {
            return '';
        }

        // Prepare the content.
        $content = '<ul>';
        foreach ($values as $value) {
            $content .= sprintf('<li>%s</li>', $value->asHtml());
        }
        $content .= '</ul>';

        return $content;
```

_[Suggested to Omeka S team on 2026-06-12](https://github.com/omeka/omeka-s/issues/2514)_