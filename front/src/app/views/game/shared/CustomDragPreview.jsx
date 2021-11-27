import React from 'react'
import { DragLayerMonitorProps } from '@minoru/react-dnd-treeview'
import { TypeIcon } from './TypeIcon'

export const CustomDragPreview = (props) => {
    const item = props.monitorProps.item

    return (
        <div className='dragRoot'>
            <div className='icon'>
                <TypeIcon
                    droppable={item.droppable}
                    fileType={item?.data?.fileType}
                />
            </div>
            <div className='label'>{item.text}</div>
        </div>
    )
}
