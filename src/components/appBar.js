import * as React from 'react'
import Link from 'next/link'

import {AppBar,  
        Toolbar, 
        Typography, 
        Button,  
        Container, 
        IconButton,
        Avatar,  
        Menu,
        MenuItem, 
        Divider,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import {MenuIcon,
        AccountCircle,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  userName: {
    marginLeft: '15px',
  },
  Divider: {
    margin: '6px',
  }
}))

const ButtonAppBar = () => {
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

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
            <IconButton color="white" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src="" /> : <AccountCircle />
              }
              <Typography variant="subtitle2" color="white" className={classes.userName}>
                Walter Peixoto
              </Typography>
            </IconButton>

            <Menu 
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              >
              <Link href="/user/dashboard" passHref> 
                <MenuItem>Meus Anuncios</MenuItem> 
              </Link> 
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novos Anuncios</MenuItem> 
              </Link>
              <Divider className={classes.Divider} />
              <MenuItem>Sair</MenuItem>

            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default ButtonAppBar