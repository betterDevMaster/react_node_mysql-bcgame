import React from 'react'
import Editor from 'react-avatar-editor'
import { Icon } from '@material-ui/core'
import ZoomIn from '@material-ui/icons/ZoomIn'

const AvatarEditor = ({
    image = null,
    allowZoomOut = false,
    position = { x: 0.5, y: 0.5 },
    scale = 1,
    rotate = 0,
    borderRadius = 200,
    border = 50,
    width = 300,
    height = 300,
    color = [255, 255, 255, 0.6],
    panelShow = false,
    onEditorChange,
}) => {
    var editor = null
    const [state, setState] = React.useState({
        image,
        scale,
        rotate,
    })
    const handleNewImage = (e) => {
        setState({ ...state, image: e.target.files[0] })
    }
    const handlePositionChange = (position) => {
        setState({ ...state, position })
    }
    const setEditorRef = (ed) => {
        editor = ed
        onEditorChange(editor)
    }
    const handleScale = (e) => {
        const scale = parseFloat(e.target.value)
        setState({ ...state, scale })
    }
    const rotateLeft = (e) => {
        e.preventDefault()

        setState({ ...state, rotate: (rotate - 90) % 360 })
    }
    const rotateRight = (e) => {
        e.preventDefault()
        setState({ ...state, rotate: (rotate + 90) % 360 })
    }

    return (
        <div>
            <div className="crop-area text-center">
                <Editor
                    ref={setEditorRef}
                    scale={parseFloat(state.scale)}
                    width={width}
                    color={color} // RGBA
                    height={height}
                    position={position}
                    onPositionChange={handlePositionChange}
                    rotate={parseFloat(state.rotate)}
                    border={border}
                    borderRadius={borderRadius}
                    image={state.image}
                    className="editor-canvas"
                    style={{backgroundColor: '#a9a9a9'}}
                />
                <button className="upload flex justify-center items-center btn-transback">
                    <svg className="icon" viewBox="0 0 32 32">
                        <path d="M24.751 6.492H23.25l-1.47-1.47a4.133 4.133 0 00-2.936-1.219H13.17a4.133 4.133 0 00-2.936 1.219l-1.476 1.47H7.25a5.497 5.497 0 00-5.497 5.477v10.737a5.498 5.498 0 005.497 5.491h17.502a5.504 5.504 0 005.497-5.49V11.97a5.504 5.504 0 00-5.497-5.478zm3.298 16.214a3.299 3.299 0 01-3.298 3.292H7.249a3.298 3.298 0 01-3.298-3.291V11.971a3.298 3.298 0 013.298-3.279h1.96c.305-.002.58-.127.779-.327l1.815-1.784a1.955 1.955 0 011.39-.578h5.664c.543 0 1.035.221 1.39.578l1.74 1.74c.202.228.496.371.823.371h1.96a3.297 3.297 0 013.279 3.278v.001z"></path>
                        <path d="M16 9.602h-.006a7.118 7.118 0 107.118 7.118v-.007a7.11 7.11 0 00-7.111-7.111zm3.97 7.576a.628.628 0 01-.628.628h-2.255v2.268a.628.628 0 01-.628.628h-.942a.628.628 0 01-.628-.628v-2.28h-2.255a.628.628 0 01-.628-.628v-.936c0-.347.281-.628.628-.628h2.312V13.34c0-.347.281-.628.628-.628h.942c.347 0 .628.281.628.628v2.28h2.199c.347 0 .628.281.628.628z"></path>
                    </svg>
                    <input type="file" onChange={handleNewImage} />
                </button>
            </div>
            {panelShow && (
                <div className="flex justify-center items-center">
                    <ZoomIn />
                    <input
                        name="scale"
                        type="range"
                        onChange={handleScale}
                        min={allowZoomOut ? '0.1' : '1'}
                        max="2"
                        step="0.01"
                        defaultValue="1"
                        title="Zoom"
                    />

                    <button
                        className="btn-transback"
                        onClick={rotateLeft}
                        title="Left rotate 90 degress counterclockwise"
                    >
                        <Icon>rotate_left</Icon>
                    </button>
                    <button
                        className="btn-transback"
                        onClick={rotateRight}
                        title="Right rotate 90 degress counterclockwise"
                    >
                        <Icon>rotate_right</Icon>
                    </button>
                </div>
            )}
        </div>
    )
}

export default AvatarEditor
