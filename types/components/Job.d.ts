/**
 * Job displays a single job posting with a title, excerpt, and a call-to-action button.
 * Figma reference: https://www.figma.com/file
 */
import { FC } from 'react';
export type JobProps = {
    excerpt?: string;
    id: number;
    title: string;
};
export declare const Job: FC<JobProps>;
