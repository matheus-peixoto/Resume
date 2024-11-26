import { RESUME_DATA } from "@/data/ResumeData";
import { LuGlobe } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

export function MainInfo() {
    return (<section className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-black">
                {RESUME_DATA.name}
            </h1>
            <p className="max-w-md text-pretty text-sm my-2 print:text-[12px]">
                {RESUME_DATA.shortDescription}
            </p>
            <p className="max-w-md items-center text-pretty text-xs mb-2">
                <a
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                    href={RESUME_DATA.locationLink}
                    target="_blank"
                >
                    <LuGlobe size={12} />
                    {RESUME_DATA.location}
                </a>
            </p>

            <div className="flex gap-x-1 print:hidden">
                {
                    RESUME_DATA.contact.email ? (
                        <div className="inline-flex justify-center items-center border border-gray-200 w-8 h-8 rounded-md">
                            <LuMail size={16} />
                        </div>

                    ) : null
                }
                {
                    RESUME_DATA.contact.email ? (
                        <div className="inline-flex justify-center items-center border border-gray-200 w-8 h-8 rounded-md">
                            <LuPhone size={16} />
                        </div>
                    ) : null
                }
                {
                    RESUME_DATA.contact.social.map(
                        s => (
                            <div key={s.name} className="inline-flex justify-center items-center border border-gray-200 w-8 h-8 rounded-md">
                                <s.icon />
                            </div>
                        )
                    )
                }
            </div>

            <div className="hidden print:flex flex-col gap-x-1">
                {
                    RESUME_DATA.contact.email
                    && (
                        <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-md font-bold">
                            {RESUME_DATA.contact.email}
                        </a>
                    )
                }

                {
                    RESUME_DATA.contact.email
                    && (
                        <a href={`tel:${RESUME_DATA.contact.phone}`} className="text-md font-bold">
                            {RESUME_DATA.contact.phone}
                        </a>
                    )
                }

                {
                    RESUME_DATA.contact.social.map(
                        s => (
                            <a key={s.name} className="text-md font-bold" href={s.url}>{s.url}</a>
                        )
                    )
                }
            </div>

        </div>

        <div className="w-full h-full max-w-28 max-h-28 print:hidden">
            <img className="rounded-md" src={RESUME_DATA.ownerImgUrl} alt={RESUME_DATA.name + " photo"} />
        </div>
    </section>
    )
}