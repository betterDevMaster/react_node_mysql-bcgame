import React, { useState } from 'react'
import {
    Tree,
    DragLayerMonitorProps,
    getDescendants,
} from '@minoru/react-dnd-treeview'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { CustomNode } from './shared/CustomNode'
import { CustomDragPreview } from './shared/CustomDragPreview'
import { AddDialog } from './shared/AddDialog'
import { theme } from './shared/theme'
import styles from './style/List.module.css'
import SampleData from './shared/sample_data.json'
import { SimpleCard } from 'app/components'

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
    const [treeData, setTreeData] = useState(SampleData)
    const handleDrop = (newTree) => setTreeData(newTree)
    const [open, setOpen] = useState(false)

    const handleDelete = (id) => {
        const deleteIds = [
            id,
            ...getDescendants(treeData, id).map((node) => node.id),
        ]
        const newTree = treeData.filter((node) => !deleteIds.includes(node.id))

        setTreeData(newTree)
    }

    const handleCopy = (id) => {
        const lastId = getLastId(treeData)
        const targetNode = treeData.find((n) => n.id === id)
        const descendants = getDescendants(treeData, id)
        const partialTree = descendants.map((node) => ({
            ...node,
            id: node.id + lastId,
            parent: node.parent + lastId,
        }))

        setTreeData([
            ...treeData,
            {
                ...targetNode,
                id: targetNode.id + lastId,
            },
            ...partialTree,
        ])
    }

    const handleOpenDialog = () => {
        setOpen(true)
    }

    const handleCloseDialog = () => {
        setOpen(false)
    }

    const handleSubmit = (newNode) => {
        const lastId = getLastId(treeData) + 1

        setTreeData([
            ...treeData,
            {
                ...newNode,
                id: lastId,
            },
        ])

        setOpen(false)
    }

    return (
        <div className="m-sm-30">
            <SimpleCard title="Admin Game List">
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseLine />
                        <div className={styles.app}>
                            <div>
                                <Button
                                    onClick={handleOpenDialog}
                                    startIcon={<AddIcon />}
                                >
                                    Add Node
                                </Button>
                                {open && (
                                    <AddDialog
                                        tree={treeData}
                                        onClose={handleCloseDialog}
                                        onSubmit={handleSubmit}
                                    />
                                )}
                            </div>
                            <Tree
                                tree={treeData}
                                rootId={0}
                                render={(node, options) => (
                                    <CustomNode
                                        node={node}
                                        {...options}
                                        onDelete={handleDelete}
                                        onCopy={handleCopy}
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
                            />
                        </div>
                    </ThemeProvider>
                </StylesProvider>
            </SimpleCard>
        </div>
    )
}

export default List
