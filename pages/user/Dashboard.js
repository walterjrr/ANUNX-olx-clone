import TemplateDefault from "../../src/Template/Default"
import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { Button } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  Container: {
    padding: '20px'
  },
  cardMedia: {
    paddingTop: '56%',
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

function Home() {
  const classes = useStyles()
  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm" className={classes.Container}>
          <Typography component="h1" variant="h2" align="center">
            Meus anuncios
          </Typography>
          <Button variant="contained" color="primary" className={classes.buttonAdd}>
            Publicar Novo Anuncio
          </Button>
        </Container>
        <Container maxWidth="md">
          <Grid Container spacing={4} >
            <Grid item xs={12} sm={6} md={3}>
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
                <CardActions>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </CardActions>
              </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
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
                <CardActions>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </CardActions>
              </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
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
                <CardActions>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </CardActions>
              </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
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
                <CardActions>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid> 
        </Container> 
      </TemplateDefault>
    </>
  )
}

export default Home