(function()
{
	window.XMLHttpRequest.prototype._status = 0;
	Object.defineProperties(window.XMLHttpRequest.prototype, 
	{
		status : 
		{
			get : function()
			{ 
				// if state is complete, the path is `file:///`, this is cordova so lets return a 200, NOT a 0
				return this.readyState === 4 && /^file:\/{3}[^\/]/i.test(window.location.href) ? 200 : this._status; 
			},
			set : function(value)
			{
				this._status = value;
			}
		}
	});
})();