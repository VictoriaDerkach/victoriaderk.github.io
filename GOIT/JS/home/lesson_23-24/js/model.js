define(
	'model',
	[],
	function(){
		return function (data){
			var self = this;
			self.data = data;

			self.addItem = function(item){
				if (item.length === 0) {
					return;
				}
				self.data.push(item);
				return self.data;
			};

			self.removeItem = function(item){
				console.log(item);
				var indexRemove = self.data.indexOf(item);
				if (indexRemove === -1){
					return;
				}
				self.data.splice(indexRemove, 1);
				return self.data;
			}

			self.editItem = function(item, newItem){
				var indexEdit = self.data.indexOf(item);
				if (indexEdit === -1){
					return;
				}
				self.data[indexEdit] = newItem;
				return self.data;
			}
		}
	}
	
);