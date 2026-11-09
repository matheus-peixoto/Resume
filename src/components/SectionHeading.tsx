interface SectionHeadingProps {
    className?: string;
    title: string;
}

export function SectionHeading({ className = "", title }: SectionHeadingProps) {
    return (
        <h2
            className={`resume-section-heading text-sm font-medium lowercase leading-[1.4] text-heading print:leading-tight ${className}`}
        >
            {title}
        </h2>
    );
}
