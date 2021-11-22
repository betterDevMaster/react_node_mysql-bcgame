import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { ArrowRight, Delete, Edit } from '@material-ui/icons'
import { useDragOver } from '@minoru/react-dnd-treeview'
import { TypeIcon } from './TypeIcon'
import styles from '../style/CustomNode.module.css'

export const CustomNode = (props) => {
    const [hover, setHover] = useState(false)
    const { id, droppable, data } = props.node
    const indent = props.depth * 24

    const handleToggle = (e) => {
        e.stopPropagation()
        props.onToggle(props.node.id)
    }

    const dragOverProps = useDragOver(id, props.isOpen, props.onToggle)

    return (
        <div
            className={`tree-node ${styles.root}`}
            style={{ paddingInlineStart: indent }}
            {...dragOverProps}
            onMouseEnter={() => props.node.id > 3 && setHover(true)}
            onMouseLeave={() => props.node.id > 3 && setHover(false)}
        >
            <div className="flex">
                <div
                    className={`${styles.expandIconWrapper} ${
                        props.isOpen ? styles.isOpen : ''
                    }`}
                >
                    {props.node.droppable && (
                        <div onClick={handleToggle}>
                            <ArrowRight />
                        </div>
                    )}
                </div>
                <div className={styles.labelGridItem}>
                    <TypeIcon droppable={droppable} />
                </div>
                <div className={styles.labelGridItem}>
                    <Typography variant="body2">{props.node.name}</Typography>
                </div>
            </div>
            {hover && (
                <div className="flex">
                    <div className={styles.actionButton}>
                        <IconButton
                            size="small"
                            onClick={() => props.onEdit(id)}
                        >
                            <Edit fontSize="small" />
                        </IconButton>
                    </div>
                    <div className={styles.actionButton}>
                        <IconButton
                            size="small"
                            onClick={() => props.onDelete(id)}
                        >
                            <Delete fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            )}
        </div>
    )
}
