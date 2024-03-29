# History


## 2019-04-27, version 4.12.0

- Implemented support for saving a document to an url.
- Upgraded to `jsoneditor@5.32.5`


## 2019-04-10, version 4.11.3

- Upgraded to `jsoneditor@5.32.4`


## 2019-04-03, version 4.11.2

- Upgraded to `jsoneditor@5.32.2`


## 2019-02-20, version 4.11.1

- Upgraded to `jsoneditor@5.29.1`


## 2019-02-16, version 4.11.0

- Upgraded to `jsoneditor@5.29.0`


## 2019-01-23, version 4.10.2

- Upgraded to `jsoneditor@5.28.2`


## 2019-01-22, version 4.10.1

- Upgraded to `jsoneditor@5.28.1`


## 2019-01-17, version 4.10.0

- Allow usage of `$data` in JSON schemas.


## 2019-01-17, version 4.9.10

- Fix JSON Schema draft-06 not working.


## 2019-01-16, version 4.9.9

- Use the latest version of Ajv, `6.7.0`.
  Allow both JSON Schema draft-04 and draft-06.
- Upgraded to `jsoneditor@5.27.1`


## 2018-12-06, version 4.9.8

- Upgraded to `jsoneditor@5.26.3`


## 2018-11-13, version 4.9.7

- Upgraded to `jsoneditor@5.26.2`


## 2018-11-13, version 4.9.6

- Upgraded to `jsoneditor@5.26.1`


## 2018-10-29, version 4.9.5

- Upgraded to `jsoneditor@5.25.0`


## 2018-10-08, version 4.9.4

- Upgraded to `jsoneditor@5.24.7`


## 2018-09-06, version 4.9.3

- Fixed JSONEditor not working on IE 11.
- Upgraded to `jsoneditor@5.24.5`


## 2018-08-27, version 4.9.2

- Upgraded to `jsoneditor@5.24.2`


## 2018-08-26, version 4.9.1

- Upgraded to `jsoneditor@5.24.1`


## 2018-08-22, version 4.9.0

- Upgraded to `jsoneditor@5.24.0`:
  - Color picker.


## 2018-08-17, version 4.8.0

- Upgraded to `jsoneditor@5.23.1`:
  - Fixed broken transform function.


## 2018-08-12, version 4.7.0

- Upgraded to `jsoneditor` v5.21.0:
  - Update editor instead of reset when copying from left panel
    to right panel (tree mode).
  - Inline validation errors in left panel (code mode)


## 2018-08-02, version 4.6.2

- Upgraded to `jsoneditor` v5.19.2.


## 2018-07-28, version 4.6.1

- Upgraded to `jsoneditor` v5.19.1.


## 2018-07-11, version 4.6.0

- Upgraded to `jsoneditor` v5.19.0 (Improved JMESPath support).


## 2018-06-27, version 4.5.0

- Upgraded to `jsoneditor` v5.18.0 (support for JMESPath filtering/transforming).


## 2018-06-03, version 4.4.0

- Upgraded to `jsoneditor` v5.17.1 (support for advanced sorting).


## 2018-05-23, version 4.3.0

- Upgraded to `jsoneditor` v5.16.0 (support for large arrays).
- More clear error message when trying to save too large documents online.


## 2018-02-07, version 4.2.3

- Upgraded to `jsoneditor` v5.13.3


## 2018-01-03, version 4.2.2

- Prevent displaying multiple "Document saved" messages after saving the
  document multiple times shortly after each other. See #498.


## 2017-12-28, version 4.2.1

- Upgraded to `jsoneditor` v5.13.1


## 2017-12-28, version 4.2.0

- Upgraded to `jsoneditor` v5.13.0


## 2017-12-09, version 4.1.0

- Allow https version of the website.


## 2017-12-06, version 4.0.0

- Dropped support for loading/saving files on disk on old browsers
  not supporting HTML5 FileReader.


## 2017-11-15, version 3.9.0

- Upgraded to `jsoneditor` v5.11.0


## 2017-11-15, version 3.8.0

- Upgraded to `jsoneditor` v5.10.1, containing a new navigation bar,
  a status bar, and an explicit repair button in the code editor.


## 2017-09-16, version 3.7.10

- Upgraded to `jsoneditor` v5.9.6.


## 2017-08-08, version 3.7.9

- Upgraded to `jsoneditor` v5.9.3.


## 2017-07-13, version 3.7.8

- Upgraded to `jsoneditor` v5.9.2.


## 2017-04-16, version 3.7.7

- Upgraded to `jsoneditor` v5.6.0.
- Ask to load data again when last time took very long.


## 2017-02-19, version 3.7.6

- Longer timeout for loading urls, output error in console. See #365.


## 2016-10-21, version 3.7.5

- Fixed not being able to open urls having query parameters.


## 2016-10-17, version 3.7.4

- Upgraded to `jsoneditor` v5.5.9.


## 2016-05-22, version 3.7.3

- Upgraded to `jsoneditor` v5.5.4.


## 2016-04-18, version 3.7.2

- Upgraded to `jsoneditor` v5.5.2.


## 2016-04-16, version 3.7.1

- Upgraded to `jsoneditor` v5.5.1.


## 2016-04-16, version 3.7.0

- Upgraded to `jsoneditor` v5.5.0.
- Fixed a styling issue when clicking "New" or "Open from disk".


## 2016-04-09, version 3.6.2

- Upgraded to jsoneditor v5.4.0.


## 2016-02-03, version 3.6.1

- Removed the usage of HTML5 Application Cache, it's too problematic.
- Fixed the context menu not working on Firefox (jsoneditor v5.1.3).


## 2016-01-30, version 3.6.0

- Support for JSON schema validation.
- Settings menu (indentation and JSON schema validation).
- Minor layout tweaks.


## 2016-01-05, version 3.5.1

- Changed layout colors.


## 2016-01-01, version 3.5.0

- Implemented support for loading a file by dropping it on the website.
- Updated to `jsoneditor` v5.0.1.


## 2015-08-29, version 3.4.3

- Added a cookie consent notice required for Google Adsense.


## 2015-07-10, version 3.4.2

- Added a (temporary) redirect from `https` to `http` as the backend has a self
  signed certificate which gives a cross domain error when loading/saving files.


## 2015-06-13, version 3.4.1

- Fixed a text selection issue in the code editor with non-western languages.
- Updated to `jsoneditor` v4.2.1.


## 2015-03-02, version 3.4.0

- Updated to `jsoneditor` v4.0.0 (some bugfixes, changed internal module system).
- Implemented shortcut keys `Ctrl+>` and `Ctrl+<` to copy code from left to
  right panel and vice versa.


## 2015-01-25, version 3.3.0

- Updated to `jsoneditor` v3.2.0, containing some bug fixes and some new
  shortcut keys.


## 2014-10-12, version 3.2.0

- Documents can be stored online.
- The stores the last edited document in local storage.
- Before an error is thrown because of invalid text, the editor first tries to
  sanitize the text (replace JavaScript notation with JSON notation), and only
  after that throws the error.


## 2014-09-03, version 3.1.2

- Some fixes/improvements in `parseJS` (to parse a JSON object from a JavaScript
  object).
- Fixed the lack of a semi colon at end of the bundled files.


## 2014-08-01, version 3.1.1

- Replaced parsing of JavaScript objects into JSON from `eval` to a dedicated
  `parseJS` function.


## 2014-07-28, version 3.1.0

- JSONEditor now accepts JavaScript objects as input, and can turn them into
  valid JSON. For example `{a:2,b:'str'}` can be turned into `{"a":2,"b":"str"}`.
- Implemented an option `editable`, a callback function, which allows to set 
  individual nodes (their field and/or value) editable or read-only.
- Fixed: shortcut keys to manipulate the nodes are now disabled when mode 
  is `form` or `view`.


## 2014-05-31, version 3.0.0

- Large code reorganization.
- Editor must be loaded as `new JSONEditor(...)` instead of 
  `new jsoneditor.JSONEditor(...)`.
- Css is not automatically loaded anymore when using AMD.
- Web application has been moved to another project.


## 2014-01-03, version 2.3.6

- Fixed positioning issue of the action menu.


## 2013-12-09, version 2.3.5

- Fixed a positioning issue of the action menu again.
- Fixed an issue with non-breaking space characters.


## 2013-11-19, version 2.3.4

- Dropped support for IE8, cleaned up legacy code for old browsers.
- Disabled saving files using HTML5 on Firefox to prevent a Firefox bug
  blocking cut/paste functionality in editable divs after using a.download.


## 2013-10-17, version 2.3.3

- Added support for search (Ctrl+F) in the code editor Ace.
- Fixed a positioning issue of the action menu when in bootstrap modal.
  (thanks tsash).


## 2013-09-26, version 2.3.2

- The web application is now available offline. Thanks ayanamist.


## 2013-09-24, version 2.3.1

- Fixed non-working action menu when in bootstrap modal (z-index issue).
- Fixed missing main field in package.json.


## 2013-09-13, version 2.3.0

- Implemented an option `modes`, which creates a menu in the editor
  where the user can switch between the selected editor modes.
- Fixed wrong title on fields with value `null`.
- Fixed buggy loading of files in the web application.


## 2013-08-01, version 2.2.2

- Fixed non working option `indentation`.
- Fixed css not being loaded with AMD in case of multiple scripts.
- Fixed a security error in the server side file retriever script of
  the web application.


## 2013-05-27, version 2.2.1

- Fixed undefined options in TextEditor. Thanks Wiseon3.
- Fixed non-working save function on Firefox 21. Thanks youxiachai.


## 2013-05-04, version 2.2.0

- Unified JSONFormatter and JSONEditor in one editor with a switchable mode.
- Urls are navigable now.
- Improved error and log handling.
- Added jsoneditor to package managers npm and bower.


## 2013-03-11, version 2.1.1

- Fixed an issue with console outputs on IE8, causing the editor not to work
  at all on IE8.


## 2013-03-08, version 2.1.0

- Replaced the plain text editor with code editor Ace, which brings in syntax
  highlighting and code inspection.
- Improved the splitter between the two panels. Panels can be hided.


## 2013-02-26, version 2.0.2

- Fixed: dragarea of the root node was wrongly visible is removed now.


## 2013-02-21, version 2.0.1

- Fixed undefined variable in the redo method.
- Removed the "hide ads" button. Not allowed by Google AdSense, sorry.


## 2013-02-09, version 2.0.0

- Implemented a context menu, replacing the action buttons on the right side of
  the editor and the inline action buttons. This gives a cleaner interface,
  more space for the actual contents, and more room for new controls (like
  insert and sort).
- Implemented shortcut keys. The JSON Editor can be used with just a keyboard.
- Implemented sort action, which sorts the childs of an array or object.
- Implemented auto scrolling up and down when dragging a node and reaching
  the top or bottom of the editor.
- Added support for CommonJS and RequireJS.
- Added more examples.
- Improved performance and memory usage.
- Implemented a new mode 'form', in which only values are editable and the
  fields are fixed.
- Minor improvements and bug fixes.


## 2012-12-08, version 1.7.0

- Implemented two modes: 'editor' (default), and 'viewer'. In viewer mode,
  the data and datastructure is read-only.
- Implemented methods set(json, name), setName(name), and getName(), which
  allows for setting and getting the field name of the root node.
- Fixed an issue where the search bar does not work when there is no global
  window.editor object.


## 2012-11-26, version 1.6.2

- Fixed a bug in the change callback handler, resulting in an infinite loop
  when requesting the contents of the editor inside the callback (issue #19).


## 2012-11-21, version 1.6.1

- Added a request header "Accept: application/json" when loading files and urls.


## 2012-11-03, version 1.6.0

- Added feature to the web application to load and save files from disk and url.
- Improved error messages in the web application using JSONLint.
- Made the web application pass the W3C markup validation service.
- Added option 'change' to both editor and formatter, which allows to set a
  callback which is triggered when the contents of the editor or formatter
  changes.
- Changed the default indentation of the JSONFormatter to 4 spaces.
- Renamed options 'enableSearch' and 'enableHistory' to 'search' and 'history'
  respectively.
- Added parameter 'json' to the JSONFormatter constructor.
- Added option 'indentation' to the JSONFormatter.


## 2012-10-08, version 1.5.1

- Replaced the paid Chrome App with a free, hosted Chrome App (with ads).


## 2012-10-02, version 1.5.0

- Implemented history: undo/redo all actions.
- Created menu icons (instead of text buttons).
- Cleaned up the code (removed unused params, improved comments, etc).
- Minor performance improvements.


## 2012-08-31, version 1.4.4

- Changed: description of advertisement now gives information about the Chrome
  App (without ads).
- Changed: Chrome App is now configured to be available offline.
- Fixed: When zooming your browser window, the fields/values did get wrapped
  on Chrome (thanks Henri Gourvest), and on Firefox sometimes the jsoneditor
  disappeared due to wrapping of the interface contents.


## 2012-08-25, version 1.4.3

- Changed: changed code for the buttons to copy from formatter to editor and
  vice versa, no inline javascript (gives security policy errors in chrome app).


## 2012-08-25, version 1.4.2

- Changed: other bootstrapping mechanism for the chrome app, in a separate
  javascript file, as inline javascript is not allowed (security policy).
- Fixed: drop down menu for changing the field type did throw javascript errors
  (did not break any functionality though).


## 2012-08-23, version 1.4.1

- New: Chrome app created.


## 2012-08-23, version 1.4.0

- New: Improved icon, logo, and interface header.


## 2012-08-19, version 1.3.0

- New: Added buttons next and previous to the search box in the upper right.
- New: Escape characters are automatically inserted before " and \ missing
  and escape character, making the string contents valid JSON. New lines are
  automatically replaced with \n. (Thanks Steve Clay)
- Changed: all icons have been put in a single sprite. This will improve page
  load times as there are much less server requests needed to load the editor.


## 2012-08-12, version 1.2.0

- New: Added search functionality. Search results are expanded and highlighed.
  Quickkeys in the search box: Enter (next), Shift+Enter (previous), Ctrl+Enter
  (search again).
- New: The position of the vertical separator between left and right panel is
  stored.
- New: Link to the sourcecode on github added at the bottom of the page.
- Changed: Refinements in the layout: fonts, colors, icons.
- Fixed: leading an trailing spaces not being displayed in the editor.
- Fixed: wrapping of long words and urls in Chrome.
- Fixed: ignoring functions and undefined values in the loaded JSON object
  (they where interpreted as empty object and string instead of being ignored).


## 2012-07-01, version 1.1.1

- Fixed global event listener for the focus/blur events, causing changes in
  fields and values not always being registered.
- Fixed a css issue with Firefox (box-sizing of the editor).


## 2012-04-24, version 1.1

- Fixed a bug. Dragging an object down which has been expanded and collapsed
  again did not work.
- Using a minified version of jsoneditor.js, to improve page load time and
  save bandwidth.


## 2012-04-21, version 1.0

- Values are no longer aligned in one global column, but placed directly right
  from the field. Having field and value close together improves readability,
  especially in case of deeply nested data.
- Values are colorized by their type: strings are green, values read, booleans
  blue, and null is purple.
- Font is changed to a monotype font for better readability.
- Special characters like \t are now handled nicely.
- Overall performance and memory usage improved.
- When clicking on whitespace, focus is set to the closest field or value.
- some other small interface tweaks.
- Fixed a bug with casting a value from type auto to string and vice versa
  (the value was not casted at all).


## 2012-03-01, version 0.9.10

- Nicer looking select box for the field types, with icons.
- Improved drag and drop: better visualized, and now working in all browers.
- Previous values will be restored after changing the type of a field. When
  changing the type back, the previous value or childs will be restored.
- When hovering buttons (fieldtype, duplicate, delete, add) or when dragging
  a field, corresponding field including its childs is highlighted. This makes
  it easier to see what part of the data will be edited.
- Errors are now displayed in a message window on top of the page instead of
  an alert which pops up.
- Fixed a bug with displaying enters in fields.
- Fixed a bug where the last trailing enter was removed when setting json
  in the editor.
- Added a fix to get around Internet Explorer 8 issues with vertical scrollbars.


## 2012-01-29, version 0.9.9

- Fields can be duplicated
- Support for drag and drop:
  - fields in the editor itself can be moved via drag and drop
  - fields can be exported from the editor as JSON
  - external JSON can be dropped inside the editor
- When changing type from array to object and vice versa, childs will be
  maintained instead of removed.
- Updated interface. Works now in IE8 too.


## 2012-01-16, version 0.9.8

- Improved the performance of expanding a node with all its childs.


## 2012-01-09, version 0.9.7

- Added functionality to expand/collapse a node and all its childs. Click
  the expand button of a node while holding Ctrl down.
- Small interface improvements


## 2011-11-28, version 0.9.6

- First fully usable version of the JSON editor