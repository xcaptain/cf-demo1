import { json } from '@sveltejs/kit';
import { ACTIONS_CORS_HEADERS } from '@solana/actions';

export async function GET() {
    const title = 'hello';
    return json({
        title,
    }, {
        headers: ACTIONS_CORS_HEADERS
    });
}
