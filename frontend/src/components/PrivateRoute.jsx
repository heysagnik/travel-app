import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authState } from '../recoil/authState';

export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useRecoilValue(authState);
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}