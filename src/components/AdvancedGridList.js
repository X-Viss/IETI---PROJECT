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
        //width: "100%",
        //height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function AdvancedGridList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{backgroundColor: "#F4F4F4"}}>
            <Typography variant="h3" gutterBottom style={{color: '#222A4F'}} onClick={event => {
                event.preventDefault();
                window.location.href = props.href
            }}>
                {props.title}
            </Typography>
            <GridList cellHeight={200} spacing={1} cols={props.numcols ? props.numcols : 2}
                      className={classes.gridList}>
                {props.tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.featured}>
                        <BannerGrid tile={tile} classes={classes}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
