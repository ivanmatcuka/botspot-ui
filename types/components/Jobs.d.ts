/**
 * Jobs displays a list of job postings. Each job includes a title and an excerpt. Use the stories to preview different job list states.
 * Figma reference: https://www.figma.com/file
 */
import { FC } from 'react';
export type Job = {
    excerpt?: string;
    id: number;
    title: string;
};
export type JobsProps = {
    jobs: Job[];
};
export declare const Jobs: FC<JobsProps>;
