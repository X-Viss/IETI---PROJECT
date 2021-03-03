import React from 'react';
import {Card, CardActionArea, CardContent, CardHeader, Typography} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';

function BasicCard(props) {
    return (
        <Card >
            <CardActionArea>
                <CardHeader
                    action={
                        <FavoriteIcon />
                    }
                    title={props.namesite}
                    subheader={props.location}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BasicCard;