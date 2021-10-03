$( function() {

	chrome.storage.sync.get( [ 'devUrl', 'xdUrl' ], function( urls ) {
		if ( urls.devUrl ) {
			$( '#dev-home' ).attr( 'href', urls.devUrl );
			$( '#dev-home' ).css('display', 'block');

			$( '#dev-admin' ).attr( 'href', urls.devUrl + 'wp-admin' );
			$( '#dev-admin' ).css('display', 'block');
		}

		if ( urls.xdUrl ) {
			$( '#dev-xd' ).attr( 'href', urls.xdUrl );
			$( '#dev-xd' ).css('display', 'block');
		}
	} );
} );
