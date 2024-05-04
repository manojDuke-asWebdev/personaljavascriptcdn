export const shortcutz = (keypress, callback, target) => {
    // Setup 
    var RightIndex = 0

    // Target
    target = target ? target : document.body

    // Event 
    target.addEventListener('keyup', (e)=>{
        // Is that right key
        if(keypress[RightIndex] == e.key) {
            // Is that last key
            // Whether That is last key run the callback.
            if(keypress.indexOf(e.key) == keypress.length - 1) {
                callback()
                RightIndex = 0
            }
            else {
                RightIndex += 1
            }
        }
        else {
            RightIndex = 0
        }
    })

}
