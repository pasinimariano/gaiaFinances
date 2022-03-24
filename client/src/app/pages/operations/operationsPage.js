import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import { mapStateToProps, mapDispatchToProps } from './reduxConnection'
import { Statemets } from './statement'

import { OperationsTable } from '../../components/operations/operationsTable'
import { Controls } from '../../components/operations/controls'
import { UpdateOperationModal } from '../../components/operations/updateOperationModal'
import { NewOperationModal } from '../../components/operations/newOperationModal'

import { Styles } from '../../styles/operationsStyles'
import { ManageCategoriesModal } from '../../components/operations/manageCategoryModal'

const OperationsPage = ({
  user,
  userOperations,
  paginationState,
  filteredOperations,
  setFilters,
  setPagination,
  getAllOperations
}) => {
  const classes = Styles()

  const {
    indexFirstOperation,
    indexLastOperation,
    nextPage,
    prevPage,
    selection,
    setSelection,
    newOperation,
    setNewOperation,
    handleChange,
    modalState,
    handleOpen,
    handleClose,
    status,
    created,
    errors,
    postOperation,
    updateOperation,
    deleteOperation,
    categories,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
  } = Statemets(user)

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    setFilters(userOperations, selection)
  }, [selection, userOperations])

  useEffect(() => {
    setPagination(filteredOperations, indexFirstOperation, indexLastOperation)
  }, [
    indexFirstOperation,
    indexLastOperation,
    filteredOperations,
    userOperations
  ])

  useEffect(() => {
    if (created) {
      getAllOperations(user.user._id, user.token)
    }
  }, [created])

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item lg={12} className={classes.tableContainer}>
        <Controls
          setSelection={setSelection}
          handleOpen={handleOpen}
          classes={classes}
        />
        <OperationsTable
          userOperations={filteredOperations}
          paginationState={paginationState}
          nextPage={() => nextPage(filteredOperations)}
          prevPage={prevPage}
          indexFirstOperation={indexFirstOperation}
          indexLastOperation={indexLastOperation}
          handleOpen={handleOpen}
          classes={classes}
        />
      </Grid>
      {modalState.isOpen && modalState.selected === 'update' ? (
        <UpdateOperationModal
          user={user}
          created={created}
          handleChange={handleChange}
          modalState={modalState}
          handleClose={handleClose}
          newOperation={newOperation}
          setNewOperation={setNewOperation}
          categories={categories}
          status={status}
          updateOperation={updateOperation}
          deleteOperation={deleteOperation}
          errors={errors}
          classes={classes}
        />
      ) : modalState.isOpen && modalState.selected === 'newOperation' ? (
        <NewOperationModal
          handleChange={handleChange}
          modalState={modalState}
          handleClose={handleClose}
          newOperation={newOperation}
          postOperation={postOperation}
          categories={categories}
          status={status}
          errors={errors}
          classes={classes}
        />
      ) : modalState.isOpen && modalState.selected === 'newCategory' ? (
        <ManageCategoriesModal
          categories={categories}
          modalState={modalState}
          handleClose={handleClose}
          updateCategory={updateCategory}
          createCategory={createCategory}
          deleteCategory={deleteCategory}
          created={created}
          classes={classes}
        />
      ) : null}
    </Grid>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage)
