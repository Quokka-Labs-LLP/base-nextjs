import React, { useEffect } from "react"
// eslint-disable-next-line
// @ts-ignore
import { default as Froala } from "froala-editor/js/froala_editor.pkgd.min.js"

import "froala-editor/css/froala_editor.pkgd.min.css"

export interface FroalaConfig {
  // Char Counter
  // ==========================================================================
  /**
   * Enables or disables the display of the character counter.
   */
  charCounterCount?: boolean
  /**
   * The maximum number of characters allowed to be inserted into the rich text
   * editor. -1 means that there is not limit set.
   */
  charCounterMax?: number

  // Code Beautifier
  // ==========================================================================
  /**
   * Specify the options for Code Beautifier.
   */
  codeBeautifierOptions?: any

  // Code View
  // ==========================================================================
  /**
   * Disable or enable using the CodeMirror library to highlight the HTML view.
   * Note: This option requires the CodeMirror library to be included.
   */
  codeMirror?: any
  /**
   * Specify the options for CodeMirror.
   */
  codeMirrorOptions?: any
  /**
   * A list of buttons to keep active while editor is in Code View mode.
   */
  codeViewKeepActiveButtons?: string[]

  // Colors
  // ==========================================================================
  /**
   * An array of colors used in the colors popup for background. Passing REMOVE
   * as a value in the array will display the Clear Formatting button for
   * colors.
   */
  colorsBackground?: string[]
  /**
   * Set the buttons the colors popup.
   */
  colorsButtons?: string[]
  /**
   * Show HEX input to choose custom color.
   */
  colorsHEXInput?: boolean
  /**
   * The number of colors displayed on a line in the colors popup.
   */
  colorsStep?: number
  /**
   * An array of colors used in the colors popup for text. Passing REMOVE as a
   * value in the array will display the Clear Formatting button for colors.
   */
  colorsText?: string[]

  // Draggable
  // ==========================================================================
  /**
   * Specifies how the dragged elements should be placed in the new position.
   * When this option is disabled, the dragged elements are placed between
   * block tags and not inside them.
   */
  dragInline?: boolean

  // Embedly
  // ==========================================================================
  /**
   * Your key from Embed.ly to remove the "Powered By Banner".
   */
  embedlyKey?: string
  /**
   * The buttons that appear in the edit Embed.ly popup, when an embedded
   * object is selected.
   */
  embedlyEditButtons?: string[]
  /**
   * The buttons that appear in the insert Embed.ly popup, when an embeded
   * object is inserted into the WYSIWYG editor.
   */
  embedlyInsertButtons?: string[]
  /**
   * The default script path for the Embedly JS.
   */
  embedlyScriptPath?: string

  // Emoticons
  // ==========================================================================
  /**
   * Buttons set for emoticons popup.
   */
  emoticonsButtons?: string[]
  /**
   * An array of emoticons available in the insert emoticon popup. Each
   * emoticon is defined by an Object containing the code and description of
   * each emoticon.
   */
  emoticonsSet?: { code: string, desc: string }[]
  /**
   * Use EmojiOne svg images instead of Unicode text.
   */
  emoticonsUseImage?: boolean
  /**
   * The number of emoticons displayed on a line in the insert emoticon popup.
   */
  emoticonsStep?: number

  // Entities
  // ==========================================================================
  /**
   * A list with the characters that are reserved in HTML. More details about
   * using entities in HTML can be found on W3C and Wikipedia.
   */
  entities?: string

  // File
  // ==========================================================================
  /**
   * The list of file types that are allowed to be uploaded. Although this will
   * restrict uploading other types of files, we strongly recommend you to
   * check the file type on the server too.
   */
  fileAllowedTypes?: string[]
  /**
   * The list of buttons that appear in the insert file popup, when inserting
   * a new file into the WYSIWYG editor.
   */
  fileInsertButtons?: string[]
  /**
   * The maximum file size allowed on upload in bytes. The default value is
   * 10MB. Although this makes an additional check before uploading the file,
   * it is highly recommended to check file size on your server too.
   */
  fileMaxSize?: number
  /**
   * Enable or disable file upload.
   */
  fileUpload?: boolean
  /**
   * The HTTP file upload request type.
   */
  fileUploadMethod?: string
  /**
   * Customize the name of the parameter that contains the file in the upload
   * request.
   */
  fileUploadParam?: string
  /**
   * Pass additional parameters to the file upload request.
   */
  fileUploadParams?: any
  /**
   * Set the options for file upload to S3. All the fields from the example
   * below are required. Also make sure that you have enabled CORS on Amazon.
   */
  fileUploadToS3?: any
  /**
   * The URL where the files uploaded by the user are saved. When a file is
   * uploaded, the editor sends the file to the server through a HTTP request.
   * The server should process the data from the file parameter of the request
   * and return a JSON object containing a link field with the link to the
   * uploaded file. More details can be found in the File Upload concept
   * article.
   */
  fileUploadURL?: string
  /**
   * Enables using the file's name instead of the selected text when a file
   * is inserted.
   */
  fileUseSelectedText?: boolean

  // Font Family
  // ==========================================================================
  /**
   * Defines the fonts that appear under the Font Family button from the rich
   * text editor's toolbar.
   */
  fontFamily?: any
  /**
   * The text to display when the font family is unkown or nothing is selected.
   */
  fontFamilyDefaultSelection?: string
  /**
   * The Font Family button from the WYSIWYG editor's toolbar is replaced with
   * a dropdown showing the actual font family name for the current text
   * selection.
   */
  fontFamilySelection?: boolean

  // Font Size
  // ==========================================================================
  /**
   * The Font Size button from the WYSIWYG editor's toolbar is replaced with a
   * dropdown showing the actual font size value for the current text selection.
   */
  fontSizeSelection?: boolean
  /**
   * Defines the font sizes that appear under the Font Size button from the
   * rich text editor's toolbar.
   */
  fontSize?: string[]
  /**
   * The text to display when the font size is unkown or nothing is selected.
   */
  fontSizeDefaultSelection?: string
  /**
   * The unit to be used for the font size.
   */
  fontSizeUnit?: string

  // Form
  // ==========================================================================
  /**
   * Buttons for form edit popup.
   */
  formEditButtons?: string[]
  /**
   * To enable applying multiple css on form elements.
   */
  formMultipleStyles?: boolean
  /**
   * Options for applying styles on form.
   */
  formStyles?: any
  /**
   * Buttons for form popup.
   */
  formUpdateButtons?: string[]

  // General
  // ==========================================================================
  /**
   * Remove the Powered By Froala message.
   */
  attribution?: boolean
  /**
   * Focus the editor instance when the page is loaded.
   */
  autofocus?: boolean
  /**
   * Sets the direction of the text. Possible values are: 'auto', 'ltr' and
   * 'rtl'. When the option is set to auto the editor automatically detects
   * if the keyboard input is RTL or LTR. However only the text inside the
   * editing box changes direction, the toolbar remains the same. The rtl and
   * ltr values also change the toolbar's direction.
   */
  direction?: string
  /**
   * Disables the default browser context menu. It's recommended to be used
   * if toolbarVisibleWithoutSelection option is enabled.
   */
  disableRightClick?: boolean
  /**
   * Turns on the editor best setup for editing documents.
   */
  documentReady?: boolean
  /**
   * Edit the text inside the HTML element on which the editor is initialized on in a popup.
   */
  editInPopup?: boolean
  /**
   * Set a custom class for the WYSIWYG editor editing box.
   */
  editorClass?: string
  /**
   * Set the default tag to be used when ENTER key is hit. Possible values are
   * FroalaEditor.ENTER_P, FroalaEditor.ENTER_DIV or FroalaEditor.ENTER_BR.
   */
  enter?: string
  /**
   * Allows the usage of HTML, HEAD, BODY tags and DOCTYPE declaration.
   * Note: Enabling this option will automatically enables the iframe option.
   */
  fullPage?: boolean
  /**
   * Set a height for the rich text editor's editing box.
   */
  height?: number
  /**
   * Set a maximum height for the rich text editor's editing box.
   */
  heightMax?: number
  /**
   * Set a minimum height for the rich text editor's editing box.
   */
  heightMin?: number
  /**
   * Allow comments inside the edited HTML.
   */
  htmlAllowComments?: boolean
  /**
   * The list of allowed attributes to be used for tags.
   */
  htmlAllowedAttrs?: string[]
  /**
   * The list of tags that are not removed when they have no content inside.
   */
  htmlAllowedEmptyTags?: string[]
  /**
   * The list of allowed CSS attributes to be used for tags.
   */
  htmlAllowedStyleProps?: string[]
  /**
   * The list of allowed tags.
   */
  htmlAllowedTags?: string[]
  /**
   * The list of tags that should not be wrapped inside block tags.
   */
  htmlDoNotWrapTags?: string[]
  /**
   * Allow running scripts that are entered in Code View.
   */
  htmlExecuteScripts?: boolean
  /**
   * A list of CSS properties to be ignored when useClasses option is disabled
   * and the CSS from external stylesheets is converted to inline style.
   */
  htmlIgnoreCSSProperties?: string[]
  /**
   * The list of tags that are removed together with their content.
   */
  htmlRemoveTags?: string[]
  /**
   * Allows the usage of simple ampersands (&) instead of the relative HTML
   * entity (&amp;). This is not recommended by the W3C XHTML specifications,
   * so this option should remain false whenever possible.
   */
  htmlSimpleAmpersand?: boolean
  /**
   * Leave the HTML inside the editor untouched without doing any special
   * processing to it except HTML cleaning.
   */
  htmlUntouched?: boolean
  /**
   * Set the template to be used for the icons inside the editor UI.
   */
  iconsTemplate?: string
  /**
   * When this option is enabled, the editor's content will be placed in an
   * iframe and isolated from the rest of the page.
   */
  iframe?: boolean
  /**
   * Default style needed by the editor to be used inside the iframe to display
   * content.
   */
  iframeDefaultStyle?: string
  /**
   * Custom style to be used inside the iframe to display content. This style
   * is added over the iframeDefaultStyle style.
   */
  iframeStyle?: string
  /**
   * An array with custom CSS files to inject inside the iframe to display
   * content.
   */
  iframeStyleFiles?: string[]
  /**
   * The number of pixels to use for indenting the current line.
   */
  indentMargin?: number
  /**
   * Only the minimum required events are initialized on page load and the
   * rest of them when the user clicks inside the editable area. This is very
   * useful when using multiple editors on the same page because it reduces the
   * page load time.
   */
  initOnClick?: boolean
  /**
   * Keep format of the selected text when it is deleted.
   */
  keepFormatOnDelete?: boolean
  /**
   * The key received by activating the editor license. The activation key
   * instructions/usage can be found here
   */
  Key?: string
  /**
   * Allows new line to be inserted when ENTER key is hit.
   */
  multiLine?: boolean
  /**
   * The list of allowed CSS attributes to be used for tags on paste.
   */
  pasteAllowedStyleProps?: string[]
  /**
   * Removes images that have local path (file://) on paste. Enabling this
   * option might result in having mixed content on HTTPS websites.
   */
  pasteAllowLocalImages?: boolean
  /**
   * Attributes that are removed when pasting something into the rich text
   * editor.
   */
  pasteDeniedAttrs?: string[]
  /**
   * Tags that are removed together with their content when pasting something
   * into the rich text editor.
   */
  pasteDeniedTags?: string[]
  /**
   * Removes text formatting when pasting content into the rich text editor,
   * but keeps the content's structure.
   */
  pastePlain?: boolean
  /**
   * The placeholder used when the WYSIWYG editor body is empty.
   */
  placeholderText?: string
  /**
   * The plugins that should be enabled in the current editor instance. By
   * default, all plugins are enabled. Available plugins are: align,
   * charCounter, codeBeautifier, codeView, colors, draggable, embedly,
   * emoticons, entities, file, fontAwesome, fontFamily, fontSize, fullscreen,
   * image, imageTUI, imageManager, inlineStyle, inlineClass, lineBreaker,
   * lineHeight, link, lists, paragraphFormat, paragraphStyle, quickInsert,
   * quote, save, table, url, video, wordPaste.
   */
  pluginsEnabled?: string[]
  /**
   * An Object with additional header key/value pairs to send along with
   * requests using the XMLHttpRequest transport.
   */
  requestHeaders?: any
  /**
   * A that indicates whether or not cross-site Access-Control requests should
   * be made using credentials such as cookies, authorization headers or TLS
   * client certificates. For more information refer to
   * XMLHttpRequest.withCredentials.
   */
  requestWithCredentials?: boolean
  /**
   * Make AJAX requests using CORS. For more information refer to Cross-origin
   * resource sharing.
   */
  requestWithCORS?: boolean
  /**
   * Sets the container in which the editor popups are added.
   */
  scrollableContainer?: string
  /**
   * Granular control for enabling or disabling specific shortcuts.
   */
  shortcutsEnabled?: string[]
  /**
   * When enabled, the shortcut is displayed in the button tooltip.
   */
  shortcutsHint?: boolean
  /**
   * Enables browser spellcheck for the text inside the editing box.
   */
  spellcheck?: boolean
  /**
   * The tabIndex to set on the editor element.
   */
  tabIndex?: number
  /**
   * When TAB key is hit, the editor will add the specified number of space.
   * If set to 0 the TAB key allows default navigation through the page.
   */
  tabSpaces?: number
  /**
   * Specify the theme name to use in the editor. The theme should be included
   * as CSS. For more details please read the color themes example.
   */
  theme?: 'gray' | 'dark' | 'royal' | null
  /**
   * Enable or disable positioning the toolbar at the bottom of the editor.
   * This option is not available on mobile devices.
   */
  toolbarBottom?: boolean
  /**
   * The list of buttons that appear in the rich text editor's toolbar on large
   * devices (≥ 1200px).
   */
  toolbarButtons?: any
  /**
   * The list of buttons that appear in the rich text editor's toolbar on medium
   * devices (≥ 992px). By default on MD screens, the editor uses the same
   * buttons as for toolbarButtons.
   */
  toolbarButtonsMD?: any
  /**
   * The list of buttons that appear in the rich text editor's toolbar on small
   * devices (≥ 768px).
   */
  toolbarButtonsSM?: any
  /**
   * The list of buttons that appear in the rich text editor's toolbar on extra
   * small devices (< 768px).
   */
  toolbarButtonsXS?: any
  /**
   * A custom HTML selector placing the toolbar inside.
   */
  toolbarContainer?: boolean | string
  /**
   * Enable or disable inline mode.
   */
  toolbarInline?: boolean
  /**
   * Keeps the toolbar at the top of the editing box in basic mode. Disabling
   * this option, will keep the toolbar at the top of the page when scrolling
   * down.
   */
  toolbarSticky?: boolean
  /**
   * The offset of the sticky toolbar from top of the page. If toolbarBottom
   * option is used, then this option will define the offset of the toolbar
   * from the bottom of the page.
   */
  toolbarStickyOffset?: number
  /**
   * Keeps the editor visible next to the cursor even when there is no
   * selection.
   */
  toolbarVisibleWithoutSelection?: boolean
  /**
   * Control if tooltips are shown when getting with mouse over the buttons
   * from the toolbar.
   */
  tooltips?: boolean
  /**
   * Time in milliseconds to define how long the typing pause may be without
   * the change to be saved in the undo stack. The minimum value that can be
   * set is 500.
   */
  typingTimer?: number
  /**
   * When this options is disabled the edited content will have the external
   * CSS properties converted to inline style.
   * Note: For this option to work correctly, it is necessary to load the CSS
   * files from the same domain the editor is running on.
   */
  useClasses?: boolean
  /**
   * Sets the width of the editing box.
   */
  width?: string
  /**
   * The zIndex to set on the editor toolbars and popups.
   */
  zIndex?: number

  // Help
  // ==========================================================================
  /**
   * An object of items to show in the help modal.
   */
  helpSets?: any[]

  // Image
  // ==========================================================================
  /**
   * The list of image types that are allowed to be uploaded. Although this
   * will restrict uploading other types of files, we strongly recommend you
   * to check the file type on the server too.
   */
  imageAllowedTypes?: string[]
  /**
   * The list of buttons that appear in the edit image alternate text popup,
   * when changing the alternate text of the image.
   */
  imageAltButtons?: string[]
  /**
   * Proxy server to be used for reading images inserted by URL and upload them
   * to a custom server. By default we provide a proxy hosted on our servers,
   * however for full control, we recommend setting up your own proxy by using
   * the details from CORS Anywhere.
   */
  imageCORSProxy?: string
  /**
   * Sets the default image alignment when it is inserted in the rich text
   * editor. Possible values are 'left', 'center' and 'right'.
   */
  imageDefaultAlign?: string
  /**
   * Sets the default display for an image when is is inserted in the rich
   * text. Possible options are: 'inline' and 'block'.
   */
  imageDefaultDisplay?: string
  /**
   * Sets the default margin for the image when it is inserted in the rich text
   * editor. Setting it to 0 will not set any margin.
   */
  imageDefaultMargin?: number
  /**
   * Sets the default width of the image when it is inserted in the rich text
   * editor. Setting it to 0 will not set any width.
   */
  imageDefaultWidth?: number
  /**
   * The list of buttons that appear in the edit image popup, when an image is
   * selected. If Image Aviary plugin is included, then 'aviary' can be used
   * as an option as well.
   */
  imageEditButtons?: string[]
  /**
   * The list of buttons that appear in the insert image popup, when inserting
   * a new image into the WYSIWYG editor.
   */
  imageInsertButtons?: string[]
  /**
   * The maximum image size allowed on upload in bytes. The default value is
   * 10MB. Although this makes an additional check before uploading the image,
   * it is highly recommended to check image size on your server too.
   */
  imageMaxSize?: number
  /**
   * The minimum width in PX the image can be resized to.
   */
  imageMinWidth?: number
  /**
   * Allows changing the position of the images by dragging them. This option
   * will work correctly only when including the draggable plugin.
   */
  imageMove?: boolean
  /**
   * Allows multiple image styles to be selected at a time.
   */
  imageMultipleStyles?: boolean
  /**
   * Allows pasting images from clipboard.
   */
  imagePaste?: boolean
  /**
   * Use default image settings for pasted images.
   */
  imagePasteProcess?: any
  /**
   * Disables image resize when set to false.
   */
  imageResize?: boolean
  /**
   * By default the image resize is using PX. Enabling this option will use %
   * instead when resizing an image inside the editor.
   */
  imageResizeWithPercent?: boolean
  /**
   * Force image percent to round to integer while resizing.
   */
  imageRoundPercent?: boolean
  /**
   * When this option is enabled, the images will get the width and height set
   * as attribute in the output.
   */
  imageOutputSize?: boolean
  /**
   * The list of buttons that appear in the edit image size popup, when editing
   * the image's width and height.
   */
  imageSizeButtons?: string[]
  /**
   * Enables splitting the HTML when inserting a new image.
   */
  imageSplitHTML?: boolean
  /**
   * Set custom styles for the selected image. The classes should be defined in
   * CSS, otherwise no changes will be visible on the image's appearance.
   */
  imageStyles?: any
  /**
   * Set options for TUI editor plugin.
   */
  imageTUIOptions?: any
  /**
   * Allows text near an image when it is aligned to the left or to the right.
   * Disabling this option will make the display button for image editor popup
   * unavailable.
   */
  imageTextNear?: boolean
  /**
   * Enable or disable image upload.
   */
  imageUpload?: boolean
  /**
   * Add new line after inserting an image when enabled.
   */
  imageAddNewLine?: boolean
  /**
   * The HTTP image upload request type.
   */
  imageUploadMethod?: string
  /**
   * Customize the name of the parameter that contains the image file in the upload request.
   */
  imageUploadParam?: string
  /**
   * Pass additional parameters to the upload request.
   */
  imageUploadParams?: any
  /**
   * Upload images inserted by URL to custom server instead of linking them by
   * URL.
   */
  imageUploadRemoteUrls?: boolean
  /**
   * Set the options for image upload to S3. All the fields from the example
   * below are required. Also make sure that you have enabled CORS on Amazon.
   */
  imageUploadToS3?: any
  /**
   * The URL where the images uploaded by the user are saved. When an image is
   * uploaded, the editor sends the file to the server through a HTTP request.
   * The server should process the data from the file parameter of the request
   * and return a JSON object containing a link field with the link to the
   * uploaded image. More details can be found in the Image Upload concept
   * article.
   */
  imageUploadURL?: string

  // Image Manager
  // ==========================================================================
  /**
   * The HTTP image manager delete image request type.
   */
  imageManagerDeleteMethod?: string
  /**
   * Additional parameters passed to the image manager image delete request.
   */
  imageManagerDeleteParams?: any
  /**
   * The URL where the HTTP request is done to delete the image. The request
   * will contain the image source as src parameter.
   */
  imageManagerDeleteURL?: string
  /**
   * The HTTP image manager load images request type.
   */
  imageManagerLoadMethod?: string
  /**
   * Additional parameters passed to the load images request from the image
   * manager.
   */
  imageManagerLoadParams?: any
  /**
   * The URL where the HTTP request is done in order to load a page of images
   * that appear in the image manager. The response should be an array with an
   * Object for each image, similar to:
   *
   * [
   *   {
   *     url: 'http://exmaple.com/images/photo1.jpg',
   *     thumb: "http://exmaple.com/thumbs/photo1.jpg",
   *     tag: 'flower'
   *   },
   *   {
   *     url: 'http://exmaple.com/images/photo2.jpg',
   *     thumb: "http://exmaple.com/thumbs/photo2.jpg",
   *     tag: 'sport'
   *   }
   * ]
   */
  imageManagerLoadURL?: string
  /**
   * The number of images loaded per page in the image manager.
   */
  imageManagerPageSize?: number
  /**
   * The path to a gif image to be displayed while loading the images from the
   * server in the image manager. If no option is specified, "Loading.." text
   * will appear.
   */
  imageManagerPreloader?: string
  /**
   * The distance in pixels from the bottom of the scrollable content at which
   * to trigger the loading of the next page of images.
   */
  imageManagerScrollOffset?: number
  /**
   * To enable/disable toggle of filter tags for image manager popup.
   */
  imageManagerToggleTags?: boolean

  // Inline Style
  // ==========================================================================
  /**
   * Set custom styles for the selected text. This option is an Object where
   * the key is the name of the new style that appears in the dropdown and the
   * value specifies the CSS properties for it.
   */
  inlineStyles?: any

  // Inline Class
  // ==========================================================================
  /**
   * Set custom classes for the selected text. This option is an Object where
   * the key is the name of the new class that appears in the dropdown and the
   * value specifies the class name for it.
   */
  inlineClasses?: any

  // Language
  // ==========================================================================
  /**
   * Select the language to be used in the rich text editor's interface. The
   * corresponding language file is required: /langs/es.js.
   */
  language?: string

  // Line Breaker
  // ==========================================================================
  /**
   * The distance in pixels from the left or right of an element at which to
   * show the line-breaker.
   */
  lineBreakerHorizontalOffset?: number
  /**
   * The distance in pixels from the top or bottom of an element at which to
   * show the line-breaker.
   */
  lineBreakerOffset?: number
  /**
   * The list of HTML tags between which the line-breaker should appear.
   */
  lineBreakerTags?: string[]

  // Link
  // ==========================================================================
  /**
   * When enabled, all links open in a new tab and no option to set this action
   * would be presented in the UI.
   */
  linkAlwaysBlank?: boolean
  /**
   * Specifies if the rel="nofollow" attribute should be added on all links.
   */
  linkAlwaysNoFollow?: boolean
  /**
   * An object with additional attributes that could be customized for a link.
   */
  linkAttributes?: any
  /**
   * Sets the default URL prefix.
   */
  linkAutoPrefix?: string
  /**
   * Email addresses inserted as link are converted to mailto: links.
   */
  linkConvertEmailAddress?: boolean
  /**
   * The list of buttons that appear in the edit link popup, when clicking on
   * an existing link from the editor.
   */
  linkEditButtons?: string[]
  /**
   * The list of buttons that appear in the insert link popup, when inserting a
   * new link into the WYSIWYG editor.
   */
  linkInsertButtons?: string[]
  /**
   * Set a predefined list of links to select from when inserting or editing a
   * link.
   */
  linkList?: any[]
  /**
   * Allows multiple link styles to be selected at a time.
   */
  linkMultipleStyles?: boolean
  /**
   * Disables adding the noopener attribute when link is set to open in a new
   * tab.
   */
  linkNoOpener?: boolean
  /**
   * Disables adding the noreferrer attribute when link is set to open in a new
   * tab.
   */
  linkNoReferrer?: boolean
  /**
   * Set custom styles for the selected link. The classes should be defined in
   * CSS, otherwise no changes will be visible on the link's appearance.
   */
  linkStyles?: any
  /**
   * This option allows to edit the link text inside the edit link popup.
   */
  linkText?: boolean

  // Paragraph Format
  // ==========================================================================
  /**
   * The default option to select for Paragraph Format.
   */
  paragraphDefaultSelection?: string
  /**
   * An Object with the options that will appear in the Paragraph Format
   * dropdown from the toolbar. Where 'N' tag will be treated as a <p> when the
   * enter option is set to FroalaEditor.ENTER_P and as a <div> when the enter
   * option is set to FroalaEditor.ENTER_DIV.
   */
  paragraphFormat?: any
  /**
   * The Paragraph Format button from the WYSIWYG editor's toolbar is replaced
   * with a dropdown showing the actual paragraph format name for the current
   * text selection.
   */
  paragraphFormatSelection?: boolean
  /**
   * Allows multiple paragraph styles to be selected at a time.
   */
  paragraphMultipleStyles?: boolean
  /**
   * Set custom styles for the selected paragraph. The classes should be
   * defined in CSS, otherwise no changes will be visible on the paragraph's
   * appearance.
   */
  paragraphStyles?: any
  /**
   * Set the line height for the current selected paragraph.
   */
  lineHeights?: any

  // Lists
  // ==========================================================================
  /**
   * Enables list advanced types for the bullets.
   */
  listAdvancedTypes?: boolean

  // Quick Insert
  // ==========================================================================
  /**
   * The buttons to display in quick insert.
   */
  quickInsertButtons?: string[]
  /**
   * To enable quick insert functionality.
   */
  quickInsertEnabled?: boolean
  /**
   * The list of tags for which the quick insert button will appear when empty.
   */
  quickInsertTags?: string[]

  // Font Awesome
  // ==========================================================================
  /**
   * The list of Font Awesome buttons to show in the popup for inserting icons.
   */
  faButtons?: string[]
  /**
   * The list of Font Awesome icons to show in the modal for inserting icons.
   */
  fontAwesomeSets?: any
  /**
   * Set the template to be used for the Font Awesome icons inserted in the
   * editor.
   */
  fontAwesomeTemplate?: string

  // Special Characters
  // ==========================================================================
  /**
   * The list of special characters buttons for popup.
   */
  specialCharButtons?: string[]
  /**
   * The list of special characters to show.
   */
  specialCharactersSets?: any

  // WebSpellChecker
  // ==========================================================================
  /**
   * The options used for WebSpellChecker.
   */
  events?: any

  // Codox Wave
  // ==========================================================================
  /**
   * Set options for codox plugin.
   */
  codoxOptions?: any
  /**
   * The static string value froala
   */
  app?: string
  /**
   * A unique identifier for the document. In a content management service,
   * this could for example be the resource identifier for the document.
   */
  docId?: string
  /**
   * The name of the user joining the co-editing session. For a content
   * management service, this should be set for each logged-in user based on
   * their credentials. This name will be displayed during real-time co-editing
   * sessions.
   */
  username?: string
  /**
   * The API key for Froala's Codox integration. You can obtain a key from your
   * Wave account. Froala Editor activation instructions can be found here.
   */
  apiKey?: string
  /**
   * A reference to a Froala editor instance, in which the co-editing session
   * should be bootstrapped.
   */
  editor?: any
  /**
   * Set to true, if co-editing session should start automatically on
   * init(config). Set to false to initialize but delay start the co-editing
   * (see the start() client API). Default setting is true.
   */
  autoStart?: boolean

  // Save
  // ==========================================================================
  /**
   * Time in milliseconds that defines when the autosave should be triggered.
   * Setting a higher interval helps preventing request overload on the server.
   * The autosave will be triggered only if the content was changed from the
   * last interval. Setting the value to 0 will disable autosave.
   */
  saveInterval?: number
  /**
   * The HTTP save request type.
   */
  saveMethod?: string
  /**
   * The name of the parameter which contains the rich text editor's content on
   * the save request.
   */
  saveParam?: string
  /**
   * Additional parameters passed to the save request.
   */
  saveParams?: any
  /**
   * The URL where the save request is being made. The editor will initialize
   * a HTTP request to the specified URL passing the editor's content in the
   * body parameter of the HTTP request.
   */
  saveURL?: string

  // Table
  // ==========================================================================
  /**
   * Allows multiple table cell styles to be selected at a time.
   */
  tableCellMultipleStyles?: boolean
  /**
   * Set custom styles for the selected table cells. The classes should be
   * defined in CSS, otherwise no changes will be visible.
   */
  tableCellStyles?: any
  /**
   * The list of colors used in the edit table colors popup for the background
   * of a table cell. Passing REMOVE as a value in the array will display the
   * Clear Formatting button for the cell background color.
   */
  tableColors?: string[]
  /**
   * The list of buttons that appear in the edit table colors popup.
   */
  tableColorsButtons?: string[]
  /**
   * The number of colors displayed on a line in the edit table colors popup.
   */
  tableColorsStep?: number
  /**
   * The size of the table when it is inserted in the editor.
   */
  tableDefaultWidth?: string
  /**
   * The list of buttons that appear in the edit table popup, when one or many
   * cells are selected.
   */
  tableEditButtons?: string[]
  /**
   * The list of buttons that appear in the insert table popup, when the
   * toolbarInline option is set to true
   */
  tableInsertButtons?: string[]
  /**
   * Insert rows and columns easier by going to the edge of the table.
   */
  tableInsertHelper?: boolean
  /**
   * The offset for showing the table insert helper.
   */
  tableInsertHelperOffset?: number
  /**
   * The maximum number of lines and columns when inserting a table into the
   * rich text editor.
   */
  tableInsertMaxSize?: number
  /**
   * Allows multiple table styles to be selected at a time.
   */
  tableMultipleStyles?: boolean
  /**
   * Enables resizing table cells.
   */
  tableResizer?: boolean
  /**
   * The distance in pixels from the table cell's left or right border at which
   * to show the resizer.
   */
  tableResizerOffset?: number
  /**
   * The minimum width in pixels of a table cell allowed while resizing. The
   * resizer cannot be dragged over this limit.
   */
  tableResizingLimit?: number
  /**
   * Set custom styles for the selected table. The classes should be defined in
   * CSS, otherwise no changes will be visible on the table's appearance.
   */
  tableStyles?: any

  // Track Changes
  // ==========================================================================
  /**
   * If set to true, track changes will be active by default.
   */
  showChangesEnabled?: boolean
  /**
   * If set to true, show changes feature will be active by default.
   */
  trackChangesEnabled?: boolean

  // Video
  // ==========================================================================
  /**
   * The list of video providers allowed to be inserted as URL.
   */
  videoAllowedProviders?: string[]
  /**
   * The list of video types that are allowed to be uploaded. Although this
   * will restrict uploading other types of files, we strongly recommend you to
   * check the file type on the server too.
   */
  videoAllowedTypes?: string[]
  /**
   * Sets the default video alignment when it is inserted into the WYSIWYG
   * editor. Possible values are left, center and right.
   */
  videoDefaultAlign?: string
  /**
   * Sets the default display for videos when they are inserted into the
   * WYSIWYG editor. Possible options are: "inline" and "block".
   */
  videoDefaultDisplay?: string
  /**
   * Sets the default width of the video when it is inserted in the rich text
   * editor. Setting it to 0 will not set any width.
   */
  videoDefaultWidth?: number
  /**
   * The buttons that appear in the edit video popup, when a video is selected.
   */
  videoEditButtons?: string[]
  /**
   * The buttons that appear in the insert video popup, when a video is
   * inserted into the WYSIWYG editor.
   */
  videoInsertButtons?: string[]
  /**
   * The maximum video size allowed on upload in bytes. The default value is
   * 30MB. Although this makes an additional check before uploading the video,
   * it is highly recommended to check image size on your server too.
   */
  videoMaxSize?: number
  /**
   * Allows changing the position of the videos by dragging them.
   */
  videoMove?: boolean
  /**
   * Enable or disable resizing the videos inside the editor.
   */
  videoResize?: boolean
  /**
   * Enable or disable inserting responsive videos in the Froala Editor.
   */
  videoResponsive?: boolean
  /**
   * The buttons that appear in the edit video size popup, when changing the
   * size of a selected video.
   */
  videoSizeButtons?: string[]
  /**
   * Enables splitting the HTML when inserting a new view.
   */
  videoSplitHTML?: boolean
  /**
   * Allows text near a video when it is aligned to the left or to the right.
   * Disabling this option will make the display button for image editor popup
   * unavailable.
   */
  videoTextNear?: boolean
  /**
   * Enable or disable video upload.
   */
  videoUpload?: boolean
  /**
   * The HTTP video upload request type.
   */
  videoUploadMethod?: string
  /**
   * Customize the name of the parameter that contains the video file in the
   * upload request.
   */
  videoUploadParam?: string
  /**
   * Pass additional parameters to the upload request.
   */
  videoUploadParams?: any
  /**
   * Set the options for video upload to S3. All the fields from the example
   * below are required. Also make sure that you have enabled CORS on Amazon.
   */
  videoUploadToS3?: any
  /**
   * The URL where the videos uploaded by the user are saved. When a video is
   * uploaded, the editor sends the file to the server through a HTTP request.
   * The server should process the data from the file parameter of the request
   * and return a JSON object containing a link field with the link to the
   * uploaded video.
   */
  videoUploadURL?: string

  // Word
  // ==========================================================================
  /**
   * The list of allowed CSS attributes to be used for tags when pasting from
   * Word.
   */
  wordAllowedStyleProps?: string[]
  /**
   * Attributes that are removed when pasting something into the rich text
   * editor from Word.
   */
  wordDeniedAttrs?: any[]
  /**
   * Tags that are removed together with their content when pasting something
   * into the rich text editor from Word.
   */
  wordDeniedTags?: any[]
  /**
   * Show modal to choose if to keep or not styles pasted from Word. If set to
   * false, the default action is to keep the formatting.
   */
  wordPasteModal?: boolean
  /**
   * Choose the default action when wordPasteModal option is enabled.
   */
  wordPasteKeepFormatting?: boolean

  // File Manager
  // ==========================================================================
  /**
   * The list of file types that are allowed to be uploaded. Although this will
   * restrict uploading other types of files, we strongly recommend you to
   * check the file type on the server too.
   */
  filesManagerAllowedTypes?: string[]
  /**
   * The maximum file size allowed on upload in bytes. The default value is
   * 10MB. Although this makes an additional check before uploading the file,
   * it is highly recommended to check file size on your server too.
   */
  filesManagerMaxSize?: number
  /**
   * Pass additional parameters to the file upload request.
   */
  filesManagerUploadParams?: any
  /**
   * Set the options for file upload to S3. All the fields from the example
   * below are required. Also make sure that you have enabled CORS on Amazon.
   */
  filesManagerUploadToS3?: any
  /**
   * The URL where the files uploaded by the user are saved. When a file is
   * uploaded, the editor sends the file to the server through a HTTP request.
   * The server should process the data from the file parameter of the request
   * and return a JSON object containing a link field with the link to the
   * uploaded file.
   */
  filesManagerUploadURL?: string
}

export interface FroalaEditorProps {
  config?: FroalaConfig
  tag?: string
  getEditor?: (editor: Froala) => void
  children?: string
  defineIcon?: (Editor: Froala) => void
  registerCommand?: (Editor: Froala) => void
}

export default function FroalaEditor(props: FroalaEditorProps) {
  const id = `froala__editor__${Math.round(Math.random() * 1000)}`

  useEffect(() => {
    if (props?.config?.theme) {
      // eslint-disable-next-line
      // @ts-ignore
      import(`froala-editor/css/themes/${props?.config?.theme}.min.css`)
    }

    if (props?.defineIcon && typeof props?.defineIcon === 'function') {
      props?.defineIcon?.(Froala)
    }

    if (props?.registerCommand && typeof props?.registerCommand === 'function') {
      props?.registerCommand?.(Froala)
    }

    const editor = new Froala(`#${id}`, props?.config || {})
    props?.getEditor?.(editor)
  }, [])

  return (
    <textarea id={id}>{`${props?.children || ''}`}</textarea>
  )
}
