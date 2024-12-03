interface NestListDataProps {
    name: string,
    children: Array<NestListDataProps>
}

interface NestedListProps {
    level: number,
    data: NestListDataProps
}

export function NestedList({ level, data }: NestedListProps) {
    const listTypeMap: { [key: number]: string } = {
        0: 'list-disc',
        1: 'list-circle',
        2: 'list-square'
    }

    const getUlCSSType = (level: number): string | undefined => {
        level = level % Object.keys(listTypeMap).length
        return listTypeMap[level];
    };

    const getUlClassName = (level: number): string => {
        const isLevelZero = level == 0;
        const fontAndMarginLeft = `${isLevelZero ? 'text-sm ml-3 print:ml-0' : 'text-xs ml-6'}`;

        return `${getUlCSSType(level)} ${fontAndMarginLeft} mt-1`;
    }

    const getFontStyle = () => {
        if (data.children.length > 0) {
            return 'font-bold text-black';
        }

        return '';
    };

    return (
        <ul className={getUlClassName(level)}>
            <li>
                <span className={getFontStyle()}>
                    {data.name + `${data.children.length > 0 ? ':' : ''}`}
                </span>
                {data.children.map((child, index) =>
                    <NestedList key={`${data.name}-${index}-${level}`} level={level + 1} data={child} />
                )}
            </li>
        </ul>
    );
}