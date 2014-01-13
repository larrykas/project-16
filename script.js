$('#search').keyup(function(){
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data){
		var output = '<ul class="searchresults">' ;
		$.each(data, function(key, val){
			if ((val.make.search(myExp)  != -1) ||
			(val.model.search(myExp)  != -1)) {
		
				output += '<li>' ;
				output += '<h2>' + val.make + '</h2>' ;
				output += '<img src="images/' + val.model +' vn.jpg" alt "' + val.make +'" />';
				output += '<p>'+ val.info + '</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	
	}); //get JSON
});