import React, { useEffect, useState } from 'react'
import {
    Tree,
    DragLayerMonitorProps,
    getDescendants,
} from '@minoru/react-dnd-treeview'

import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseLine from '@material-ui/core/CssBaseline'
import { Button, Snackbar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SaveIcon from '@material-ui/icons/Save'
import { CustomNode } from './shared/CustomNode'
import { CustomDragPreview } from './shared/CustomDragPreview'
import { AddDialog } from './shared/AddDialog'
import { theme } from './shared/theme'
import styles from './style/List.module.css'
import { MatxSnackbar, SimpleCard } from 'app/components'
import axios from 'app/services/apiAxiosService.js'

const getLastId = (treeData) => {
    const reversedArray = [...treeData].sort((a, b) => {
        if (a.id < b.id) {
            return 1
        } else if (a.id > b.id) {
            return -1
        }

        return 0
    })

    if (reversedArray.length > 0) {
        return reversedArray[0].id
    }

    return 0
}

function List() {
    const [treeData, setTreeData] = useState(null)
    // const [insertData, setInsertData] = useState(null)
    const [selectedData, setSelectedData] = useState(null)
    const handleDrop = (newTree) => setTreeData(newTree)
    const [open, setOpen] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [respContent, setRespContent] = useState({
        status: false,
        message: '',
    })

    useEffect(() => {
        ;(async () => {
            try {
                const response = await axios.get('/games/')
                setTreeData(response.data)
            } catch (err) {
                setRespContent({ status: false, message: err.message })
            }
        })()
    }, [])

    const handleDelete = (id) => {
        const deleteIds = [
            id,
            ...getDescendants(treeData, id).map((node) => node.id),
        ]
        const newTree = treeData.filter((node) => !deleteIds.includes(node.id))
        setTreeData(newTree)
    }
    const handleEdit = async (id) => {
        const response = await axios.get('/games/' + id)
        setSelectedData(response.data)
        setOpen(true)
    }
    const handleOpenDialog = () => {
        setSelectedData(null)
        setOpen(true)
    }
    const handleCloseDialog = () => {
        setOpen(false)
    }
    const handleSubmit = async (newNode) => {
        if (selectedData) {
            const curIndex = treeData.findIndex(
                (ele) => ele.id === selectedData.id
            )
            newNode.id = selectedData.id
            treeData[curIndex] = newNode
            setTreeData(treeData)
        } else {
            const lastId = getLastId(treeData) + 1
            newNode.id = lastId
            setTreeData([
                ...treeData,
                {
                    ...newNode,
                    id: lastId,
                },
            ])
        }
        // setInsertData(newNode)
        setOpen(false)

        let response
        if (selectedData) response = await axios.put('/games/', newNode)
        else response = await axios.post('/games/', newNode)

        setRespContent({
            status: response.data.status,
            message: response.data.message,
        })
        setSelectedData(null)
        setSnackbarOpen(true)
    }
    // const handleSaveChanges = async () => {
    //     let response
    //     if (selectedData) response = await axios.put('/games/', insertData)
    //     else response = await axios.post('/games/', insertData)

    //     setRespContent({
    //         status: response.data.status,
    //         message: response.data.message,
    //     })
    //     setSelectedData(null)
    //     setSnackbarOpen(true)
    // }
    const handleSnackbarClose = (e) => {
        setSnackbarOpen(false)
    }

    return (
        <div className="m-sm-30">
            <SimpleCard title="Admin Game List">
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseLine />
                        <div className={styles.app}>
                            <div className="flex justify-between mb-2">
                                <Button
                                    onClick={handleOpenDialog}
                                    startIcon={<AddIcon />}
                                    color="primary"
                                    variant="contained"
                                >
                                    Add Node
                                </Button>
                                {/* <Button
                                    onClick={handleSaveChanges}
                                    startIcon={<SaveIcon />}
                                    color="secondary"
                                    variant="contained"
                                >
                                    Save
                                </Button> */}
                                {open && (
                                    <AddDialog
                                        tree={treeData}
                                        selected={selectedData}
                                        onClose={handleCloseDialog}
                                        onSubmit={handleSubmit}
                                    />
                                )}
                            </div>
                            {treeData && (
                                <Tree
                                    tree={treeData}
                                    rootId={0}
                                    render={(node, options) => (
                                        <CustomNode
                                            node={node}
                                            {...options}
                                            onDelete={handleDelete}
                                            onEdit={handleEdit}
                                        />
                                    )}
                                    dragPreviewRender={(monitorProps) => (
                                        <CustomDragPreview
                                            monitorProps={monitorProps}
                                        />
                                    )}
                                    onDrop={handleDrop}
                                    classes={{
                                        root: styles.treeRoot,
                                        draggingSource: styles.draggingSource,
                                        dropTarget: styles.dropTarget,
                                    }}
                                    initialOpen={true}
                                />
                            )}
                        </div>
                    </ThemeProvider>
                </StylesProvider>
            </SimpleCard>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
            >
                <MatxSnackbar
                    onClose={handleSnackbarClose}
                    variant={
                        respContent.message &&
                        respContent.message !== '' &&
                        respContent.status
                            ? 'success'
                            : 'error'
                    }
                    message={respContent.message}
                />
            </Snackbar>
        </div>
    )
}

export default List
