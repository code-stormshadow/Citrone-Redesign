import React from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import styles from './Dashboard.module.css';

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className={styles.textEditor}>
      <EditorToolbar className={styles.editorToolbar} />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={'Type Answer...'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
