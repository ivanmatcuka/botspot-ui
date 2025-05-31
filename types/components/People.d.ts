/**
 * People displays a grid of people, each as a post tile with image, name, and excerpt.
 */
import { FC } from 'react';
export declare const EMPTY_STATE_MSG = "No people to display.";
export type Person = {
    excerpt: string;
    featuredImage: string;
    id: number;
    title: string;
};
export type PeopleProps = {
    people: Person[];
};
export declare const People: FC<PeopleProps>;
