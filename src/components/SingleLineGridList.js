import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Typography} from "@material-ui/core";
import BannerGrid from "./BannerGrid";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
/* istanbul ignore next */
export default function SingleLineGridList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{backgroundColor:"#F4F4F4"}}>
            <Typography variant="h3" gutterBottom style={{color: '#222A4F'}} onClick={event => {
                event.preventDefault();
                window.location.href = props.href
            }}>
                {props.title}
            </Typography>
            <GridList className={classes.gridList} cols={2.5}>
                {props.tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <BannerGrid tile={tile} classes = {classes} href={props.href}/>

                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
