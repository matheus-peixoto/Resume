
import { Resume } from "@/types/resume";
import { RESUMEEN } from './ResumeEN';
import { RESUMEPTBR } from './ResumePTBR';

const resumesMap: Record<string, Resume> = {
    "en": RESUMEEN,
    "pt-br": RESUMEPTBR,
};

export default resumesMap;