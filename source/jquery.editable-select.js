/**
 * jQuery Editable Select
 * by Indri Muska <indrimuska@gmail.com>
 *
 * Source on GitHub @ https://github.com/indrimuska/jquery-editable-select
 *
 * File: jquery.editable-select.js
 */

(function ($) {
	$.extend($.expr[':'], {
		nic: function (elem, i, match, array) {
			return !((elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0);
		}
	});
	$.fn.editableSelect = function (options) {
		var defaults = { filter: true, effect: 'default', duration: 'fast', onCreate: null, onShow: null, onHide: null, onSelect: null };
		var select = this.clone(), input = $('<input type="text">'), list = $('<ul class="es-list">');
		options = $.extend({}, defaults, options);
		switch (options.effects) {
			case 'default': case 'fade': case 'slide': break;
			default: options.effects = 'default';
		}
		if (isNaN(options.duration) || options.duration != 'fast' || options.duration != 'slow') options.duration = 'fast';
		this.replaceWith(input);
		var EditableSelect = {
			init: function () {
				var es = this;
				es.copyAttributes(select, input);
				input.addClass('es-input');
				$(document.body).append(list);
				select.find('option').each(function () {
					var li = $('<li>'), option = $(this);
					li.data('value', option.val());
					li.html(option.text());
					es.copyAttributes(this, li);
					list.append(li);
					if ($(this).attr('selected')) input.val(option.text());
				});
				input.on('focus input click', es.show);
				$(document).on('click', function (event) {
					if (!$(event.target).is(input) && !$(event.target).is(list)) es.hide();
				});
				es.initializeList();
				es.initializeEvents();
				if (options.onCreate) options.onCreate.call(this, input);
			},
			initializeList: function () {
				var es = this;
				list.find('li').each(function () {
					$(this).on('mousemove', function () {
						list.find('.selected').removeClass('selected');
						$(this).addClass('selected');
					});
					$(this).on('click', function () { es.setField.call(this, es); });
				});
				list.mouseenter(function () {
					list.find('li.selected').removeClass('selected');
				});
			},
			initializeEvents: function () {
				var es = this;
				input.bind('input keydown', function (event) {
					switch (event.keyCode) {
						case 40: // Down
							es.show();
							var visibles = list.find('li:visible'), selected = visibles.filter('li.selected');
							list.find('.selected').removeClass('selected');
							selected = visibles.eq(selected.size() > 0 ? visibles.index(selected) + 1 : 0);
							selected = (selected.size() > 0 ? selected : list.find('li:visible:first')).addClass('selected');
							es.scroll(selected, true);
							break;
						case 38: // Up
							es.show();
							var visibles = list.find('li:visible'), selected = visibles.filter('li.selected');
							list.find('li.selected').removeClass('selected');
							selected = visibles.eq(selected.size() > 0 ? visibles.index(selected) - 1 : -1);
							(selected.size() > 0 ? selected : list.find('li:visible:last')).addClass('selected');
							es.scroll(selected, false);
							break;
						case 13: // Enter
							if (list.is(':visible')) {
								es.setField.call(list.find('li.selected'), es);
								event.preventDefault();
							}
						case 9:  // Tab
						case 27: // Esc
							es.hide();
							break;
						default:
							es.show();
							break;
					}
				});
			},
			show: function () {
				list.find('li').show();
				list.css({ top: input.offset().top + input.outerHeight() - 1, left: input.offset().left, width: input.innerWidth() });
				var hidden = options.filter ? list.find('li:nic(' + input.val() + ')').hide().size() : 0;
				if (hidden == list.find('li').size()) list.hide();
				else
					switch (options.effects) {
						case 'fade':   list.fadeIn(options.duration); break;
						case 'slide':  list.slideDown(options.duration); break;
						default:       list.show(options.duration); break;
					}
				if (options.onShow) options.onShow.call(this, input);
			},
			hide: function () {
				switch (options.effects) {
					case 'fade':   list.fadeOut(options.duration); break;
					case 'slide':  list.slideUp(options.duration); break;
					default:       list.hide(options.duration); break;
				}
				if (options.onHide) options.onHide.call(this, input);
			},
			scroll: function (selected, up) {
				var height = 0, index = list.find('li:visible').index(selected);
				list.find('li:visible').each(function (i, element) { if (i < index) height += $(element).outerHeight(); });
				if (height + selected.outerHeight() >= list.scrollTop() + list.outerHeight() || height <= list.scrollTop()) {
					if (up) list.scrollTop(height + selected.outerHeight() - list.outerHeight());
					else list.scrollTop(height);
				}
			},
			copyAttributes: function (from, to) {
				var attrs = $(from)[0].attributes;
				for (var i in attrs) $(to).attr(attrs[i].nodeName, attrs[i].nodeValue);
			},
			setField: function (es) {
				if (!$(this).is('li:visible')) return false;
				input.val($(this).text());
				es.hide();
				if (options.onSelect) options.onSelect.call(input, $(this));
			}
		};
		EditableSelect.init();
		return input;
	}
}) (jQuery);