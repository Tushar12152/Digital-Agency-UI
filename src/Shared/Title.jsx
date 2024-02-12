
import PropTypes from 'prop-types';

const Title = ({Heading}) => {
    return (
        <div>
            <h1 className='text-center font-bold text-5xl'>{Heading}</h1>
        </div>
    );
};

Title.propTypes = {
    Heading:PropTypes.node,
};

export default Title;