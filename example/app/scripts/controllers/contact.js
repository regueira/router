import { router } from '../../../../lib/Dispatcher';

export default function( req, data, next ) {
    console.log( 'controller contacto' );
    console.log(req);
    next();
}
