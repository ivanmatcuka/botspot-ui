import type { WP_REST_API_Post } from 'wp-types';
import { FC } from 'react';
export type JobsProps = {
    jobs: Pick<WP_REST_API_Post, 'excerpt' | 'id' | 'title'>[];
};
export declare const Jobs: FC<JobsProps>;
