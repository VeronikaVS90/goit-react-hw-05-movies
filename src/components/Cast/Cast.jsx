import PropTypes from 'prop-types';
import { CastList } from "./Cast.styled";
import { useMovie } from "hooks/useMovie";


const Cast = () => {
    const [castList] = useMovie('Cast');

    return (
        <CastList>
            {castList.length === 0 ? 'We don`t have any cast data for this movie' : castList.cast.map(cast => (
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

Cast.propTypes = {
  castList: PropTypes.shape({
    length: PropTypes.number.isRequired,
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        original_name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Cast;