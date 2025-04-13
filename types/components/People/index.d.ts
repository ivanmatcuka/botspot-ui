import { FC } from 'react';
import { WP_REST_API_Post } from 'wp-types';
export type PeopleProps = {
    people: WP_REST_API_Post[];
};
export declare const People: FC<PeopleProps>;
