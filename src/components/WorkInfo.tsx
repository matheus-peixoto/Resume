import type { Job } from "@/types/resume";
import { NestedList } from "./NestedList";
import { getJobSpacingSlots, getSpacingStyle } from "@/lib/resumeLayout";

interface WorkInfoProps {
    job: Job;
}

export function WorkInfo({ job }: WorkInfoProps) {
    return (
        <article className="work-entry w-full" style={getSpacingStyle(getJobSpacingSlots(job))}>
            <div className="flex w-full items-baseline gap-x-3">
                <div className="min-w-24">
                    {job.link ? (
                        <a href={job.link} className="hover:underline" rel="noreferrer" target="_blank">
                            <h3 className="text-sm font-medium leading-snug text-foreground print:leading-none">{job.company} ↗</h3>
                        </a>
                    ) : (
                        <h3 className="text-sm font-medium leading-snug text-foreground print:leading-none">{job.company}</h3>
                    )}
                </div>
                <span className="ml-auto shrink-0 text-sm text-foreground print:text-[11px] print:leading-tight">
                    {`${job.start} - ${job.end}`}
                </span>
            </div>
            <div className="work-entry-content space-y-1 print:space-y-0">
                <h4 className="text-sm leading-snug text-body print:text-[11px] print:leading-tight">
                    {job.title}
                </h4>
                <p className="text-pretty text-xs text-body print:text-[9px] print:leading-tight">
                    {job.coreDescription}
                </p>
                {job.bulletList?.map((bullet) => (
                    <NestedList key={bullet.name} level={0} data={bullet} />
                ))}
            </div>
        </article>
    );
}
