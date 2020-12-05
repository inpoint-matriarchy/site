import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

        menuButton: {
        marginRight: theme.spacing(1)
    },

        title: {
        flexGrow: 1
    },

    mainHeader: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(5),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },

    mainHeaderConent: {
        position: "relative",
        padding: theme.spacing(8),
        marginTop: theme.spacing(5)
    },

    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundOverlay: "rgba(0,0,0,.9)"
    },

    text_header: {
        //бля чё делать, тень не работает
    },

    CardMedia:{
        height: "150px" ,
        width: "260px"
    },
    
    footer: {
        marginTop: "5%",
        backgroundImage: "url(https://sun9-19.userapi.com/impg/BMu-bgiz-KIVJLYSywOsbWRmGOFaNzufQe1k3Q/AABU7eZSVo8.jpg?size=1096x200&quality=96&proxy=1&sign=ae94100f344480483ab9b02afcfdfa53)"
    }
}))

export const cards = [1,2,3,4,5,6];

