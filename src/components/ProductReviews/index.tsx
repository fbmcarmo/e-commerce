import getProductReviewsMock from "@/helpers/getProductReviewsMock";
import { Review } from "@/interfaces/review";
import { useEffect, useState } from "react";
import StarsRating from "../StarsRating";

interface ProductReviewsProps {
    id: number;
}

export default function ProductReviews({ id }: ProductReviewsProps){

    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        async function fetchReviews(){
            const reviews = await getProductReviewsMock({ id })

            setReviews(reviews)
        }

        fetchReviews()
    }, [])

    return (
        <ul className="space-y-6">
            {reviews?.map((review, index) => {
                return (
                    <li className="border-b border-[#343942]/50 pb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <StarsRating 
                                rating={review.rating}
                            />
                            <span className="font-medium text-sm">
                                {review.author}
                            </span>
                            <span className="text-xs text-gray-400">
                                {review.timestamp}
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}