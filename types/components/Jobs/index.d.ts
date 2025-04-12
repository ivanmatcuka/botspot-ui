import { FC } from 'react';
import type { WP_REST_API_Post } from 'wp-types';
export type JobsProps = {
    jobs: Pick<WP_REST_API_Post, 'excerpt' | 'id' | 'title'>[];
};
export declare const Jobs: FC<JobsProps>;
