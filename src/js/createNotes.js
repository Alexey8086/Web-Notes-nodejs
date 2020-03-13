import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/editorjs';
import List from '@editorjs/editorjs';
import '../styles/createNotes.css'

const PARENT_CONTAINER = document.getElementById('parent_container')

const editor = new EditorJS({

    tools: {
        
        header: {
            class: Header, 
            inlineToolbar: ['link']
        },

        list: {
            class: List,
            inlineToolbar: [
                'link',
                'bold'
            ]
        }
        
    },

    holder: 'editorjs'
})

// if (matchMedia) {
//     let screen = window.matchMedia("(min-width: 1114px)")
//     screen.addListener(Changes)
//     Changes(screen)
// }

// function Changes(screen) {
//      if (screen.matches) {
//         PARENT_CONTAINER.remove('editorJs')
//         PARENT_CONTAINER.contentEditable="false"
//         PARENT_CONTAINER.spellcheck="false"
//     }
//     else {
//         PARENT_CONTAINER.add('editorJs')
//         PARENT_CONTAINER.contentEditable="true"
//         PARENT_CONTAINER.spellcheck="true"
//     }
// }



