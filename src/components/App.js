import React,{ useState,useEffect } from  'react';
import Editor from './Editor';
import localStorage from '../hooks/useLocalStorage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const [html,setHtml] = localStorage('html','')
  const [css,setCss] = localStorage('css','')
  const [js,setJs] = localStorage('js','')
  const [srcDoc,setSrcDoc] =  useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    },300)
    return () => clearTimeout(timeout)
  },[html,css,js])
  
  
    

  
  return (
  <><div className = "horizontal">
      <div className = "pane1 top-pane">
        
        
      <Tabs>
      <TabList>
        <Tab>Index.html</Tab>
        <Tab>Index.css</Tab>
        <Tab>Index.js</Tab>
      </TabList>
  
      <TabPanel>
      <Editor 
          language = "xml" 
          displayName = "HTML" 
          value = {html} 
          onChange = {setHtml}
        />
      </TabPanel>
      <TabPanel>
      <Editor 
          language = "css" 
          displayName = "CSS" 
          value = {css} 
          onChange = {setCss}
        />
      </TabPanel>
      <TabPanel>
      <Editor 
          language = "javascript" 
          displayName = "JS" 
          value = {js} 
          onChange = {setJs}
        />
      </TabPanel>
    </Tabs>
        
        
      </div>
      
      <div className = "pane2">
        <h1>Live server</h1>
        <iframe
          srcDoc = {srcDoc}
          title = "output"
          sandbox = "allow-scripts"
          frameBorder = "0"
          width = "100%"
          height = "100%"
        />
      </div>
      </div>
    </>
  )
}

export default App;
