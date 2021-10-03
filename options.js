$( function() {
	chrome.storage.sync.get( [ 'devUrl', 'xdUrl' ], function( urls ) {
		console.log( urls.devUrl );
		if ( urls.devUrl ) {
			$( '#dev-url' ).val( urls.devUrl );
			$( '#xd-url' ).val( urls.xdUrl );
		}
	} )

	$( '#save-urls' ).click( function() {
		let devUrl = $( '#dev-url' ).val();
		let xdUrl = $( '#xd-url' ).val();

		if ( devUrl ) {
			chrome.storage.sync.set( {
				'devUrl': devUrl,
				'xdUrl': xdUrl,
			},
			function() {
				alert( 'New URL\'s saved' );
			} );
		}
	} );
} );
