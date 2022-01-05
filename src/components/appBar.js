import * as React from 'react'
import Link from 'next/link'

import {AppBar,  
        Toolbar, 
        Typography, 
        Button,  
        Container, 
        IconButton,
        Avatar, 
        makeStyles, 
        Menu,
        MenuItem, 
        Divider,
} from '@material-ui/core'

import {MenuIcon,
        AccountCircle,
} from '@material-ui/icons';

useStyles = makeStyles(() => ({
  userName: {
    marginLeft: '15px',
  }
}))

const ButtonAppBar = () => {
  const classes = useStyles()
  return (
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6">
              Anunx
            </Typography>
            <Link href="/user/Publish" passHref>
              <Button color="inherit" variant="outlined">
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton color="white">
              {
                true === false
                  ? <Avatar src="" /> : <AccountCircle />
              }
              <Typography variant="subtitle2" color="white" className={classes.userName}>
                Walter Peixoto
              </Typography>
            </IconButton>

            <Menu>
              <MenuItem>Meus Anuncios</MenuItem> 
              <MenuItem>Publicar novos Anuncios</MenuItem> 
              <Divider />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default ButtonAppBar