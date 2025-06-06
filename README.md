# Focus Cursor

Removes blinking from the editor cursor to help you focus while writing. Includes a customizable stable cursor.

## Features

- Removes the native cursor blink effect.
- Adds a single custom cursor.
- Cursor style is fully customizable via `styles.css` (color, height, position, etc.).
- Lightweight and unobtrusive — works well with most themes.

## Why?

The native cursor in Obsidian (via CodeMirror) blinks by default and can sometimes feel distracting.  
**Focus Cursor** replaces the blinking effect with a stable, visible cursor that you can customize to your liking.

## Installation

1. Download or clone this repository.
2. Copy the entire `focus-cursor` folder into your Obsidian vault under `.obsidian/plugins/`.
3. In Obsidian, go to **Settings → Community plugins → Enable Focus Cursor**.
4. Customize `styles.css` if you want to adjust the appearance of the cursor.

## Customization

You can edit `styles.css` to change:

- **Width** of the cursor
- **Height** relative to the text line
- **Color** (default is `currentColor` to match the text color)
- **Vertical position** using `transform: translateY(...)`

## Compatibility
- Works with Live Preview and Source Mode.
- Compatible with most themes (Minimal, Obsidian default themes, etc.).
- No external dependencies.

## Limitations
- This is a simple Focus Cursor plugin — it does not fully replace the CodeMirror cursor engine.
- In rare cases, some advanced themes that heavily style .cm-content may require slight CSS adjustments.

## Roadmap

### Version 1.0

- Initial release
- Removes native editor cursor blinking
- Adds a single customizable cursor (via `styles.css`)

### Planned Features

- [ ] Add Focus Cursor settings in Obsidian settings menu:
  - Cursor color (color picker)
  - Cursor width (slider)
  - Cursor height (slider)
  - Vertical offset (slider)
- [ ] Live update of cursor style when changing settings
- [ ] Option to enable/disable the plugin per workspace or per theme
- [ ] Improve compatibility with more complex themes
- [ ] Add localization (EN/FR)

### Ideas for future versions

- Support cursor animations (fade in/out, soft blink if desired)
- Support for Vim Mode (show Focus Cursor in insert mode only)
- User presets for Focus Cursor styles
