# Base Theme for CDRH Omeka S Sites

This is a bare-bones Omeka S theme created by the [Center of Digital Research in the Humanities](https://cdrh.unl.edu/) at the [University of Nebraska–Lincoln](https://www.unl.edu/) for use in its projects. 

## Important Notes
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

## Usage

This "theme" serves as a starting point for theme development and is not intended as a standalone Omeka S theme. It does not provide a cohesive visual theme with fonts, colors, and graphics; what it does provide, though, is a solid foundation upon which to _build_ a cohesive visual theme specific to your project. All elements and base styles are WCAG 2.1-compliant.

### Designing a Theme

The first and best resource for editing an Omeka S site is the [Omeka S User Manual](https://omeka.org/s/docs/user-manual/). This is theme-agnostic and covers the all the things you can do as an Omeka S site admin or editor.

Since this theme is built on Bootstrap version 5.3, you can also refer to the official [Bootstrap 5.3 documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for available CSS classes and variables, as well as HTML elements like cards and buttons.

The information you will find in this README is specific to this theme and its customizations of Bootstrap 5.3.

(to be continued)
