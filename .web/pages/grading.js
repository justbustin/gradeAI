/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Box, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



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
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <div css={{"width": "115em"}} dangerouslySetInnerHTML={{"__html": "<iframe src='http://localhost:3000/118.pdf' width='100%' height='500px' />"}}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontWeight": 500, "fontSize": "1.4em"}}>
  {`Summary`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`If you don't like a test prompt, you can get a different (random) prompt with the button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.`}
</RadixThemesText>
  <RadixThemesBox css={{"height": "1.5em"}}/>
  <RadixThemesText as={`p`} css={{"fontWeight": 500, "fontSize": "1.4em"}}>
  {`Score (Out of 10)`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`9.6`}
</RadixThemesText>
  <RadixThemesBox css={{"height": "1.5em"}}/>
  <RadixThemesText as={`p`} css={{"fontWeight": 500, "fontSize": "1.4em"}}>
  {`Confidence`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`88.9`}
</RadixThemesText>
  <RadixThemesBox css={{"height": "1.5em"}}/>
  <RadixThemesText as={`p`} css={{"fontWeight": 500, "fontSize": "1.4em"}}>
  {`Detailed Notes`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`BLAH BLAH BLAH BLAH`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</Box>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Grading`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
