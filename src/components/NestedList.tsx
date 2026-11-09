import type { BulletList } from "@/types/resume";

interface NestedListProps {
    level: number;
    data: BulletList;
}

const listStyles = ["list-disc", "list-square", "list-circle"];

const getListClassName = (level: number) => {
    const spacing = level === 0 ? "text-sm ml-3 print:ml-0" : "text-xs ml-6";
    return `${listStyles[level % listStyles.length]} ${spacing}`;
};

export function NestedList({ level, data }: NestedListProps) {
    const hasChildren = data.children.length > 0;

    return (
        <ul className={getListClassName(level)}>
            <li>
                <span className={hasChildren ? "font-bold text-black" : undefined}>
                    {data.name}{hasChildren && ":"}
                </span>
                {data.children.map((child) => (
                    <NestedList key={child.name} level={level + 1} data={child} />
                ))}
            </li>
        </ul>
    );
}
