import Link from "next/link"

export default function ReviewsPage() {
    return(
        <>
        <h1>Reviews</h1>
        <p>
            Here  we'll have a list of reviews.
        </p>
        <ul>
            <li><Link href="/reviews/diablo">Diablo</Link></li>
            <li><Link href="/reviews/spider-man">Spider-man</Link></li>
        </ul>
        </>
    )
};
