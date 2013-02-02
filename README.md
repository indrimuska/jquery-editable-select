# jquery-editable-select

Trasform a select into an editable select replacing it by an input text.

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

## Options

### effects

String.  Default: 'default'

the effect displayed when the list appears or disappears.

* default
* slide
* fade

```javascript
$('#editable-select').editableSelect({ effects: 'slide' });
```

### duration

Integer or string.  Default: 'fast'

The duration of the appearance and disappearance of the list.

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

The datepicker includes some keyboard navigation:

### up, down arrow keys

You can navigate through list with keyboard arrows.

### enter

When the list is visible, enter will select one option and replace the input with that value.
When the list is not visible, enter will have normal effects -- submitting the current form, etc.

### escape

The escape key hides the list.

### tab

The tab key hides the list.
