$( function() {

	chrome.storage.sync.get( [ 'devUrl', 'xdUrl' ], function( urls ) {
		$( '#dev-home' ).attr( 'href', urls.devUrl );
		$( '#dev-admin' ).attr( 'href', urls.devUrl + 'wp-admin' );
		$( '#dev-xd' ).attr( 'href', urls.xdUrl );
	} );
} );
