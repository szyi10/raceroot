import {
  MDXEditor,
  headingsPlugin,
  linkPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  listsPlugin,
  linkDialogPlugin,
  CreateLink,
  BlockTypeSelect,
} from "@mdxeditor/editor"
import "@mdxeditor/editor/style.css"

const Editor = ({ handleTextChange }) => {
  return (
    <MDXEditor
      onChange={(e) => handleTextChange(e)}
      contentEditableClassName="markdown-editor"
      markdown=""
      plugins={[
        listsPlugin(),
        quotePlugin(),
        headingsPlugin({ allowedHeadingLevels: [2] }),
        linkPlugin(),
        linkDialogPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <CreateLink />
              <BlockTypeSelect />
            </>
          ),
        }),
      ]}
    />
  )
}

export default Editor
