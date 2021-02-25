import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from "@material-ui/icons/Info";
import {Typography} from "@material-ui/core";

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
        <div className={classes.root}>
            <Typography variant="h3" gutterBottom style={{color: 'black'}}>
                {props.title}
            </Typography>
            <GridList cellHeight={200} spacing={1} cols={props.numcols ? props.numcols : 2} className={classes.gridList}>
                {props.tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.featured} >
                        <img src={tile.img} alt={tile.title} />
                        {tile.title && tile.author ?
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            /> : ""
                        }
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
