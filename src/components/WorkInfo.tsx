import type { Job } from "@/types/resume";
import { NestedList } from "./NestedList";

interface WorkInfoProps {
    job: Job;
}

export function WorkInfo({ job }: WorkInfoProps) {
    return (
        <div className="work-entry mt-2 mb-4 print:mt-0 print:mb-1">
            <div className="flex justify-between mt-2 print:mt-0">
                <div className="flex flex-col sm:flex-row gap-2 mb-1 print:mb-0 min-w-24">
                    {job.link ? (
                        <a href={job.link} className="hover:underline" rel="noreferrer" target="_blank">
                            <h3 className="font-semibold text-black">{job.company}</h3>
                        </a>
                    ) : (
                        <h3 className="font-semibold text-black">{job.company}</h3>
                    )}
                    {job.workModels.map((badge) => (
                        <span key={badge} className="print:mb-0 sm:inline-flex sm:items-center rounded-md text-black bg-gray-100 text-xs py-1 px-2 text-center">
                            {badge}
                        </span>
                    ))}
                </div>
                <span className="inline-flex items-center text-sm">
                    {`${job.start} - ${job.end}`}
                </span>
            </div>
            <div>
                <div className="print:mb-1 mb-2.5">
                    <h4 className="font-mono print:text-sm text-black leading-none print:leading-3 print:text-[12px]">
                        {job.title}
                    </h4>
                </div>
                <p className="text-sm print:text-xs print:text-[12px] font-medium mb-2">
                    {job.coreDescription}
                </p>
                {job.bulletList?.map((bullet) => (
                    <NestedList key={bullet.name} level={0} data={bullet} />
                ))}
            </div>
        </div>
    );
}
