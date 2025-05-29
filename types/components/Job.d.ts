/**
 * Job displays a single job posting with a title, excerpt, and a call-to-action button.
 * Figma reference: https://www.figma.com/file
 */
import { FC } from 'react';
import { CustomPost } from '../types';
export type JobProps = Pick<CustomPost, 'excerpt' | 'id' | 'title'>;
export declare const Job: FC<JobProps>;
