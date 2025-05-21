import Link from "next/link";
export const ButtonLink = ({destination, label}) => {
    return (
            <div>
                <Link href={destination} className="btn">
                    {label}
                </Link>
            </div>
    )
};