import React, { useState } from 'react'
import {
  Modal,
  Paper,
  Typography,
  Button,
  TextField,
  Grid
} from '@material-ui/core'

export const ManageCategoriesModal = ({
  categories,
  modalState,
  handleClose,
  updateCategory,
  createCategory,
  deleteCategory,
  created,
  classes
}) => {
  const [selectedCategory, setSelectedCategory] = useState({
    _id: '',
    name: ''
  })
  const [input, setInput] = useState('')

  const handleChange = event => {
    setSelectedCategory(prevState => ({
      ...prevState,
      name: event.target.value
    }))
  }

  const handleInput = event => {
    setInput(event.target.value)
  }

  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open
      aria-labelledby='server-modal-title'
      aria-describedby='server-modal-description'
      open={modalState.isOpen}
      onClose={handleClose}
      className={classes.modalContainer}
    >
      <Paper elevation={0} className={classes.modalPaper}>
        <Typography className={classes.orderHeader}>
          CATEGORIAS DISPONIBLES
        </Typography>
        <Paper elevation={0} className={classes.categoriesPaper}>
          {categories &&
            categories.map(category => {
              return (
                <Paper
                  elevation={0}
                  key={category._id}
                  className={classes.categoryContainer}
                  onClick={() =>
                    setSelectedCategory({
                      _id: category._id,
                      name: category.name
                    })
                  }
                >
                  <Typography>{category.name.toUpperCase()}</Typography>
                </Paper>
              )
            })}
        </Paper>
        <Paper elevation={0} className={classes.categoriesControls}>
          <Grid container>
            <Grid item lg={12} className={classes.flexCenter}>
              <TextField
                id='outlined-multiline-flexible'
                label='Selecciona una categoria'
                value={selectedCategory.name}
                onChange={handleChange}
                style={{ margin: '15px' }}
                disabled={!selectedCategory.name ? true : false}
              />
            </Grid>
            <Grid item lg={6} className={classes.flexCenter}>
              <Button
                className={classes.buttonPost}
                onClick={() =>
                  updateCategory(selectedCategory.name, selectedCategory._id)
                }
              >
                ACTUALIZAR
              </Button>
            </Grid>
            <Grid item lg={6} className={classes.flexCenter}>
              <Button
                className={classes.acceptButton}
                onClick={() =>
                  deleteCategory(selectedCategory._id, selectedCategory.name)
                }
              >
                ELIMINAR
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={0} className={classes.categoriesControls}>
          <Grid
            container
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Grid item lg={8}>
              <TextField
                id='outlined-multiline-flexible'
                label='Nueva categoria'
                value={input}
                onChange={handleInput}
                style={{ margin: '15px' }}
              />
            </Grid>
            <Grid item lg={2} className={classes.flexCenter}>
              <Button
                className={classes.buttonPost}
                onClick={() => createCategory(input)}
              >
                CREAR
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={0} className={classes.successMessage}>
          <Typography>{created}</Typography>
        </Paper>
      </Paper>
    </Modal>
  )
}
