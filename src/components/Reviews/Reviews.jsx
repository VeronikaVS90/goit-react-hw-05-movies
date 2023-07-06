import { useMovie } from "hooks/useMovie";
import { ReviewsList } from "./Reviews.styled";

const Reviews = () => {
    const [reviewsList] = useMovie('Reviews');

    return (
        <ReviewsList>
            {reviewsList.length === 0
                ? 'We don`t have any reviews for this movie'
                : reviewsList.map(review => (
                    <li key={review.id}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                ))}
        </ReviewsList>
    );
};

export default Reviews;