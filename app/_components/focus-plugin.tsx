"use client";

import React, { useEffect } from "react";
import { theme } from "@/app/_components/plugins/theme";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";


import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

import { ParagraphNode } from "lexical";

import {$generateHtmlFromNodes} from '@lexical/html'

export default  function Editor({setMyString, isZoomEditorTextarea}: {
  setMyString: (a: string) => void,
  isZoomEditorTextarea:Boolean
}) {

  function OnChangePlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      let myhtml:string
      return editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
         myhtml = $generateHtmlFromNodes(editor)
          
        });
        setMyString(myhtml)
      });
    }, [editor]);
    return null
  }
  
   const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    editable: true,
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
      ParagraphNode,
    ], 
  };

  const URL_MATCHER =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const MATCHERS = [
  (text: string) => {
    const match = URL_MATCHER.exec(text);
    if (match === null) {
      return null;
    }
    const fullMatch = match[0];
    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
      // attributes: { rel: 'noreferrer', target: '_blank' }, // Optional link attributes
    };
  },
];

const height = typeof window !== 'undefined' ? window.innerHeight - 150 : 500 ;

  return (
    <LexicalComposer initialConfig={initialConfig }>
    <div className="editor-container">
      <ToolbarPlugin />
      <div className="editor-inner">
        {
          !isZoomEditorTextarea?
          <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input h-40" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
          />
          :
          <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input overflow-y-auto" style={{height:`${height}px`}}/>}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
          />
        }
         <OnChangePlugin  />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <CodeHighlightPlugin />
        <ListPlugin />
        <LinkPlugin />
        <AutoLinkPlugin />
        <ListMaxIndentLevelPlugin maxDepth={7} />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
    </div>
  </LexicalComposer>
  );
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
export  function onError(error: any) {
  console.error(error);
}

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}






export function Editor2() {

   const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    editable: true,
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
      ParagraphNode,
    ], 
  };

  const URL_MATCHER =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const MATCHERS = [
  (text: string) => {
    const match = URL_MATCHER.exec(text);
    if (match === null) {
      return null;
    }
    const fullMatch = match[0];
    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
      // attributes: { rel: 'noreferrer', target: '_blank' }, // Optional link attributes
    };
  },
];

  return (
    <LexicalComposer initialConfig={initialConfig }>
    <div className="editor-container">
      <ToolbarPlugin />
      <div className="editor-inner">
          <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input h-40" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
          />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <CodeHighlightPlugin />
        <ListPlugin />
        <LinkPlugin />
        <AutoLinkPlugin />
        <ListMaxIndentLevelPlugin maxDepth={7} />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
    </div>
  </LexicalComposer>
  );
}