import React from 'react';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

function BannerGrid(props) {
    return (
        <div>
            <img src={props.tile.img} alt={props.tile.title}/>
            {props.tile.title && props.tile.author ?
                <GridListTileBar
                    title={props.tile.title}
                    subtitle={<span>by: {props.tile.author}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${props.tile.title}`} className={props.classes.icon}
                                    onClick={event => {
                                        event.preventDefault();
                                        window.location.href = "/lugares/"+props.tile.title
                                    }}>
                            <InfoIcon/>
                        </IconButton>
                    }
                /> : ""
            }
        </div>
    );
}

export default BannerGrid;