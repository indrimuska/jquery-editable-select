# jquery-editable-select

jQuery Editable Select is a jQuery plugin that transforms a select into an input field where single elements are shown in real-time according to the entered characters.
It scales down to a real select list when javascript is not available.

# Demo

See demos [here](http://htmlpreview.github.com/?https://github.com/indrimuska/jquery-editable-select/blob/master/example/index.html).

# Example

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

## Markup

### Default text

The default text showed right after the initialization.

```html
<select id="editable-select">
	<option>Alfa Romeo</option>
	<option selected>Audi</option>
	<option>BMW</option>
</select>
```

### HTML support

All HTML tags will be shown after the rendering of the list.

```html
<select id="editable-select">
	<option>Alfa Romeo - &lt;small&gt;&lt;a href="http://www.alfaromeo.com/" target="_blank" rel="nofollow"&gt;www.alfaromeo.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Audi - &lt;small&gt;&lt;a href="http://www.audi.com/" target="_blank" rel="nofollow"&gt;www.audi.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>BMW - &lt;small&gt;&lt;a href="http://www.bmw.com/" target="_blank" rel="nofollow"&gt;www.bmw.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Citroen - &lt;small&gt;&lt;a href="http://www.citroen.com/" target="_blank" rel="nofollow"&gt;www.citroen.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Fiat - &lt;small&gt;&lt;a href="http://www.fiat.com/" target="_blank" rel="nofollow"&gt;www.fiat.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Ford - &lt;small&gt;&lt;a href="http://www.ford.com/" target="_blank" rel="nofollow"&gt;www.ford.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Jaguar - &lt;small&gt;&lt;a href="http://www.jaguar.com/" target="_blank" rel="nofollow"&gt;www.jaguar.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Jeep - &lt;small&gt;&lt;a href="http://www.jeep.com/" target="_blank" rel="nofollow"&gt;www.jeep.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Lancia - &lt;small&gt;&lt;a href="http://www.lancia.com/" target="_blank" rel="nofollow"&gt;www.lancia.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Land Rover - &lt;small&gt;&lt;a href="http://www.landrover.com/" target="_blank" rel="nofollow"&gt;www.landrover.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Mercedes - &lt;small&gt;&lt;a href="http://www.mercedes-benz.com/" target="_blank" rel="nofollow"&gt;www.mercedes-benz.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Mini - &lt;small&gt;&lt;a href="http://www.mini.com/" target="_blank" rel="nofollow"&gt;www.mini.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Nissan - &lt;small&gt;&lt;a href="http://www.nissan.it/" target="_blank" rel="nofollow"&gt;www.nissan.it&lt;/a&gt;&lt;/small&gt;</option>
	<option>Opel - &lt;small&gt;&lt;a href="http://www.opel.com/" target="_blank" rel="nofollow"&gt;www.opel.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Peugeot - &lt;small&gt;&lt;a href="http://www.peugeot.com/" target="_blank" rel="nofollow"&gt;www.peugeot.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Porsche - &lt;small&gt;&lt;a href="http://www.porsche.com/" target="_blank" rel="nofollow"&gt;www.porsche.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Renault - &lt;small&gt;&lt;a href="http://www.renault.com/" target="_blank" rel="nofollow"&gt;www.renault.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Smart - &lt;small&gt;&lt;a href="http://www.smart.com/" target="_blank" rel="nofollow"&gt;www.smart.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Volkswagen - &lt;small&gt;&lt;a href="http://volkswagen.com/" target="_blank" rel="nofollow"&gt;volkswagen.com&lt;/a&gt;&lt;/small&gt;</option>
	<option>Volvo - &lt;small&gt;&lt;a href="http://www.volvo.com/" target="_blank" rel="nofollow"&gt;www.volvo.com&lt;/a&gt;&lt;/small&gt;</option>
</select>
```

### Scroll support

If the height of the list rises above 160px, a scrollbar is displayed.

You can change the max-height of the list box by css:

```css
.es-list { max-height: 160px !important; }
```

## Options

### effects

String.  Default: 'default'

A string indicating which effect to use for the transition.

* default
* slide
* fade

```javascript
$('#editable-select').editableSelect({ effects: 'slide' });
```

### duration

Integer or string.  Default: 'fast'

A string or number determining how long the animation will run.

* fast
* slow
* [0-9]+

```javascript
$('#editable-select').editableSelect({ duration: 200 });
```

## Events

### onCreate

Fired when the input is intializated.

```javascript
$('#editable-select').editableSelect({
	onCreate: function () {
		alert("Initialized!");
	}
});
```

### onShow

Fired when the list is shown.

```javascript
$('#editable-select').editableSelect({
	onShow: function () {
		alert("Visible!");
	}
});
```

### onHide

Fired when the list is hidden.

```javascript
$('#editable-select').editableSelect({
	onHide: function () {
		alert("Hidden!");
	}
});
```

### onSelect

Fired when an option of the list is selected.

```javascript
$('#editable-select').editableSelect({
	onSelect: function (element) {
		alert("Selected!");
	}
});
```

## Keyboard support

The jQuery Editable Select includes some keyboard navigation:

### up, down arrow keys

You can navigate through list with keyboard arrows.

### enter

When the list is visible, enter will select one option and replace the input with that text.

When the list is not visible, enter will have normal behaviour (submitting the current form, etc...)

### tab

The tab key hides the list.

### escape

The escape key hides the list.
