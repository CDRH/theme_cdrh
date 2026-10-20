# Base Theme for CDRH Omeka S Sites

This is a base Omeka S theme created by the [Center of Digital Research in the Humanities](https://cdrh.unl.edu/) at the [University of Nebraska–Lincoln](https://www.unl.edu/) for use in its projects. 

## Important Notes
- Be sure to make the recommended [application overrides](https://github.com/cdrh/omeka_s_cdrh_theme/blob/main/application-overrides.md) to fix unaddressed accessibility issues that cannot be fixed via the theme.
- Refer to 
[Omeka S Developer Documentation: Themes](https://omeka.org/s/docs/developer/themes/) for detailed information about theme development.
- When editing CSS, make sure to run `sass --watch asset/sass/style.scss asset/css/style.css` in the theme's root folder to compile any SASS changes you make into the `style.css` CSS stylesheet. Omeka S will not compile SASS on its own.

## Theme Modules

This theme works with several Omeka S Modules to build a more robust user experience. Some of these modules are required for the theme to work as intended, while others are "supported" by the theme in that this theme provides styling and layout for the module's features.

### Required Modules

  - [Common](https://omeka.org/s/modules/Common/): adds internal features on which most other modules are dependent.
  - [CSSEditor](https://omeka.org/s/modules/CSSEditor/): required for adding/editing CSS through the Omeka S admin interface, without going into the theme files every time.

### Themed Modules
The CDRH Base Theme includes styles for the following modules, but they are not required for the theme to function correctly.

  - [Faceted Browse](https://omeka.org/s/modules/FacetedBrowse/): the theme modifies sort and pagination UI and allows for restyling of the table of results to appear as an image gallery.
  - [Mapping](https://omeka.org/s/modules/Mapping/): the theme modifies the module's CSS to fix accessibility problems with color contrast and font sizes.

## Usage

Though this theme _can_be used as a standalone theme, it is meant to serve as a starting point for project-specific theme development.

### Accessibility

All elements and default styles of this theme are WCAG 2.1-compliant. The theme settings (such as colors) are flexible, however, and can easily introduce accessibility errors. **Anyone creating content, changing theme settings, and/or developing a custom theme on top of this codebase is expected to test their changes for accessibility compliance—and fix all errors—_during_ the editing process (rather than waiting until final review or a future audit).** 

### Designing a Theme

The first and best resource for editing an Omeka S site is the [Omeka S User Manual](https://omeka.org/s/docs/user-manual/). This is theme-agnostic and covers the all the things you can do as an Omeka S site admin or editor.

Since this theme is built on Bootstrap version 5.3, you can also refer to the official [Bootstrap 5.3 documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for available CSS classes and variables, as well as HTML elements like cards and buttons.

The information you will find in this README is specific to this theme and its customizations of Bootstrap 5.3.

(to be continued)

# Blocks

## Headings and Page Title
For headings, it's recommended to use the Heading block, but you can also add headings inside an HTML block by clicking inside the block, and then, in the text formatting popup, choosing one from the paragraph format dropdown ("Normal" is usually selected).

Accessibility notes:
- **There should be ONE and ONLY ONE Heading 1 (`<h1>`) on every page**, whether it is added via the Page Title block (default), via a Heading Block with level 1, or via applying the Heading 1 style to text in an HTML block.
- **DO NOT use headings just to make text larger.** If the text is not _truly_ a heading, but you want it to be large in size, use [Bootstrap's CSS classes that mimic headings](http://getbootstrap.com/docs/5.3/utilities/text/#font-size) (e.g. `<p class="h1">My Heading-like text here</p`>`), or Bootstrap CSS classes that [control font size](http://getbootstrap.com/docs/5.3/utilities/text/#font-size).
- Try to nest your headings without skipping levels. (In other words, you should not have an h4 come after an h2 with no h3 between.) This is an accessibility best practice and aids in readability. If you don't like the visual appearance when the headings are nested correctly, use the Bootstrap classes linked above to change the font size(s).