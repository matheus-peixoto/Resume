import type { CSSProperties } from "react";
import type { BulletList, Job } from "@/types/resume";

const countBulletNodes = (bullets: BulletList[]): number => bullets.reduce(
    (total, bullet) => total + 1 + countBulletNodes(bullet.children),
    0,
);

export const getJobSpacingSlots = (job: Job) => (
    Math.min(5, 2 + Math.log2(1 + countBulletNodes(job.bulletList ?? [])))
);

export const getWorkSpacingSlots = (jobs: Job[]) => (
    1 + jobs.reduce((total, job) => total + getJobSpacingSlots(job), 0)
);

export const getSpacingStyle = (slots: number) => ({
    "--spacing-slots": Math.max(1, slots),
}) as CSSProperties;
