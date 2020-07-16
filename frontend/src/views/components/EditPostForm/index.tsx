import React, { useState, useRef, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmltoDraft from 'html-to-draftjs';

import { updatePost } from '../../../redux_setup/actions';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Wrapper, InputsWrapper, ButtonsWrapper } from './styles';

const EditPostForm: React.FC = () => {
  const history = useHistory();

  const { id_post } = useParams();
  const posts: IPost[] = useSelector((state: IState) => state.posts);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLSelectElement>(null);

  const post = posts.find(post => post.id === Number(id_post));
  const { contentBlocks, entityMap } = htmltoDraft(post!.text);
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  
  const [ editorState, setEditorState ] = useState(EditorState.createWithContent(contentState));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const rawEditorContent = convertToRaw(editorState.getCurrentContent());

    const data = {
      id: id_post,
      title: titleInputRef.current!.value,
      id_category: Number(categoryInputRef.current!.value),
      text: draftToHtml(rawEditorContent)
    }

    updatePost(data)
    .then(() => history.push('/posts'))
    .catch(() => history.push('/'));
  }

  return (
    <Wrapper>
      <h1>Publicar postagem</h1>
      <InputsWrapper>
        <input ref={titleInputRef} value={post?.title} type="text" />
        <select ref={categoryInputRef} value={post?.id_category} placeholder="Categoria">
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
      <ButtonsWrapper>
        <button type="submit">Agendar Postagem</button>
        <button type="submit" onClick={handleSubmit}>Postar agora!</button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default EditPostForm;