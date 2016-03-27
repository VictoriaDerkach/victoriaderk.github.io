define(
	'controller',
	['jquery', 'model', 'view'],
	function(){
		return function (model, view){
			var self = this;

			view.elements.addBtn.on('click', addItem);
			function addItem(){
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			view.elements.listContainer.on('click', '.item-delete', removeItem);
			function removeItem(){
				var item = $(this).parent().attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}

			view.elements.listContainer.on('click', '.item-edit', editItem);
			function editItem(){
				var elem = $(this).parent().find('input:first');
				if (elem.attr('disabled')) {
					$('input[class="item-value2"]').attr('disabled', true);
					elem.attr('disabled', false);
					return;
				}
				var item = $(this).parent().attr('data-value');
				var newItem = elem.val();
				model.editItem(item, newItem);
				view.renderList(model.data);
			}

		}
	}
);