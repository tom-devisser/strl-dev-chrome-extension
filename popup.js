$( function() {

	chrome.storage.sync.get( [ 'devUrl', 'xdUrl', 'trelloInternUrl', 'trelloExternUrl' ], function( urls ) {
		if ( urls.devUrl ) {
			$( '#dev-home' ).attr( 'href', urls.devUrl );
			$( '#dev-home' ).css('display', 'block');

			$( '#dev-admin' ).attr( 'href', urls.devUrl + 'wp-admin' );
			$( '#dev-admin' ).css('display', 'block');

			$( '#dev-pages' ).attr( 'href', urls.devUrl + 'wp-admin/edit.php?post_type=page' );
			$( '#dev-pages' ).css('display', 'block');

			$( '#dev-facet' ).attr( 'href', urls.devUrl + 'wp-admin/options-general.php?page=facetwp' );
			$( '#dev-facet' ).css('display', 'block');

			$( '#dev-global' ).attr( 'href', urls.devUrl + 'wp-admin/admin.php?page=strl-general-settings' );
			$( '#dev-global' ).css('display', 'block');
		}

		if ( urls.trelloInternUrl ) {
			$( '#dev-trello-i' ).attr( 'href', urls.devUrl + 'wp-admin/admin.php?page=strl-general-settings' );
			$( '#dev-trello-i' ).css('display', 'block');
		}

		if ( urls.trelloExternUrl ) {
			$( '#dev-trello-e' ).attr( 'href', urls.devUrl + 'wp-admin/admin.php?page=strl-general-settings' );
			$( '#dev-trello-e' ).css('display', 'block');
		}

		if ( urls.xdUrl ) {
			$( '#dev-xd' ).attr( 'href', urls.xdUrl );
			$( '#dev-xd' ).css('display', 'block');
		}
	} );
} );
