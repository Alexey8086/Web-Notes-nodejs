import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/editorjs';
import List from '@editorjs/editorjs';

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

    holderId: 'editorjs'
})