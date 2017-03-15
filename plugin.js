
	(function($){

		$.fn.plugin = function(options)
		{
			var settings = $.extend({
				color : "red",
			},options);

			var elem = this;

			elem.mouseenter(function(){
				alert(settings.color);
			})
			return this.css({
				color : settings.color,
			});
		};
	}(jQuery))
