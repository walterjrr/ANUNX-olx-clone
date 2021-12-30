import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import DeleteForever from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';



import TemplateDefault from '../../src/Template/Default'


const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage: {},
    container: {
        padding: theme.spacing(2, 4, 3)
    },
    box: {
        backgroundColor: theme.pallete.background.white,
        padding: theme.spacing(3)
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    thumbsContainer: {
        display: 'flex',
        marginTop: '15px'
    },
    dropzone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
        width: '200px',
        height: '150px',
        margin: '0 15px 15px 0',
        backgroundColor: theme.pallete.background.default,
        border: '2px dashed black',
    },
    thumb: {
        position: 'relative',
        width: '200px',
        height: '150px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

        '& $mainImage': {
            backgroundColor: 'grey',
            padding: '6px 10px',
            position: 'absolute',
            borderRadius: '2px',
            bottom: 0,
            left: 0,
        },

        '&:hover $mask': {
            display: 'flex',
        },

        '& $mask': {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor:'rgba(0,0,0,0.7)',
            width: '100%',
            height: '100%', 
        },
    }
}))

const Publish = () => {
    const classes = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container} >
                <Typography component="h1" variant="h2" align="center" color="primary">
                    Publicar Anuncio
                </Typography>
                <Typography component="h2" variant="h5" align="center" color="primary">
                    Quanto mais detalhado melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6">
                        Titulo do Anuncio
                    </Typography>
                    <TextField 
                        label="ex.: Bicicleta Nova"
                        size="small"
                        fullWidth 
                    />
                    <Typography component="h6" variant="h6">
                        Categoria 
                    </Typography>

                    <br /> <br />

                    <Select 
                    native 
                    value=""
                    fullWidth
                    onChange={() => {}}
                    inpputProps={{
                        name: 'age',
                    }}>
                        <option value="">Selecione</option>
                        <option value={1}>Bebe e crianca</option>
                        <option value={2}>Agricultura</option>
                        <option value={3}>Modas</option>
                        <option value={3}>Carros, Motos e Barcos</option>
                        <option value={3}>Lazer</option>
                        <option value={3}>Imoveis</option>

                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6">
                        Imagens
                    </Typography>
                    <Typography component="div" variant="body2">
                        A primeira imagem é a foto principal
                    </Typography>
                    <Box className={classes.thumbsContainer}>
                        <Box className={classes.dropzone}>
                            <Typography variant="body" color="primary">
                                Clique para adcionar ou arraste a imagem para cá
                            </Typography>
                        </Box>

                        <Box 
                            className={classes.thumb}
                            style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
                            >
                            <Box className={classes.mainImage}>
                                <Typography variant="body2">
                                    principal
                                </Typography>
                            </Box>
                            <Box className={classes.mask}>
                                <IconButton color="primary">
                                    <DeleteForever fontSize="large"/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>    
            </Container> 

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6">
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2">
                        Escreva os detalhe do que esta vendendo
                    </Typography>
                    <TextField 
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </Box>    
            </Container> 

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" gutterBottom>
                        Dados de Contato
                    </Typography>
                    <TextField 
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /> <br />
                    <TextField 
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /> <br />
                    <TextField 
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Box>    
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" color="primary">Publicar Anuncio</Button>
                </Box>
            </Container>

        </TemplateDefault>
    )
}

export default Publish