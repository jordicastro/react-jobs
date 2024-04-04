import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto',
}

import PropTypes from 'prop-types';

const Spinner = ({ loading }) => {
    return (
        <ClipLoader 
                color={'#123abc'} 
                loading={loading} 
                cssOverride={override}
                size={150} 
        />
    )
}

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default Spinner