// in src/Dashboard.js
import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import {API_TITLE_NAME} from '../config/config_rest';

export default () => (
    <Card>
     <ViewTitle title={API_TITLE_NAME}/>
        <CardText></CardText>
    </Card>
);