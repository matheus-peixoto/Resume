import type { ResumeProp } from "@/types/resume";
import { About } from "./about";
import { Education } from "./education";
import { GeneralInfo } from "./generalInfo";
import { Project } from "./project";
import { Skills } from "./skill";
import { WorkExperience } from "./workExperience";

interface ResumeSectionsProps extends ResumeProp {
    pageCount?: number;
    showProfilePhoto?: boolean;
}

export function ResumeSections({ resume, pageCount, showProfilePhoto = true }: ResumeSectionsProps) {
    const profileAndWork = (
        <>
            <GeneralInfo resume={resume} showProfilePhoto={showProfilePhoto} />
            <About resume={resume} />
            <WorkExperience resume={resume} />
        </>
    );
    const supportingSections = (
        <>
            <Education resume={resume} />
            <Skills resume={resume} />
            {resume.projects && <Project resume={resume} />}
        </>
    );

    return (
        <main className="resume-document container mx-auto mb-11 overflow-auto p-4 text-body print:mb-0 print:p-0 md:px-8 md:py-16">
            <section
                className="resume-sheet mx-auto flex max-w-2xl flex-col gap-y-8 print:mx-0 print:max-w-none print:gap-y-3"
                data-page-count={pageCount}
            >
                {pageCount === 2 ? (
                    <>
                        <div className="resume-page">{profileAndWork}</div>
                        <div className="resume-page">{supportingSections}</div>
                    </>
                ) : (
                    <>
                        {profileAndWork}
                        {supportingSections}
                    </>
                )}
            </section>
        </main>
    );
}
