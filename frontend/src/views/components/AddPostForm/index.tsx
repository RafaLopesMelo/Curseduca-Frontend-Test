import React, { useState, useRef, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { createPost } from '../../../redux_setup/actions';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Wrapper, InputsWrapper } from './styles';
import { FaArrowRight } from '../../styles/icons';

const AddPostForm: React.FC = () => {
  const history = useHistory();

  const users: IUser[] = useSelector((state: IState) => state.users);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLSelectElement>(null);

  const [ editorState, setEditorState ] = useState(EditorState.createEmpty())

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userEmail = localStorage.getItem('user_email');
    const [{ id }] = users.filter(user => user.email === userEmail);

    const rawEditorContent = convertToRaw(editorState.getCurrentContent());

    const title = titleInputRef.current!.value;
    const category = Number(categoryInputRef.current!.value);
    const text = draftToHtml(rawEditorContent);

    if(!title) {
      titleInputRef.current!.style.borderColor = 'var(--danger)'
    }

    if(title!=='' && category && text!=='') {
      createPost({
        title,
        text,
        id_user: id,
        id_category: category
      })
      .then(() => history.push('/posts'))
      .catch(() => history.push('/'));
    }
  }

  return (
    <Wrapper>
      <h1>Publicar postagem</h1>
      <InputsWrapper>
        <input ref={titleInputRef} type="text" placeholder="Título da postagem"/>
        <select ref={categoryInputRef} placeholder="Categoria">
          <option value="1">Artigo</option>
          <option value="2">Pensamento</option>
          <option value="3">Aviso</option>
          <option value="4">Conteúdo</option>
        </select>
      </InputsWrapper>
      <Editor
        editorState={editorState}
        onEditorStateChange={editorState => setEditorState(editorState)}
        toolbarOnFocus
        toolbarClassName="toolbar"
        wrapperClassName="wrapper"
        editorClassName="editor"
        placeholder="Escreva sua postagem aqui"
      />
      <button type="submit" onClick={handleSubmit}><FaArrowRight /></button>
    </Wrapper>
  );
};

export default AddPostForm;