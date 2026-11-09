interface SectionHeadingProps {
    className?: string;
    title: string;
}

export function SectionHeading({ className = "mb-2 print:mb-0", title }: SectionHeadingProps) {
    return (
        <div className={className}>
            <h2 className="text-xl print:text-lg font-bold text-black">{title}</h2>
        </div>
    );
}
