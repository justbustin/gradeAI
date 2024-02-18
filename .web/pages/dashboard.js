/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { EventLoopContext, StateContexts, UploadFilesContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs, set_val } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import { Box, HStack, Input, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import ReactDropzone from "react-dropzone"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import { Indicator as RadixProgressIndicator, Root as RadixProgressRoot } from "@radix-ui/react-progress"
import NextHead from "next/head"



export function Indicator_fa52d064a76f0c023616eb8d257ae151 () {
  const state__upload_state = useContext(StateContexts.state__upload_state)


  return (
    <RadixProgressIndicator className={`Indicator`} css={{"background-color": "var(--accent-9)", "width": "100%", "height": "100%", "transition": "transform 250ms linear", "&[dataState='loading']": {"transition": "transform 250ms linear"}, "transform": `translateX(calc(-100% + (${state__upload_state.upload_progress} / 100 * 100%)))`, "boxShadow": "inset 0 0 0 1px var(--gray-a5)"}} max={100} value={state__upload_state.upload_progress}/>
  )
}

export function Fragment_bcd6ed8a0abaa80b83a3bd79eb3a391b () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__upload_state = useContext(StateContexts.state__upload_state)


  return (
    <Fragment>
  {isTrue(state__upload_state.is_uploading) ? (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Uploading... `}
  <RadixThemesLink onClick={(_e) => addEvents([Event("state.upload_state.cancel_upload", {upload_id:`upload1`})], (_e), {})}>
  {`cancel`}
</RadixThemesLink>
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Root_fc06f9bc527c38752e982326edaa8720 () {
  const state__upload_state = useContext(StateContexts.state__upload_state)


  return (
    <RadixProgressRoot className={`Root`} css={{"position": "relative", "overflow": "hidden", "background": "var(--gray-a3)", "borderRadius": "99999px", "width": "100%", "height": "20px", "boxShadow": "inset 0 0 0 1px var(--gray-a5)"}} value={state__upload_state.upload_progress}>
  <Indicator_fa52d064a76f0c023616eb8d257ae151/>
</RadixProgressRoot>
  )
}

export function Fragment_fd8e793a985531c20535c70e2e2570c8 () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);


  return (
    <Fragment>
  {isTrue((filesById.upload1 ? filesById.upload1.map((f) => (f.path || f.name)) : [])) ? (
  <Fragment>
  {(filesById.upload1 ? filesById.upload1.map((f) => (f.path || f.name)) : []).map((children, props) => (
  <RadixThemesText as={`p`} key={props}>
  {children}
</RadixThemesText>
))}
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`No files selected`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
  )
}

export function Reactdropzone_79f83b71b3de88ec5ddbca820d171814 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const ref_upload1 = useRef(null); refs['ref_upload1'] = ref_upload1;

  const on_drop_43559631fc2268b22945d7e839a69ddc = useCallback(e => setFilesById(filesById => ({...filesById, upload1: e})), [addEvents, Event, filesById, setFilesById])

  return (
    <ReactDropzone id={`upload1`} multiple={true} onDrop={on_drop_43559631fc2268b22945d7e839a69ddc} ref={ref_upload1}>
  {({ getRootProps, getInputProps }) => (
    <Box id={`upload1`} ref={ref_upload1} sx={{"border": "1px dotted black", "padding": "2em"}} {...getRootProps()}>
    <Input type={`file`} {...getInputProps()}/>
    <RadixThemesFlex align={`center`} css={{"flexDirection": "column"}} gap={`2`}>
    <RadixThemesButton css={{"height": "70px", "width": "200px", "color": "rgb(107,99,246)", "background": "white", "border": "1px solid rgb(107,99,246)"}}>
    {`Select File(s)`}
  </RadixThemesButton>
    <RadixThemesText as={`p`} css={{"height": "100px", "width": "200px"}}>
    {`Drag and drop files here or click to select files`}
  </RadixThemesText>
    <Fragment_fd8e793a985531c20535c70e2e2570c8/>
  </RadixThemesFlex>
  </Box>
  )}
</ReactDropzone>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_09b1755060ae15beff20b83013fd17ab () {
  const state__upload_state = useContext(StateContexts.state__upload_state)


  return (
    <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  {state__upload_state.files.map((file, index_28a1e6ae36db1d882443fb40cd12fc51) => (
  <RadixThemesLink asChild={true} key={index_28a1e6ae36db1d882443fb40cd12fc51}>
  <NextLink href={`${getBackendURL(env.UPLOAD)}/${file}`} passHref={true}>
  {file}
</NextLink>
</RadixThemesLink>
))}
</RadixThemesFlex>
  )
}

export function Button_eb7c55b69d3c1daf3a34bd74fb29fee6 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);

  const on_click_1fcd43bddb856c03391a3990fccdc039 = useCallback((_e) => addEvents([Event("state.upload_state.handle_upload", {files:filesById.upload1,upload_id:`upload1`,on_upload_progress:(__prog) => addEvents([Event("state.upload_state.on_upload_progress", {prog:__prog})], (__prog), {})}, "uploadFiles")], (_e), {}), [addEvents, Event, filesById, setFilesById])

  return (
    <RadixThemesButton onClick={on_click_1fcd43bddb856c03391a3990fccdc039}>
  {`Upload`}
</RadixThemesButton>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <HStack alignItems={`flex-start`} sx={{"transition": "left 0.5s, width 0.5s", "position": "relative"}}>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "top": "0px", "backgroundColor": "#F8F6F5", "padding": "1em", "height": "4em", "width": "100%", "zIndex": "0", "marginTop": "0.9em", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"marginLeft": "3em", "fontSize": "1.3em", "fontWeight": 500}}>
  {`Home`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "3em", "fontSize": "1.3em", "fontWeight": 500}}>
  {`Grades`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "3em", "fontSize": "1.3em", "fontWeight": 500}}>
  {`Account`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <Link as={NextLink} href={`/`}>
  <img css={{"width": "6.5em", "height": "2em", "marginLeft": "14em"}} src={`https://i.ibb.co/nj8t8Yn/grade-AILogo.png`}/>
</Link>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"height": "2.2em", "color": "#6F6D7B", "background": "#FEFEFD", "width": "20em", "borderRadius": "28px", "marginRight": "5em"}}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <img css={{"width": "3em", "height": "1.4em", "marginLeft": "0.3em", "marginTop": "0.4em", "marginRight": "-0.5em"}} src={`http://localhost:3000/glass.svg`}/>
  <RadixThemesText as={`p`} css={{"color": "#6F6D7B", "marginTop": "0.25em"}}>
  {`Search classes...`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <Box sx={{"paddingTop": "5em", "paddingInlineStart": ["auto", "2em"], "paddingInlineEnd": ["auto", "2em"], "flex": "1", "backgroundColor": "#F8F6F5"}}>
  <Box sx={{"alignItems": "flex-start", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <RadixThemesFlex align={`center`} css={{"flexDirection": "column"}} gap={`2`}>
  <Reactdropzone_79f83b71b3de88ec5ddbca820d171814/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <Button_eb7c55b69d3c1daf3a34bd74fb29fee6/>
</RadixThemesFlex>
  <RadixThemesHeading>
  {`Files:`}
</RadixThemesHeading>
  <Fragment_bcd6ed8a0abaa80b83a3bd79eb3a391b/>
  <Root_fc06f9bc527c38752e982326edaa8720/>
  <Flex_09b1755060ae15beff20b83013fd17ab/>
</RadixThemesFlex>
</Box>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Dashboard`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
