import { RESUME } from "@/data/Resume";
import { NestedList } from "./NestedList";
import { CSSProperties } from "react";

interface WorkInfoProps {
    index: number,
    style?: CSSProperties
}

export function WorkInfo({ index, style }: WorkInfoProps) {
    const job = RESUME.jobs[index];

    return (
        <div className="mt-2 mb-4" style={style}>
            <div className="flex justify-between mt-2">
                <div className="flex gap-2 mb-1">
                    <a href={job.link} className="hover:underline" target="_blank">
                        <h3 className="font-semibold text-black">{job.company}</h3>
                    </a>
                    {
                        job.workModels.map((badge, index) => (
                            <span key={index} className="rounded-md text-black bg-gray-100 text-xs py-1 px-2">
                                {badge}
                            </span>
                        ))
                    }
                </div>
                <span className="inline-flex items-center text-sm">
                    {`${job.start} - ${job.end ?? 'Atual'}`}
                </span>
            </div>
            <div>
                <div className="mb-2">
                    <h4 className="font-mono text-sm text-black leading-none print:text-[12px]">
                        {job.title}
                    </h4>
                </div>
                <p className="text-xs print:text-[12px] font-medium mb-2">
                    {job.coreDescription}
                </p>
                <NestedList level={0} data={job.bulletList} />
            </div>
        </div>
    );
}