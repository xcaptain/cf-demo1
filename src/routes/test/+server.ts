import { json } from '@sveltejs/kit';

export async function GET() {
    const title = 'hello';

    return json({
        title,
    });
}
