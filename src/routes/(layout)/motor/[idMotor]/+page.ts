import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    return {
        idMotor: params.idMotor
    };
}) satisfies PageLoad;