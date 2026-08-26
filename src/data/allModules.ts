import { modules as dcsModules } from './modules';
import { outdoorEducationModules } from './outdoorEducationModules';
import { personalCurriculumModules } from './personalCurriculum';

export const allModules = [...dcsModules, ...outdoorEducationModules, ...personalCurriculumModules];
export default allModules;
