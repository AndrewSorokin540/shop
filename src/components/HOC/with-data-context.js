import React from 'react';
import { DataConsumer } from '../data-service-context';

const WithDataContext = (Wrapped) => {
    return (props) => {
        return (
            <DataConsumer>
                {
                    dataServise => <Wrapped {...props} dataServise={dataServise} />
                }
            </DataConsumer>
        )
    }
}

export default WithDataContext;