import { CastList } from "./Cast.styled";
import { useMovie } from "hooks/useMovie";

const Cast = () => {
    const [castList] = useMovie('Cast');

    return (
        <CastList>
            {castList.length !== 0 && castList.cast.map(cast => (
                <li key={cast.id}>
                    <h4>{cast.name}</h4>
                    <p>
                        Character: {cast.original_name}/{cast.character}
                    </p>
                </li>
            ))}
        </CastList>
    );
};

export default Cast;