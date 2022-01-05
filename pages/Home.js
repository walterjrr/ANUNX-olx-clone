import TemplateDefault from '../src/Template/Default'
import { Paper, 
    Container, 
    IconButton, 
    InputBase, 
    Typography,
    CardActionArea, 
    CardContent,
    CardMedia,
    Card,
    Button,
    Grid,
    CardActions,

} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    searchContainer: {
        padding: theme.spacing(8, 10, 6)
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: '25px',
    },
    cardMedia: {
        paddingTop: '56%',
    },
}))

const Home = () => {

    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="lg" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align="center">
                    O que Deseja encontrar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase 
                        placeholder="Ex.: iphone 13 com garantia"
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>
            <Container maxWidth="md" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align="center">
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                            className={classes.cardMedia}
                            title="titulo da imagem"
                            image="https://source.unsplash.com/random"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography >
                                    R$ 98,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid> 
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                            className={classes.cardMedia}
                            title="titulo da imagem"
                            image="https://source.unsplash.com/random"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography >
                                    R$ 98,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid> 
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                            className={classes.cardMedia}
                            title="titulo da imagem"
                            image="https://source.unsplash.com/random"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography >
                                    R$ 98,00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>    
                </Grid> 
            </Container>

        </TemplateDefault>
    )
}

export default Home

