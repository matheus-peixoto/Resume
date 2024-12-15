import { Job } from "@/types/resume";
import { NestedList } from "./NestedList";
import { CSSProperties } from "react";

interface WorkInfoProps {
    job: Job
    style?: CSSProperties,
}

export function WorkInfo({ job, style }: WorkInfoProps) {
    return (
        <div className="mt-2 mb-4" style={style}>
            <div className="flex justify-between mt-2">
                <div className="flex flex-col sm:flex-row gap-2 mb-1 min-w-24">
                    <a href={job.link ?? undefined} className="hover:underline" target="_blank" >
                        <h3 className="font-semibold text-black">{job.company}</h3>
                    </a>
                    {
                        job.workModels.map((badge, index) => (
                            <span key={index} className="print:mb-0 sm:inline-flex sm:items-center rounded-md text-black bg-gray-100 text-xs py-1 px-2 text-center">
                                {badge}
                            </span>
                        ))
                    }
                </div>
                <span className="inline-flex items-center text-sm">
                    {`${job.start} - ${job.end}`}
                </span>
            </div>
            <div>
                <div className="print:mb-2 mb-2.5">
                    <h4 className="font-mono print:text-sm text-black leading-none print:leading-3 print:text-[12px]">
                        {job.title}
                    </h4>
                </div>
                <p className="text-sm print:text-xs print:text-[12px] font-medium mb-2">
                    {job.coreDescription}
                </p>
                <NestedList level={0} data={job.bulletList} />
            </div>
        </div>
    );
}