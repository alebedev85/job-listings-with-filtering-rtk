import { RootState } from './index';
import { ItemType } from './types';

export const selectCategores = (state: RootState) => state.categores;

export const selectVisiblePositions = (state: RootState, filters: string[] = []) => {
    if (filters.length === 0) return state.jobs;

    return state.jobs.filter((job: ItemType) => {
        const jobFilter = [job.role, job.level].concat(...job.languages, ...job.tools);
        return filters.every(filter => jobFilter.includes(filter))
    })
}