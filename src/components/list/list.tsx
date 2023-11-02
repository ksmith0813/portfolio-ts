import { useState, ReactElement, cloneElement } from 'react'
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  List as MuiList,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import DeleteIcon from '@mui/icons-material/Delete'

function generate(element: ReactElement) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    }),
  )
}

const StyledList = styled('div')(({ theme }) => ({
  backgroundColor: theme.gray2,
}))

export const List = () => {
  const [dense, setDense] = useState(false)
  const [secondary, setSecondary] = useState(false)

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />}
          label='Enable dense'
        />
        <FormControlLabel
          control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} />}
          label='Enable secondary text'
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
            Text only
          </Typography>
          <StyledList>
            <MuiList dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText primary='Single-line item' secondary={secondary ? 'Secondary text' : null} />
                </ListItem>,
              )}
            </MuiList>
          </StyledList>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
            Icon with text
          </Typography>
          <StyledList>
            <MuiList dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary='Single-line item' secondary={secondary ? 'Secondary text' : null} />
                </ListItem>,
              )}
            </MuiList>
          </StyledList>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
            Avatar with text
          </Typography>
          <StyledList>
            <MuiList dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Single-line item' secondary={secondary ? 'Secondary text' : null} />
                </ListItem>,
              )}
            </MuiList>
          </StyledList>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
            Avatar with text and icon
          </Typography>
          <StyledList>
            <MuiList dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Single-line item' secondary={secondary ? 'Secondary text' : null} />
                </ListItem>,
              )}
            </MuiList>
          </StyledList>
        </Grid>
      </Grid>
    </Box>
  )
}
