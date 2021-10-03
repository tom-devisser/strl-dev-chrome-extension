$( function() {
	chrome.storage.sync.get( [ 'devUrl', 'xdUrl', 'trelloInternUrl', 'trelloExternUrl' ], function( urls ) {
		if ( urls.devUrl ) {
			$( '#dev-url' ).val( urls.devUrl );
		}

		if ( urls.xdUrl ) {
			$( '#xd-url' ).val( urls.xdUrl );
		}

		if ( urls.trelloExternUrl ) {
			$( '#trello-e-url' ).val( urls.trelloExternUrl );
		}

		if ( urls.trelloInternUrl ) {
			$( '#trello-i-url' ).val( urls.trelloInternUrl );
		}
	} )

	$( '#save-urls' ).click( function() {
		let devUrl        = $( '#dev-url' ).val(),
			xdUrl           = $( '#xd-url' ).val(),
			trelloInternUrl = $( '#trello-i-url' ).val(),
			trelloExternUrl = $( '#trello-e-url' ).val();

		if ( devUrl ) {
			chrome.storage.sync.set( {
				'devUrl': devUrl,
				'xdUrl': xdUrl,
				'trelloInternUrl': trelloInternUrl,
				'trelloExternUrl': trelloExternUrl,
			},
			function() {
				alert( 'New URL\'s saved' );
			} );
		}
	} );
} );
