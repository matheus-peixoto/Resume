interface SectionHeadingProps {
    className?: string;
    title: string;
}

export function SectionHeading({ className = "", title }: SectionHeadingProps) {
    return (
        <h2
            className={`resume-section-heading text-sm lowercase leading-[1.4] text-foreground print:leading-tight ${className}`}
        >
            {title}
        </h2>
    );
}
