import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="text-4xl font-bold bg-[#ff6347] font-mono flex flex-col items-center justify-center h-[100vh] w-[100vw]">
            <h2>Successful Payment</h2>
            <Link href="/" className="absolute top-4 left-4 text-xl underline">
                Back to Home
            </Link>
        </div>
    );
}
