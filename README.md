# jquery-editable-select

Transforms a select into an input field where single elements are shown in real-time according to the entered characters.
It scales down to a real select list when javascript is not available.

# Demo

See demos [here](http://htmlpreview.github.com/?https://raw.github.com/indrimuska/jquery-editable-select/master/example/index.html).

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
	onSelect: function () {
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
