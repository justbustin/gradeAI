/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { EventLoopContext, UploadFilesContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs, set_val } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import { Box, HStack, Image as ChakraImage, Input, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import ReactDropzone from "react-dropzone"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Reactdropzone_53f0a0eaf1ec79570104b29a8b73ffd5 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const ref_upload1 = useRef(null); refs['ref_upload1'] = ref_upload1;

  const on_drop_43559631fc2268b22945d7e839a69ddc = useCallback(e => setFilesById(filesById => ({...filesById, upload1: e})), [addEvents, Event, filesById, setFilesById])

  return (
    <ReactDropzone id={`upload1`} multiple={true} onDrop={on_drop_43559631fc2268b22945d7e839a69ddc} ref={ref_upload1}>
  {({ getRootProps, getInputProps }) => (
    <Box id={`upload1`} ref={ref_upload1} sx={{"border": "1px solid black", "padding": "2em"}} {...getRootProps()}>
    <Input type={`file`} {...getInputProps()}/>
    <RadixThemesFlex align={`center`} css={{"flexDirection": "column"}} gap={`2`}>
    <RadixThemesButton css={{"height": "70px", "width": "200px", "color": "black", "background": "white", "border": "1px solid black"}}>
    {`Select File(s)`}
  </RadixThemesButton>
    <RadixThemesFlex align={`center`}>
    <RadixThemesText align={`center`} as={`p`} css={{"height": "100px", "width": "200px"}}>
    {`Drag and drop files here or click to select files`}
  </RadixThemesText>
  </RadixThemesFlex>
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

export function Button_88db37ed33a48ba7cb3352faa1e8865d () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);

  const on_click_6dba807bd9673b3402de52775eda06b5 = useCallback((_e) => addEvents([Event("state.upload_state_modal.handle_upload", {files:filesById.upload1,upload_id:`upload1`,on_upload_progress:(__prog) => addEvents([Event("state.upload_state_modal.on_upload_progress", {prog:__prog})], (__prog), {})}, "uploadFiles")], (_e), {}), [addEvents, Event, filesById, setFilesById])

  return (
    <RadixThemesButton css={{"background": "#3A937D"}} onClick={on_click_6dba807bd9673b3402de52775eda06b5}>
  {`Create`}
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
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontWeight": 500, "fontSize": "1.4em", "marginBottom": "0em"}}>
  {`Assignments`}
</RadixThemesText>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <ChakraImage src={`https://www.svgrepo.com/show/507821/plus-circle.svg`} sx={{"width": "1.3em", "height": "1.3em", "marginTop": "0.5em"}}/>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title css={{"fontFamily": "Work Sans"}}>
  {`Create a New Assignment`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Description css={{"align": "center"}}>
  <RadixThemesSeparator css={{"marginBottom": "1em"}} size={`4`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Work Sans", "fontWeight": 500, "marginBottom": "0.3em"}}>
  {`Assignment Name`}
</RadixThemesText>
  <RadixThemesTextField.Input placeholder={`Enter assignment name...`}/>
  <RadixThemesBox css={{"height": "2em"}}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Work Sans", "fontWeight": 500, "marginBottom": "0.3em"}}>
  {`Due Date`}
</RadixThemesText>
  <RadixThemesTextField.Input placeholder={`Enter due date (MM/DD/YEAR)...`}/>
  <RadixThemesBox css={{"height": "2em"}}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Work Sans", "fontWeight": 500, "marginBottom": "0.3em"}}>
  {`Upload Rubric`}
</RadixThemesText>
  <Reactdropzone_53f0a0eaf1ec79570104b29a8b73ffd5/>
  <RadixThemesFlex align={`center`} css={{"marginLeft": "14.3em", "marginTop": "1.5em"}}>
  <Button_88db37ed33a48ba7cb3352faa1e8865d/>
</RadixThemesFlex>
</RadixThemesDialog.Description>
  <RadixThemesDialog.Close css={{"marginTop": "10em"}}>
  <RadixThemesButton size={`3`}>
  {`Close Dialog`}
</RadixThemesButton>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Name`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} css={{"marginLeft": "2.6em"}}>
  {`Status`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} css={{"marginLeft": "2.7em"}}>
  {`Date Posted`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Submitted`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesSeparator css={{"height": "0.15em"}} size={`4`}/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Homework 5`}
</RadixThemesText>
  <Link as={NextLink} href={`/grading`}>
  <ChakraImage src={`https://www.svgrepo.com/show/510970/external-link.svg`} sx={{"width": "1em", "height": "1em", "marginTop": "0.28em"}}/>
</Link>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Not Reviewed`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/407314/red-circle.svg`} sx={{"width": "0.8em", "height": "0.8em", "marginTop": "0.35em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`February 25, 2003`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`268/271`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Homework 4`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/510970/external-link.svg`} sx={{"width": "1em", "height": "1em", "marginTop": "0.28em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Not Reviewed`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/407314/red-circle.svg`} sx={{"width": "0.8em", "height": "0.8em", "marginTop": "0.35em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`February 18, 2023`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`267/271`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Homework 3`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/510970/external-link.svg`} sx={{"width": "1em", "height": "1em", "marginTop": "0.28em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Reviewed`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/405751/green-circle.svg`} sx={{"width": "0.8em", "height": "0.8em", "marginTop": "0.35em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`February 11, 2023`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`270/271`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Homework 2`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/510970/external-link.svg`} sx={{"width": "1em", "height": "1em", "marginTop": "0.28em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Reviewed`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/405751/green-circle.svg`} sx={{"width": "0.8em", "height": "0.8em", "marginTop": "0.35em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`February 2, 2023`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`252/271`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Homework 1`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/510970/external-link.svg`} sx={{"width": "1em", "height": "1em", "marginTop": "0.28em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Reviewed`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/405751/green-circle.svg`} sx={{"width": "0.8em", "height": "0.8em", "marginTop": "0.35em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`January 26, 2023`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`271/271`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"marginTop": "2em", "fontWeight": 500, "fontSize": "1.4em", "marginBottom": "0em"}}>
  {`Exams`}
</RadixThemesText>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <ChakraImage src={`https://www.svgrepo.com/show/507821/plus-circle.svg`} sx={{"width": "1.3em", "height": "1.3em", "marginTop": "3.3em"}}/>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title css={{"fontFamily": "Work Sans"}}>
  {`Create a New Exam`}
</RadixThemesDialog.Title>
  <RadixThemesDialog.Description css={{"align": "center"}}>
  <RadixThemesSeparator css={{"marginBottom": "1em"}} size={`4`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Work Sans", "fontWeight": 500, "marginBottom": "0.3em"}}>
  {`Exam Name`}
</RadixThemesText>
  <RadixThemesTextField.Input placeholder={`Enter exam name...`}/>
  <RadixThemesBox css={{"height": "2em"}}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Work Sans", "fontWeight": 500, "marginBottom": "0.3em"}}>
  {`Due Date`}
</RadixThemesText>
  <RadixThemesTextField.Input placeholder={`Enter due date (MM/DD/YEAR)...`}/>
  <RadixThemesBox css={{"height": "2em"}}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Work Sans", "fontWeight": 500, "marginBottom": "0.3em"}}>
  {`Upload Rubric`}
</RadixThemesText>
  <Reactdropzone_53f0a0eaf1ec79570104b29a8b73ffd5/>
  <RadixThemesFlex align={`center`} css={{"marginLeft": "14.3em", "marginTop": "1.5em"}}>
  <Button_88db37ed33a48ba7cb3352faa1e8865d/>
</RadixThemesFlex>
</RadixThemesDialog.Description>
  <RadixThemesDialog.Close css={{"marginTop": "10em"}}>
  <RadixThemesButton size={`3`}>
  {`Close Dialog`}
</RadixThemesButton>
</RadixThemesDialog.Close>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Name`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.8em"}}>
  {`Status`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`} css={{"marginLeft": "2.7em"}}>
  {`Date Posted`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Submitted`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesSeparator css={{"height": "0.15em"}} size={`4`}/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Midterm`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/510970/external-link.svg`} sx={{"width": "1em", "height": "1em", "marginTop": "0.28em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Not Reviewed`}
</RadixThemesText>
  <ChakraImage src={`https://www.svgrepo.com/show/407314/red-circle.svg`} sx={{"width": "0.8em", "height": "0.8em", "marginTop": "0.35em"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`February 25, 2003`}
</RadixThemesText>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`268/271`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesBox css={{"height": "40vh"}}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Box>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Assignment`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
