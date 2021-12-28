import TemplateDefault from "../../src/Template/Default"
import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { Button } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  Container: {
    padding: '20px'
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
      </TemplateDefault>
    </>
  )
}

export default Home