import { modules as dcsModules } from './modules';
import { outdoorEducationModules } from './outdoorEducationModules';
import { genesisModule } from './genesisModule';

export const allModules = [...dcsModules, ...outdoorEducationModules, genesisModule];
export default allModules;
