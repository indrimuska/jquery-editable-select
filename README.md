# jQuery Editable Select

[![NPM version](http://img.shields.io/npm/v/jquery-editable-select.svg?style=flat)](https://npmjs.org/package/jquery-editable-select)
[![NPM downloads](http://img.shields.io/npm/dm/jquery-editable-select.svg?style=flat)](https://npmjs.org/package/jquery-editable-select)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

jQuery Editable Select is a jQuery plugin that transforms a select into an input field where single elements are shown in real-time according to the entered characters.
It scales down to a real select list when javascript is not available.

<p align="center">
    <a href="http://indrimuska.github.io/jquery-editable-select/">
        <img src="http://indrimuska.github.io/jquery-editable-select/img/jquery-editable-select.gif" alt="jQuery Editable Select demo">
    </a>
</p>

# Demo

See demos here: http://indrimuska.github.io/jquery-editable-select/

# Installation

Get jQuery Editable Select from [**npm**](https://www.npmjs.com/), [**bower**](http://bower.io/) or [**git**](https://git-scm.com/):

```
  npm install jquery-editable-select
bower install jquery-editable-select
  git clone   https://github.com/indrimuska/jquery-editable-select.git
```

Include style and script in your page:

```html
<script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="//rawgithub.com/indrimuska/jquery-editable-select/master/dist/jquery-editable-select.min.js"></script>
<link href="//rawgithub.com/indrimuska/jquery-editable-select/master/dist/jquery-editable-select.min.css" rel="stylesheet">
```

# Markup

## Basic usage

```html
<select id="editable-select">
	<option>Alfa Romeo</option>
	<option>Audi</option>
	<option>BMW</option>
	<option>Citroen</option>
	<option>Fiat</option>
	<option>Ford</option>
	<option>Jaguar</option>
	<option>Jeep</option>
	<option>Lancia</option>
	<option>Land Rover</option>
	<option>Mercedes</option>
	<option>Mini</option>
	<option>Nissan</option>
	<option>Opel</option>
	<option>Peugeot</option>
	<option>Porsche</option>
	<option>Renault</option>
	<option>Smart</option>
	<option>Volkswagen</option>
	<option>Volvo</option>
</select>
```
```javascript
$('#editable-select').editableSelect();
```

## Default text

The default text showed right after the initialization.

```html
<select id="editable-select">
	<option>Alfa Romeo</option>
	<option selected>Audi</option>
	<option>BMW</option>
</select>
```

## HTML support

All HTML tags in each `<option>` element will be rendered after initialization.

```html
<select id="editable-select">
	<option>Alfa Romeo - &lt;small&gt;&lt;a href="http://www.alfaromeo.com/"&gt;www.alfaromeo.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Audi - &lt;small&gt;&lt;a href="http://www.audi.com/"&gt;www.audi.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>BMW - &lt;small&gt;&lt;a href="http://www.bmw.com/"&gt;www.bmw.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Citroen - &lt;small&gt;&lt;a href="http://www.citroen.com/"&gt;www.citroen.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Fiat - &lt;small&gt;&lt;a href="http://www.fiat.com/"&gt;www.fiat.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Ford - &lt;small&gt;&lt;a href="http://www.ford.com/"&gt;www.ford.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Jaguar - &lt;small&gt;&lt;a href="http://www.jaguar.com/"&gt;www.jaguar.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Jeep - &lt;small&gt;&lt;a href="http://www.jeep.com/"&gt;www.jeep.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Lancia - &lt;small&gt;&lt;a href="http://www.lancia.com/"&gt;www.lancia.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Land Rover - &lt;small&gt;&lt;a href="http://www.landrover.com/"&gt;www.landrover.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Mercedes - &lt;small&gt;&lt;a href="http://www.mercedes-benz.com/"&gt;www.mercedes-benz.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Mini - &lt;small&gt;&lt;a href="http://www.mini.com/"&gt;www.mini.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Nissan - &lt;small&gt;&lt;a href="http://www.nissan-global.com/"&gt;http://www.nissan-global.com/&lt;/a&gt;&lt;/small&gt;</option>
	<option>Opel - &lt;small&gt;&lt;a href="http://www.opel.com/&gt;www.opel.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Peugeot - &lt;small&gt;&lt;a href="http://www.peugeot.com/"&gt;www.peugeot.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Porsche - &lt;small&gt;&lt;a href="http://www.porsche.com/"&gt;www.porsche.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Renault - &lt;small&gt;&lt;a href="http://www.renault.com/"&gt;www.renault.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Smart - &lt;small&gt;&lt;a href="http://www.smart.com/"&gt;www.smart.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Volkswagen - &lt;small&gt;&lt;a href="http://volkswagen.com/"&gt;volkswagen.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Volvo - &lt;small&gt;&lt;a href="http://www.volvo.com/"&gt;www.volvo.com&lt;/a&gt;&lt;/small&gt;</option>
</select>
```

### Scroll support

If the height of the list rises above 160px, a scrollbar is displayed.

You can change the max-height of the list box by overriding this css rule:

```css
.es-list { max-height: 160px !important; }
```

## Options

Property | Type | Default | Description
---|:---:|:---:|---
filter | Boolean | `true` | Filter (or not) items in list while typing.
effects | Enum: `"default"`, `"slide"`, `"fade"` | `"default"` | Easing used for showing and hiding the dropdown list.
duration | Integer or Enum: `"fast"`, `"slow"` | `"fast"` | Duration of the easings (in milliseconds).
appendTo | String or jQuery element | `select.parent()` | Where to append the dropdown list in the DOM.

```javascript
$('#editable-select').editableSelect({
	effects: 'slide',
	duration: 200,
	appendTo: 'body'
});
```

## Events

Event | Parameters | Description
---|:---:|---
onCreate | | Fired after input initialization.
onShow | | Fired when the list is shown.
onHide | | Fired when the list is hidden.
onSelect | `element` | Fired when an option of the list is selected.

```javascript
$('#editable-select').editableSelect({
	onSelect: function (element) {
		alert("Selected!");
	}
});
```

## Keyboard support

jQuery Editable Select includes support for keyboard navigation:

-	<kbd>up</kbd>, <kbd>down</kbd> arrow keys<br>
	You can navigate through list with keyboard arrows.

-	<kbd>Enter</kbd><br>
	When the list is visible, by pressing <kbd>Enter</kbd> button you'll select the highlighted option and replace the input field value with the option label.<br>
	When the list is not visible, <kbd>Enter</kbd> will have a normal behavior (submitting the form, etc...)

-	<kbd>Tab</kbd><br>
	If the dropdown list is visible, it closes the dropdown, otherwise it will be opened.

-	<kbd>Escape</kbd><br>
	Hides the list.

# License

Copyright (c) 2015 Indri Muska. Licensed under the MIT license.