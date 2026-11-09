import type { BulletList } from "@/types/resume";

interface NestedListProps {
    level: number;
    data: BulletList;
}

const listStyles = ["list-disc", "list-square", "list-circle"];

const getListClassName = (level: number) => {
    const spacing = level === 0 ? "ml-0" : level === 1 ? "ml-4" : "ml-5";
    const marker = level === 0 ? "list-none" : listStyles[(level - 1) % listStyles.length];
    const hierarchy = level === 0 ? "nested-list nested-list-root" : "nested-list";
    return `${hierarchy} ${marker} ${spacing} list-outside text-xs text-body print:text-[9px] print:leading-tight`;
};

export function NestedList({ level, data }: NestedListProps) {
    const hasChildren = data.children.length > 0;

    return (
        <ul className={getListClassName(level)}>
            <li>
                <span className={hasChildren ? "font-medium text-foreground" : undefined}>
                    {data.name}{hasChildren && ":"}
                </span>
                {data.children.map((child) => (
                    <NestedList key={child.name} level={level + 1} data={child} />
                ))}
            </li>
        </ul>
    );
}
